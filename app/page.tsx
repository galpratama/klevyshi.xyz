import Image from "next/image";
import {
  ArrowUpRight,
  InstagramIcon,
  RobloxIcon,
  TikTokIcon,
} from "@/components/brand-icons";

const socialLinks = [
  {
    name: "Roblox",
    handle: "klevyshi",
    note: "cari aku di map Podcasts",
    href: "https://www.roblox.com/share?code=70e0c65e2c6c4f4bad3270886038109a&type=Profile&source=ProfileShare&stamp=1784366537053",
    icon: RobloxIcon,
  },
  {
    name: "Instagram",
    handle: "@klevyshi",
    note: "things outside the booth",
    href: "https://www.instagram.com/klevyshi",
    icon: InstagramIcon,
  },
  {
    name: "TikTok",
    handle: "@klevyshi",
    note: "kalau lagi pengen upload",
    href: "https://www.tiktok.com/@klevyshi",
    icon: TikTokIcon,
  },
];

const showFlow = [
  ["00:00", "spawn, terus cari booth yang enak"],
  ["00:02", "mic check. biasanya sok formal dulu"],
  ["00:08", "mulai satu topik yang niatnya serius"],
  ["00:??", "udah lupa tadi awalnya bahas apa"],
];

const rotation = [
  "Persona 3 Reload",
  "Roblox",
  "Minecraft",
  "Cities: Skylines II",
  "Honkai: Star Rail",
  "Final Fantasy VII Remake",
];

const wave = [28, 52, 38, 76, 44, 88, 61, 36, 72, 94, 48, 64, 32, 82, 58, 40, 91, 68, 46, 79, 34, 55, 86, 63, 43, 74, 98, 57, 37, 69, 49, 84, 42, 62, 93, 53];

export default function Home() {
  return (
    <div className="page-root">
      <a className="skip-link" href="#main-content">langsung ke siaran</a>
      <div className="noise" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Klevyshi home">
          <Image src="/logo-mark.svg" alt="" width={44} height={44} priority />
          <span>
            <strong>KLEVYSHI</strong>
            <small>internet radio-ish</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#ceritanya">ceritanya</a>
          <a href="#booth">the booth</a>
          <a href="#elsewhere">find me</a>
        </nav>
        <p className="header-signal"><i aria-hidden="true" /> signal: kadang ada</p>
      </header>

      <main id="main-content">
        <section id="top" className="radio-hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="station-code">KLEVYSHI.XYZ / COBA CARI FREKUENSINYA</p>
            <p className="record-label"><span aria-hidden="true" /> rec, kalau lagi main</p>
            <h1 id="hero-title">ceritanya<br /><em>radio.</em></h1>
            <div className="hero-intro">
              <p>
                aku Klevy. kalau lagi nongkrong di map <strong>Podcasts</strong> di Roblox,
                biasanya aku buka mic terus sok-sokan bawain acara radio.
              </p>
              <p>
                ga ada frekuensi beneran. rundown rapi juga engga. yang ada cuma obrolan,
                orang random yang mampir, terus topik yang belok ke mana-mana.
              </p>
            </div>
          </div>

          <figure className="hero-art">
            <Image
              src="/ceritanya-radio-sunset.webp"
              alt="Warm sunset over wooden stairs and a large tree"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 62vw"
            />
            <div className="image-shade" aria-hidden="true" />
            <figcaption>golden hour before the mic turns on.</figcaption>
            <div className="host-stamp">
              <Image src="/klevy-avatar-180.webp" alt="Klevy's avatar" width={72} height={72} />
              <span><small>your host, apparently</small><strong>KLEVY</strong></span>
            </div>
          </figure>
        </section>

        <div className="frequency-strip" aria-label="Ceritanya Radio station details">
          <div><span>88.?? FM</span><small>frekuensinya ngarang</small></div>
          <div><span>MAP</span><small>Podcasts, Roblox</small></div>
          <div><span>MIC</span><small>on kalau berani</small></div>
          <div><span>RUNDOWN</span><small>optional bgt</small></div>
        </div>

        <section id="ceritanya" className="story-section" aria-labelledby="story-title">
          <div className="section-index">
            <span>01 / ORIGIN STORY</span>
            <p>ini bagian yang harusnya dijelasin dengan serius.</p>
          </div>
          <div className="story-body">
            <h2 id="story-title">awalnya cuma main Roblox.</h2>
            <p className="story-lead">
              terus nemu map Podcasts. ada studio, ada kursi, ada mic, dan ya... masa didiemin?
            </p>
            <div className="story-columns">
              <p>
                akhirnya duduk, nyalain mic, terus ngomong kayak penyiar radio. kadang ada yang
                ikut ngobrol. kadang cuma aku sama pikiran sendiri. dua-duanya masih masuk program.
              </p>
              <p>
                nama segmennya <strong>Ceritanya Radio</strong>. kenapa “ceritanya”? karena ini memang
                pura-pura radio, tapi obrolannya beneran. somehow itu justru bagian paling seru.
              </p>
            </div>
            <blockquote>
              “selamat datang di Ceritanya Radio, tempat topik serius bisa jadi gajelas dalam dua menit.”
            </blockquote>

            <ol className="show-flow" aria-label="Alur siaran Ceritanya Radio">
              {showFlow.map(([time, text]) => (
                <li key={time}>
                  <time>{time}</time>
                  <span>{text}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="booth" className="booth-section" aria-labelledby="booth-title">
          <div className="booth-copy">
            <p className="section-label">02 / MIC IS ON</p>
            <h2 id="booth-title">script? ya...<br />lihat nanti.</h2>
            <p>
              Ceritanya Radio itu alasan buat ngobrol. bisa soal game, cerita hari ini,
              opini random, atau sesuatu yang baru kepikiran lima detik sebelum mic nyala.
            </p>
            <p className="side-note">ga perlu terlalu dibikin serius sih.</p>
          </div>

          <div className="radio-console">
            <div className="console-head">
              <span>CR-01 / INPUT</span>
              <span className="console-rec"><i aria-hidden="true" /> REC-ish</span>
            </div>
            <div className="waveform" aria-hidden="true">
              {wave.map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
            </div>
            <p className="console-quote">
              “selamat sore, malam, atau kapan pun. frekuensinya ga ketemu? iya, emang ga ada.”
            </p>
            <dl className="console-meta">
              <div><dt>host</dt><dd>Klevy</dd></div>
              <div><dt>platform</dt><dd>Roblox</dd></div>
              <div><dt>map</dt><dd>Podcasts</dd></div>
              <div><dt>format</dt><dd>ngobrol dulu, mikir belakangan</dd></div>
            </dl>
          </div>
        </section>

        <section id="elsewhere" className="elsewhere-section" aria-labelledby="elsewhere-title">
          <div className="elsewhere-heading">
            <p className="section-label">03 / STATION PRESETS</p>
            <h2 id="elsewhere-title">kalau booth-nya kosong,<br />mungkin aku ada di sini.</h2>
          </div>

          <nav className="preset-list" aria-label="Klevy's social profiles">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Buka profil ${link.name} Klevy`}>
                  <span className="preset-number">0{index + 1}</span>
                  <span className="preset-icon"><Icon /></span>
                  <span className="preset-name"><strong>{link.name}</strong><small>{link.handle}</small></span>
                  <span className="preset-note">{link.note}</span>
                  <ArrowUpRight className="preset-arrow" />
                </a>
              );
            })}
          </nav>
        </section>

        <section className="rotation-section" aria-labelledby="rotation-title">
          <p id="rotation-title">SIDE B / YANG JUGA SERING MUTER</p>
          <ul>
            {rotation.map((game) => <li key={game}>{game}</li>)}
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <Image src="/logo-mark.svg" alt="" width={40} height={40} />
          <span><strong>CERITANYA RADIO</strong><small>siaran tidak terjadwal dari internet.</small></span>
        </div>
        <p>hosted with questionable preparation by Klevy.</p>
        <a href="#top">balik ke atas <span aria-hidden="true">↑</span></a>
      </footer>
    </div>
  );
}
