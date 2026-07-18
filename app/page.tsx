import Image from "next/image";
import {
  ArrowUpRight,
  InstagramIcon,
  RobloxIcon,
  TikTokIcon,
} from "@/components/brand-icons";

const socialLinks = [
  {
    name: "Instagram",
    handle: "@klevyshi",
    href: "https://www.instagram.com/klevyshi",
    className: "social-instagram",
    icon: InstagramIcon,
  },
  {
    name: "TikTok",
    handle: "@klevyshi",
    href: "https://www.tiktok.com/@klevyshi",
    className: "social-tiktok",
    icon: TikTokIcon,
  },
  {
    name: "Roblox",
    handle: "klevyshi",
    href: "https://www.roblox.com/share?code=70e0c65e2c6c4f4bad3270886038109a&type=Profile&source=ProfileShare&stamp=1784366537053",
    className: "social-roblox",
    icon: RobloxIcon,
  },
];

const games = [
  { title: "Persona 3 Reload", group: "rpg", tone: "cyan" },
  { title: "Persona 4 Golden", group: "rpg", tone: "yellow" },
  { title: "Persona 5 Royal", group: "rpg", tone: "red" },
  { title: "Final Fantasy VII Remake", group: "rpg", tone: "blue" },
  { title: "Honkai: Star Rail", group: "rpg", tone: "violet" },
  { title: "Cities: Skylines II", group: "simulation", tone: "sky" },
  { title: "Roblox", group: "sandbox", tone: "lime" },
  { title: "Minecraft", group: "sandbox", tone: "green" },
];

export default function Home() {
  return (
    <div className="page-root">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="pixel-grid" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Klevyshi home">
          <Image
            className="brand-icon"
            src="/logo-mark.svg"
            alt=""
            width={48}
            height={48}
            priority
          />
          <span className="brand-word">KLEVYSHI</span>
        </a>
        <div className="header-label">
          <span className="status-dot" aria-hidden="true" />
          personal space
        </div>
      </header>

      <main id="main-content" className="site-main">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <article className="profile-card enter-one">
            <div className="banner-wrap">
              <Image
                src="/twilight-banner.webp"
                alt="Purple twilight over a wooden balcony and trees"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 42vw"
              />
              <div className="banner-vignette" aria-hidden="true" />
              <span className="banner-code">KLV / 01</span>
            </div>

            <div className="profile-body">
              <div className="avatar-wrap">
                <Image
                  src="/klevy-avatar-180.webp"
                  alt="Klevyshi's profile avatar"
                  width={180}
                  height={180}
                  priority
                />
                <span className="avatar-status" aria-label="Profile status accent" />
              </div>

              <div className="identity-row">
                <div>
                  <p className="overline">KLEVYSHI</p>
                  <h2>Klevy</h2>
                  <p className="handle">@klevyshi</p>
                </div>
                <div className="mini-emblem" aria-hidden="true">
                  <Image src="/logo-mark.svg" alt="" width={48} height={48} />
                </div>
              </div>

              <blockquote>“que sera sera.”</blockquote>

              <div className="profile-meta">
                <div>
                  <span>home</span>
                  <strong>klevyshi.xyz</strong>
                </div>
                <div>
                  <span>vibe</span>
                  <strong>midnight violet</strong>
                </div>
              </div>
            </div>
          </article>

          <div className="hero-copy enter-two">
            <p className="eyebrow"><span /> KLEVYSHI / HOME ON THE WEB</p>
            <h1 id="hero-title">
              hey, i&apos;m klevy.
              <span>welcome to my corner.</span>
            </h1>
            <p className="hero-lead">
              A small personal space for the games I like and the places where you can find me.
            </p>

            <nav className="social-grid" aria-label="Social profiles">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    className={`social-card ${link.className}`}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Klevyshi on ${link.name}`}
                  >
                    <span className="social-index">0{index + 1}</span>
                    <span className="social-icon"><Icon /></span>
                    <span className="social-copy">
                      <strong>{link.name}</strong>
                      <small>{link.handle}</small>
                    </span>
                    <ArrowUpRight className="social-arrow" />
                  </a>
                );
              })}
            </nav>
          </div>
        </section>

        <section className="games-section enter-three" aria-labelledby="games-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span /> LIBRARY SNAPSHOT</p>
              <h2 id="games-title">games i like</h2>
            </div>
            <p>Eight worlds, zero ranking. Just favorites from the profile.</p>
          </div>

          <div className="games-grid">
            {games.map((game, index) => (
              <article className={`game-card tone-${game.tone}`} key={game.title}>
                <span className="game-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="game-sigil" aria-hidden="true"><i /></div>
                <div>
                  <h3>{game.title}</h3>
                  <p>{game.group}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>KLEVYSHI.XYZ</p>
        <span>built for the quiet hours.</span>
        <a href="#top">back to top <span aria-hidden="true">↑</span></a>
      </footer>
    </div>
  );
}
