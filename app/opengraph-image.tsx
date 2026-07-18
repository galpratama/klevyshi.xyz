import { ImageResponse } from "next/og";
import { LOGO_DATA_URI } from "@/lib/logo-data";

export const alt = "Klevyshi | Ceritanya Radio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const bars = [28, 52, 76, 42, 88, 61, 35, 72, 94, 48, 64, 32, 82, 58, 40, 91, 68, 46, 79, 34, 55, 86, 63, 43];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden", padding: "56px 64px 48px", background: "#0b0a0d", color: "#eee8df" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 25, borderBottom: "1px solid #302a33" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <img src={LOGO_DATA_URI} width={58} height={58} alt="" />
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: 3 }}>KLEVYSHI</span>
              <span style={{ fontSize: 11, color: "#817982", letterSpacing: 2 }}>INTERNET RADIO-ISH</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#ff704f", fontSize: 13, letterSpacing: 2 }}>
            <span style={{ width: 10, height: 10, borderRadius: 99, background: "#ff704f" }} /> REC, KALAU LAGI MAIN
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 54 }}>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 690 }}>
            <span style={{ color: "#857d87", fontSize: 13, letterSpacing: 3, marginBottom: 24 }}>MAP PODCASTS / ROBLOX</span>
            <span style={{ fontSize: 89, fontWeight: 700, lineHeight: .82, letterSpacing: -6 }}>ceritanya</span>
            <span style={{ fontSize: 108, fontWeight: 500, lineHeight: .9, letterSpacing: -7, color: "#ff704f" }}>radio.</span>
            <span style={{ marginTop: 30, color: "#b1a8b0", fontSize: 20 }}>mic on, terus ngobrol aja dulu.</span>
          </div>

          <div style={{ width: 330, height: 250, display: "flex", flexDirection: "column", padding: 25, border: "1px solid #302a33", background: "#121016" }}>
            <div style={{ display: "flex", justifyContent: "space-between", color: "#716b75", fontSize: 10, letterSpacing: 2 }}>
              <span>CR-01 / INPUT</span><span style={{ color: "#ff704f" }}>88.?? FM</span>
            </div>
            <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 6, marginTop: 20, borderTop: "1px solid #302a33", borderBottom: "1px solid #302a33" }}>
              {bars.map((height, index) => (
                <span key={index} style={{ width: 5, height: `${height}%`, background: index % 3 === 0 ? "#ff704f" : "#ab91f1", opacity: .86 }} />
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 18, borderTop: "1px solid #302a33", color: "#716b75", fontSize: 12, letterSpacing: 1.5 }}>
          <span>HOST: KLEVY</span><span>KLEVYSHI.XYZ</span>
        </div>
      </div>
    ),
    size,
  );
}
