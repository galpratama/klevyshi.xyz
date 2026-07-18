import { ImageResponse } from "next/og";
import { LOGO_DATA_URI } from "@/lib/logo-data";

export const alt = "Klevyshi | Personal corner on the internet";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", padding: "54px 64px 48px", background: "#0b0a0d", color: "#eee8df" }}>
        <div style={{ position: "absolute", width: 500, height: 500, right: -100, top: -190, borderRadius: 999, background: "rgba(255,117,79,.08)" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 24, borderBottom: "1px solid #302a33" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <img src={LOGO_DATA_URI} width={58} height={58} alt="" />
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: 3 }}>KLEVYSHI</span>
              <span style={{ fontSize: 11, color: "#817982", letterSpacing: 2 }}>PERSONAL CORNER ON THE INTERNET</span>
            </div>
          </div>
          <span style={{ color: "#a88cf0", fontSize: 12, letterSpacing: 2 }}>FRIENDLY / CALM / PLAYFUL</span>
        </div>

        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 58 }}>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 720 }}>
            <span style={{ color: "#817982", fontSize: 13, letterSpacing: 3, marginBottom: 26 }}>HI, INTERNET.</span>
            <span style={{ fontSize: 92, fontWeight: 700, lineHeight: .9, letterSpacing: -6 }}>hi, aku</span>
            <span style={{ fontSize: 118, fontWeight: 500, lineHeight: .88, letterSpacing: -7, color: "#ff754f" }}>Klevy.</span>
            <span style={{ marginTop: 28, color: "#b7aeb6", fontSize: 19 }}>kadang plenger, kadang ngomongnya kepanjangan.</span>
          </div>

          <div style={{ width: 330, display: "flex", flexDirection: "column", borderTop: "1px solid #302a33" }}>
            {[
              ["MOSTLY PLAYING", "Roblox + Ayodance"],
              ["QUIET RABBIT HOLE", "coding dan ngulik"],
              ["ON REPEAT", "something jazzy"],
              ["ALSO KNOWN AS", "Klepi / Bang Klep"],
            ].map(([label, value]) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: 6, padding: "16px 0", borderBottom: "1px solid #302a33" }}>
                <span style={{ color: "#766f78", fontSize: 9, letterSpacing: 2 }}>{label}</span>
                <span style={{ fontSize: 16 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 18, borderTop: "1px solid #302a33", color: "#716b75", fontSize: 12, letterSpacing: 1.5 }}>
          <span>KLEVYSHI.XYZ</span>
          <span style={{ color: "#ff754f" }}>103.9 FM / CERITANYA RADIO</span>
        </div>
      </div>
    ),
    size,
  );
}
