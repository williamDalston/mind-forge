import { NextRequest, NextResponse } from "next/server";
import { checkUsageLimit, logUsage } from "@/lib/usage-tracking";

export async function POST(request: NextRequest) {
  const { userText } = await request.json();

  if (!userText || typeof userText !== "string" || userText.length > 5000) {
    return NextResponse.json({ error: "Invalid text" }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const usage = await checkUsageLimit("refine");
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
          content: `You are a precision editor for personal insights. The user has written a raw reflection. Your job is to find the strongest idea buried in it and sharpen it.

Do exactly this:
1. Identify the core insight in one clear sentence (label it "Core:")
2. Give a sharper, more direct version — strip qualifiers, hedging, and padding (label it "Sharpened:")
3. Give a one-line "blade" version — under 15 words, the kind of line worth remembering (label it "Blade:")

Rules:
- Preserve the user's voice and meaning — don't inject ideas they didn't have
- Be concise. No filler. No encouragement.
- If the reflection is too vague to sharpen, say so directly and ask them to be more specific`,
        },
        {
          role: "user",
          content: userText,
        },
      ],
      max_tokens: 300,
      temperature: 0.6,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "AI failed" }, { status: 502 });
  }

  const data = await response.json();
  const result = data.choices?.[0]?.message?.content?.trim() || "";

  if (usage.userId) await logUsage(usage.userId, "refine");

  return NextResponse.json({ result });
}
