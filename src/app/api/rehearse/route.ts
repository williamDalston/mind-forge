import { NextRequest, NextResponse } from "next/server";
import { checkUsageLimit, logUsage } from "@/lib/usage-tracking";

const STYLES: Record<string, string> = {
  casual:
    "Rewrite this insight so it sounds like something you'd say casually to a smart friend over coffee. Keep it natural, warm, and conversational. One or two sentences max.",
  elegant:
    "Rewrite this insight so it sounds polished and memorable — the kind of thing you'd say at a dinner party that makes people pause. Concise and striking.",
  shorter:
    "Compress this insight into the shortest, sharpest version possible. Under 15 words if you can.",
  warmer:
    "Rewrite this insight so it feels more human and emotionally resonant, without losing the truth. Gentle but real.",
};

export async function POST(request: NextRequest) {
  const { text, style } = await request.json();

  if (!text || typeof text !== "string" || text.length > 2000) {
    return NextResponse.json({ error: "Invalid text" }, { status: 400 });
  }

  const prompt = STYLES[style] || STYLES.casual;
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const usage = await checkUsageLimit("rehearse");
  if (!usage.allowed) {
    return NextResponse.json({ error: usage.error }, { status: 429 });
  }

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
          content:
            "You are a writing coach who helps people articulate their insights clearly and naturally. Only return the rewritten version. No preamble, no quotes, no explanation.",
        },
        {
          role: "user",
          content: `${prompt}\n\nOriginal insight: "${text}"`,
        },
      ],
      max_tokens: 200,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "AI failed" }, { status: 502 });
  }

  const data = await response.json();
  const result = data.choices?.[0]?.message?.content?.trim() || "";

  if (usage.userId) await logUsage(usage.userId, "rehearse");

  return NextResponse.json({ result });
}
