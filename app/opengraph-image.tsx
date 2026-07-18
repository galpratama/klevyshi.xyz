import { ImageResponse } from "next/og";
import { LOGO_DATA_URI } from "@/lib/logo-data";

export const alt = "Klevyshi — Personal Space";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#080712",
          color: "#f6f2ff",
        }}
      >
        <div style={{ position: "absolute", width: 760, height: 760, top: -440, left: 120, borderRadius: 999, background: "radial-gradient(circle, rgba(151,81,231,.42), rgba(99,54,171,.1) 42%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", background: "linear-gradient(115deg, rgba(255,255,255,.035), transparent 38%, rgba(87,190,232,.07))" }} />
        <div style={{ width: "100%", display: "flex", alignItems: "center", padding: "72px 82px", gap: 62, position: "relative" }}>
          <img
            src={LOGO_DATA_URI}
            width={264}
            height={264}
            alt="Klevyshi logo"
            style={{ objectFit: "contain" }}
          />
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 700 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#cf9cff", fontSize: 19, letterSpacing: 6, marginBottom: 24 }}>
              <span style={{ width: 34, height: 3, background: "#b274ff" }} /> PERSONAL SPACE
            </div>
            <span style={{ fontSize: 74, fontWeight: 800, lineHeight: 1 }}>hey, i&apos;m klevy.</span>
            <span style={{ fontSize: 74, fontWeight: 800, lineHeight: 1.06, color: "#cda6ff" }}>welcome to my corner.</span>
            <span style={{ fontSize: 25, color: "#aaa4bc", marginTop: 28 }}>klevyshi.xyz</span>
          </div>
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 5, background: "linear-gradient(90deg, #7040b8, #c48cff 45%, #79d9ff)" }} />
      </div>
    ),
    size,
  );
}
