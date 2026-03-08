import { NextRequest, NextResponse } from "next/server";
import { checkUsageLimit, logUsage } from "@/lib/usage-tracking";

export async function POST(request: NextRequest) {
  const { entries } = await request.json();

  if (!entries || !Array.isArray(entries) || entries.length === 0) {
    return NextResponse.json({ error: "No entries provided" }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const usage = await checkUsageLimit("weekly-letter");
  if (!usage.allowed) {
    return NextResponse.json({ error: usage.error }, { status: 429 });
  }

  const entrySummaries = entries
    .map(
      (e: { dayLabel?: string; distillationText?: string; reflectionText?: string; carryLine?: string }, i: number) =>
        `Day ${i + 1}${e.dayLabel ? ` (${e.dayLabel})` : ""}:\n- Insight: "${e.distillationText || e.reflectionText || ""}"\n${e.carryLine ? `- Carry line: "${e.carryLine}"` : ""}`
    )
    .join("\n\n");

  // Generate the text letter
  const textResponse = await fetch("https://api.openai.com/v1/chat/completions", {
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
          content: `You are writing a short, intimate weekly reflection letter to someone who just completed a week of intellectual training in Mind Forge. You have access to their daily insights.

Write a 4-6 sentence spoken-style letter that covers:
1. What themes kept showing up this week
2. Where they were strongest or most honest
3. One truth they keep circling
4. One thing to carry into next week

Tone: warm but honest. Like a mentor who respects the person. Not cheesy, not clinical. Written to be spoken aloud.

Do not use bullet points. Write in flowing prose. Address them as "you." Start directly — no "Dear" or greeting.`,
        },
        {
          role: "user",
          content: `Here are my daily forge entries from this week:\n\n${entrySummaries}`,
        },
      ],
      max_tokens: 400,
      temperature: 0.7,
    }),
  });

  if (!textResponse.ok) {
    return NextResponse.json({ error: "AI generation failed" }, { status: 502 });
  }

  const textData = await textResponse.json();
  const letterText = textData.choices?.[0]?.message?.content?.trim() || "";

  // Generate audio from the letter
  const audioResponse = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "tts-1",
      input: letterText,
      voice: "nova",
      response_format: "mp3",
    }),
  });

  if (!audioResponse.ok) {
    // Return text even if audio fails
    return NextResponse.json({ text: letterText, audioError: true });
  }

  const audioBuffer = await audioResponse.arrayBuffer();
  const audioBase64 = Buffer.from(audioBuffer).toString("base64");

  if (usage.userId) await logUsage(usage.userId, "weekly-letter");

  return NextResponse.json({
    text: letterText,
    audio: audioBase64,
  });
}
