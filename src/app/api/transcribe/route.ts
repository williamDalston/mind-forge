import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const audio = formData.get("audio") as Blob | null;

  if (!audio) {
    return NextResponse.json({ error: "No audio provided" }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const openaiForm = new FormData();
  openaiForm.append("file", audio, "recording.webm");
  openaiForm.append("model", "whisper-1");
  openaiForm.append("language", "en");

  const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    body: openaiForm,
  });

  if (!response.ok) {
    const err = await response.text();
    console.error("OpenAI transcription error:", err);
    return NextResponse.json({ error: "Transcription failed" }, { status: 502 });
  }

  const data = await response.json();
  return NextResponse.json({ text: data.text });
}
