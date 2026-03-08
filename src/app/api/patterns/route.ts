import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { entries } = await request.json();

  if (!entries || !Array.isArray(entries) || entries.length < 3) {
    return NextResponse.json(
      { error: "Need at least 3 entries for pattern analysis" },
      { status: 400 }
    );
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const entrySummaries = entries
    .slice(-20) // Last 20 entries max
    .map(
      (e: { date?: string; distillationText?: string; reflectionText?: string; carryLine?: string; carryAction?: string; tags?: string[] }, i: number) =>
        `Entry ${i + 1} (${e.date || "unknown"}):\n- Insight: "${e.distillationText || e.reflectionText || ""}"\n${e.carryLine ? `- Carry: "${e.carryLine}" (${e.carryAction || ""})` : ""}\n- Tags: ${(e.tags || []).join(", ")}`
    )
    .join("\n\n");

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are a pattern analyst for Mind Forge, a daily intellectual training app. You have access to a user's recent entries. Your job is to surface patterns they might not see themselves.

Analyze the entries and return a JSON object with exactly this structure:
{
  "recurringMotifs": ["3-5 recurring themes or preoccupations you notice"],
  "blindSpots": ["1-3 things they seem to avoid, soften, or never address directly"],
  "growthEdges": ["2-3 areas where their thinking has sharpened or deepened over time"],
  "selfPortrait": "A 2-3 sentence honest portrait of what kind of thinker they are becoming, based on the evidence. Be specific, not flattering.",
  "nextChallenge": "One specific prompt or question that would push them into territory they've been avoiding. Make it pointed."
}

Be honest, not encouraging. Name real patterns. If entries are too vague to analyze well, say so in the selfPortrait.
Return ONLY valid JSON, no markdown fences or explanation.`,
        },
        {
          role: "user",
          content: `Here are my recent Mind Forge entries:\n\n${entrySummaries}`,
        },
      ],
      max_tokens: 600,
      temperature: 0.6,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "AI analysis failed" }, { status: 502 });
  }

  const data = await response.json();
  const raw = data.choices?.[0]?.message?.content?.trim() || "{}";

  try {
    const patterns = JSON.parse(raw);
    return NextResponse.json(patterns);
  } catch {
    return NextResponse.json({ error: "Failed to parse AI response", raw }, { status: 502 });
  }
}
