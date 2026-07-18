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
    slug: "roblox",
    handle: "klevyshi",
    note: "mostly here. kalau ga ketemu, mungkin lagi AFK.",
    href: "https://www.roblox.com/share?code=70e0c65e2c6c4f4bad3270886038109a&type=Profile&source=ProfileShare&stamp=1784366537053",
    icon: RobloxIcon,
  },
  {
    name: "Instagram",
    slug: "instagram",
    handle: "@klevyshi",
    note: "things outside the game",
    href: "https://www.instagram.com/klevyshi",
    icon: InstagramIcon,
  },
  {
    name: "TikTok",
    slug: "tiktok",
    handle: "@klevyshi",
    note: "upload kalau mood-nya sempat",
    href: "https://www.tiktok.com/@klevyshi",
    icon: TikTokIcon,
  },
];

const interests = [
  { slug: "play", label: "mostly playing", value: "Roblox + Ayodance", detail: "hangout / rhythm / satu ronde lagi" },
  { slug: "city", label: "city brain", value: "Cities: Skylines", detail: "zoning dulu, macet belakangan" },
  { slug: "guitar", label: "learning arc", value: "gitar, pelan-pelan", detail: "satu chord, ulang berkali-kali" },
  { slug: "code", label: "quiet rabbit hole", value: "coding + ngulik", detail: "satu tab jadi dua belas" },
  { slug: "music", label: "on repeat", value: "jazz, mostly", detail: "Coldiac / Ardhito / Laufey" },
];

const showFlow = [
  ["00:00", "spawn, terus cari booth yang enak"],
  ["00:02", "mic check. sok formal dulu dikit"],
  ["00:08", "mulai satu topik yang niatnya serius"],
  ["00:??", "udah lupa tadi awalnya bahas apa"],
];

const wave = [32, 58, 41, 79, 49, 91, 65, 38, 74, 96, 52, 69, 35, 84, 61, 43, 93, 72, 48, 81, 37, 57, 88, 66, 45, 77, 98, 60, 39, 71, 51, 86];

export default function Home() {
  return (
    <div className="page-root">
      <a className="skip-link" href="#main-content">langsung ke konten</a>
      <div className="noise" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Klevy シロガネ home">
          <Image src="/logo-mark.svg" alt="" width={44} height={44} priority />
          <span>
            <strong>KLEVY <span lang="ja">シロガネ</span></strong>
            <small><span lang="ja">クレヴィ</span> / personal corner</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">about</a>
          <a href="#interests">things i like</a>
          <a href="#radio">103.9 FM</a>
          <a href="#elsewhere">find me</a>
        </nav>
        <p className="header-mood"><i aria-hidden="true" /> mood: calm, mostly</p>
      </header>

      <main id="main-content">
        <section id="top" className="personal-hero" aria-labelledby="hero-title">
          <figure className="personal-hero-media">
            <Image
              src="/klevy-hero.webp"
              alt="Klevy standing in front of a warm wooden building at sunset"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 1240px"
            />
            <div className="personal-hero-shade" aria-hidden="true" />
          </figure>

          <div className="personal-hero-copy">
            <p className="micro-label">KLEVYSHI.XYZ / PERSONAL CORNER</p>
            <p className="hero-traits"><span>friendly</span><span>calm</span><span>playful</span></p>
            <h1 id="hero-title">hi, aku<br /><em>Klevy.</em></h1>
            <p className="hero-lede">
              biasanya lagi main game, dengerin jazz, ngulik sesuatu, atau tiba-tiba
              sok jadi penyiar di Roblox. isinya random sih. ya kurang lebih kayak orangnya.
            </p>
            <p className="hero-aliases">Klevy buat sehari-hari. Japanese reading-nya: <span lang="ja">クレヴィ</span> (kurevi). Klepi boleh. Bang Klep juga udah terlanjur nempel.</p>
          </div>

          <p className="hero-caption">caught in the middle, literally.</p>
        </section>

        <div className="identity-strip" aria-label="Klevy at a glance">
          <div><span>VIBE</span><small>friendly, calm, playful</small></div>
          <div><span>CALL ME</span><small>Klevy / Klepi / Bang Klep</small></div>
          <div><span>MOSTLY ON</span><small>Roblox + Ayodance</small></div>
          <div><span>NOW PLAYING</span><small>something jazzy</small></div>
        </div>

        <section id="about" className="about-section" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="section-label">01 / KLEVY LORE</p>
            <h2 id="about-title">kalau lagi diem,<br />mungkin cuma plenger.</h2>
          </div>

          <div className="about-layout">
            <figure className="section-art about-art">
              <Image
                src="/klevy-about.webp"
                alt="Klevy at a desk with a laptop, guitar, and miniature city models"
                fill
                sizes="(max-width: 900px) 100vw, 58vw"
              />
              <figcaption>coding, gitar, terus lupa tadi mau ngapain.</figcaption>
            </figure>

            <div className="about-copy">
              <p className="about-lead">friendly, calm, playful. urutannya bisa berubah tergantung hari.</p>
              <p>
                aku sering plenger sih. tapi begitu obrolannya serius, mendadak bisa panjang.
                apalagi kalau topiknya nyangkut sama sesuatu yang lagi aku pelajarin atau ngulik sendiri.
              </p>
              <p>
                sisanya cukup sederhana. main game, utak-atik coding, nyoba belajar gitar,
                terus balik lagi ke hal yang bikin penasaran. kadang selesai. kadang jadi tab browser baru.
              </p>
              <div className="lore-note">
                <span>small lore</span>
                <p>kalem bukan berarti ga random. randomnya cuma nunggu timing.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="interests" className="interests-section" aria-labelledby="interests-title">
          <div className="section-heading split-heading">
            <p className="section-label">02 / CURRENTLY INTO</p>
            <h2 id="interests-title">main sebentar.<br />tahu-tahu udah malam.</h2>
          </div>

          <figure className="wide-art">
            <picture>
              <source media="(max-width: 680px)" srcSet="/klevy-night-city-mobile.webp" />
              <Image
                src="/klevy-night-city.webp"
                alt="Klevy on a rooftop above a neon night city with a guitar case and glowing rhythm-like roads"
                fill
                sizes="(max-width: 760px) 100vw, 1240px"
              />
            </picture>
            <figcaption>semua rabbit hole ketemu setelah tengah malam.</figcaption>
          </figure>

          <div className="interest-gallery">
            {interests.map((item, index) => (
              <article key={item.label} className={`interest-panel interest-panel--${item.slug}`}>
                <header>
                  <span>0{index + 1}</span>
                  <small>{item.label}</small>
                </header>
                <div className="interest-panel-copy">
                  <strong>{item.value}</strong>
                  <p>{item.detail}</p>
                </div>

                <div className="interest-visual" aria-hidden="true">
                  {item.slug === "play" && (
                    <span className="rhythm-lanes"><i /><i /><i /><i /><i /></span>
                  )}
                  {item.slug === "city" && (
                    <span className="mini-skyline"><i /><i /><i /><i /><i /><i /><i /></span>
                  )}
                  {item.slug === "guitar" && (
                    <span className="guitar-neck"><i /><i /><i /><i /><i /><i /></span>
                  )}
                  {item.slug === "code" && (
                    <span className="terminal-shell"><b /><i /><i /><i /></span>
                  )}
                  {item.slug === "music" && <span className="vinyl-disc"><i /></span>}
                </div>
              </article>
            ))}
          </div>

          <div className="music-note">
            <p>kalau lagi ga main</p>
            <blockquote>
              biasanya ada jazz di background. Coldiac, Ardhito Pramono, Laufey,
              terus siapa pun yang bikin malam terasa sedikit lebih pelan.
            </blockquote>
          </div>
        </section>

        <section id="radio" className="radio-feature" aria-labelledby="radio-title">
          <figure className="radio-art">
            <Image
              src="/klevy-radio.webp"
              alt="Klevy hosting Ceritanya Radio in a warm podcast booth with a 103.9 FM display"
              fill
              sizes="(max-width: 900px) 100vw, 56vw"
            />
          </figure>

          <div className="radio-copy">
            <p className="section-label">03 / ONE OF MY THINGS</p>
            <p className="frequency"><i aria-hidden="true" /> 103.9 FM</p>
            <h2 id="radio-title">terus, ada<br /><em>Ceritanya Radio.</em></h2>
            <p className="radio-lede">
              kalau lagi mampir ke map Podcasts di Roblox, kadang aku duduk di booth,
              buka mic, lalu bawain obrolan ala radio. frekuensinya ngasal. obrolannya kadang engga.
            </p>
            <p>
              di sini sisi playful sama sisi seriusku suka ketemu. bisa mulai dari game,
              cerita hari itu, atau opini random. beberapa menit kemudian biasanya udah belok ke mana-mana.
            </p>

            <div className="mini-wave" aria-hidden="true">
              {wave.map((height, index) => (
                <i
                  key={index}
                  style={{
                    height: `${height}%`,
                    animationDelay: `-${(index % 11) * 80}ms`,
                    animationDuration: `${720 + (index % 7) * 85}ms`,
                  }}
                />
              ))}
            </div>

            <ol className="compact-flow" aria-label="Alur Ceritanya Radio">
              {showFlow.map(([time, text]) => (
                <li key={time}><time>{time}</time><span>{text}</span></li>
              ))}
            </ol>
          </div>
        </section>

        <section id="elsewhere" className="elsewhere-section" aria-labelledby="elsewhere-title">
          <div className="section-heading split-heading">
            <p className="section-label">04 / FIND ME</p>
            <h2 id="elsewhere-title">kalau mau nyapa,<br />aku biasanya ada di sini.</h2>
          </div>

          <nav className="social-board" aria-label="Klevy's social profiles">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  className={`social-poster social-poster--${link.slug}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buka profil ${link.name} Klevy`}
                >
                  {link.slug === "roblox" && (
                    <span className="social-portrait" aria-hidden="true">
                      <Image src="/klevy-hero.webp" alt="" fill sizes="(max-width: 680px) 78vw, 500px" />
                    </span>
                  )}
                  <span className="social-watermark" aria-hidden="true"><Icon /></span>
                  <span className="social-poster-top">
                    <span className="social-number">0{index + 1}</span>
                    <span className="social-icon" aria-hidden="true"><Icon /></span>
                  </span>
                  <span className="social-name">
                    <small>{link.name}</small>
                    <strong>{link.handle}</strong>
                    <span>{link.note}</span>
                  </span>
                  <span className="social-arrow" aria-hidden="true"><ArrowUpRight /></span>
                </a>
              );
            })}
          </nav>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <Image src="/logo-mark.svg" alt="" width={40} height={40} />
          <span><strong>KLEVY <span lang="ja">シロガネ</span></strong><small><span lang="ja">クレヴィ</span> / personal corner.</small></span>
        </div>
        <p>friendly, calm, playful. tergantung ping.</p>
        <a href="#top">balik ke atas <span aria-hidden="true">↑</span></a>
      </footer>
    </div>
  );
}
