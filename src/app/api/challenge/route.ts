import { NextRequest, NextResponse } from "next/server";
import { checkUsageLimit, logUsage } from "@/lib/usage-tracking";

export async function POST(request: NextRequest) {
  const { userText, arcTitle, step } = await request.json();

  if (!userText || typeof userText !== "string" || userText.length > 5000) {
    return NextResponse.json({ error: "Invalid text" }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const usage = await checkUsageLimit("challenge");
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
          content: `You are a rigorous intellectual sparring partner inside a daily thinking app called Mind Forge. Your job is to pressure-test the user's reflection — not to be mean, but to push past comfortable, polished, performative thinking toward honesty and depth.

The current theme is "${arcTitle || "general reflection"}". The user is on the "${step || "reflect"}" step.

Your response should do ONE of these (pick whichever fits best):
- Identify the hidden assumption in their thinking
- Name what they're avoiding or softening
- Offer the strongest objection to their point
- Ask the question they don't want to answer
- Point out where they're being abstract when they should be specific

Rules:
- Be direct but not cruel
- 2-4 sentences max
- No preamble, no "Great reflection!" — go straight to the challenge
- Sound like a sharp friend, not a therapist or professor
- If the reflection is vague or generic, call that out specifically`,
        },
        {
          role: "user",
          content: userText,
        },
      ],
      max_tokens: 250,
      temperature: 0.8,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "AI failed" }, { status: 502 });
  }

  const data = await response.json();
  const result = data.choices?.[0]?.message?.content?.trim() || "";

  if (usage.userId) await logUsage(usage.userId, "challenge");

  return NextResponse.json({ result });
}
