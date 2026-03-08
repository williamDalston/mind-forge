import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Will Alston — Mind Forge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1a1815 0%, #2a2520 50%, #1a1815 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle gold border */}
        <div
          style={{
            position: "absolute",
            inset: 24,
            border: "1px solid rgba(212, 201, 159, 0.15)",
            borderRadius: 20,
            display: "flex",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 16,
            background: "rgba(212, 201, 159, 0.1)",
            border: "1px solid rgba(212, 201, 159, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
            fontSize: 32,
            color: "#d4c99f",
            fontWeight: 700,
          }}
        >
          WA
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#d4c99f",
            letterSpacing: "-0.02em",
            marginBottom: 8,
            display: "flex",
          }}
        >
          Will Alston
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "rgba(230, 225, 215, 0.7)",
            marginBottom: 40,
            display: "flex",
          }}
        >
          Analyst · Builder · Strategist
        </div>

        {/* App name */}
        <div
          style={{
            fontSize: 20,
            color: "rgba(212, 201, 159, 0.5)",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          Mind Forge — Daily Intellectual Training
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 16,
            color: "rgba(212, 201, 159, 0.35)",
            display: "flex",
          }}
        >
          willalston.space
        </div>
      </div>
    ),
    { ...size }
  );
}
