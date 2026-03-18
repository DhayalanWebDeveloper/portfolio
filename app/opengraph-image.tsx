import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dhayalan | Full Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #082840 0%, #0C2D48 40%, #1A6098 100%)",
          fontFamily: "Georgia, serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(110, 203, 99, 0.1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "rgba(52, 152, 219, 0.1)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "#F0D840",
              letterSpacing: "-2px",
            }}
          >
            R. Dhayalan
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#E8F8F0",
              opacity: 0.9,
            }}
          >
            Full Stack Web Developer
          </div>
          <div
            style={{
              display: "flex",
              gap: "24px",
              marginTop: "8px",
              fontSize: "18px",
              color: "#6ECB63",
            }}
          >
            <span>Angular</span>
            <span style={{ color: "#48B8D0" }}>|</span>
            <span>Next.js</span>
            <span style={{ color: "#48B8D0" }}>|</span>
            <span>FastAPI</span>
            <span style={{ color: "#48B8D0" }}>|</span>
            <span>WordPress</span>
          </div>
          <div
            style={{
              marginTop: "16px",
              fontSize: "16px",
              color: "rgba(232, 248, 240, 0.5)",
              letterSpacing: "4px",
            }}
          >
            dhayalan-dev.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
