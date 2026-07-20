import Image from "next/image";
import {
  ArrowUpRight,
  InstagramIcon,
  RobloxIcon,
  TikTokIcon,
} from "@/components/brand-icons";
import { SiteHeaderActions } from "@/components/site-header-actions";

const socialLinks = [
  {
    name: "Roblox",
    slug: "roblox",
    handle: "klevyshi",
    note: "Mostly here. If I'm missing, I'm probably AFK.",
    href: "https://www.roblox.com/share?code=70e0c65e2c6c4f4bad3270886038109a&type=Profile&source=ProfileShare&stamp=1784366537053",
    icon: RobloxIcon,
  },
  {
    name: "Instagram",
    slug: "instagram",
    handle: "@klevyshi",
    note: "Things outside the game.",
    href: "https://www.instagram.com/klevyshi",
    icon: InstagramIcon,
  },
  {
    name: "TikTok",
    slug: "tiktok",
    handle: "@klevyshi",
    note: "Uploads when the mood cooperates.",
    href: "https://www.tiktok.com/@klevyshi",
    icon: TikTokIcon,
  },
];

const interests = [
  { slug: "play", label: "mostly playing", value: "Roblox + Ayodance", detail: "hangouts / rhythm / one more round" },
  { slug: "city", label: "city brain", value: "Cities: Skylines", detail: "zone first, fix traffic later" },
  { slug: "guitar", label: "learning arc", value: "guitar, slowly", detail: "one chord, over and over" },
  { slug: "code", label: "quiet rabbit hole", value: "coding + tinkering", detail: "one tab becomes twelve" },
  { slug: "music", label: "on repeat", value: "jazz, mostly", detail: "Coldiac / Ardhito / Laufey" },
];

const showFlow = [
  ["00:00", "Spawn, then find a booth that feels right."],
  ["00:02", "Mic check. Pretend to be formal for a minute."],
  ["00:08", "Start one topic that was supposed to be serious."],
  ["00:??", "Forget what I was talking about in the first place."],
];

const wave = [32, 58, 41, 79, 49, 91, 65, 38, 74, 96, 52, 69, 35, 84, 61, 43, 93, 72, 48, 81, 37, 57, 88, 66, 45, 77, 98, 60, 39, 71, 51, 86];

export default function Home() {
  return (
    <div className="page-root">
      <a className="skip-link" href="#main-content">Skip to content</a>
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
        <SiteHeaderActions />
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
            <h1 id="hero-title">Hi, I&apos;m<br /><em>Klevy.</em></h1>
            <p className="hero-lede">
              I&apos;m usually playing something, listening to jazz, tinkering with code, or
              pretending to be a radio host in Roblox. It&apos;s random. So am I, apparently.
            </p>
            <p className="hero-aliases">Most people call me Klevy. In Japanese: <span lang="ja">クレヴィ</span> (kurevi). Klepi works too. Bang Klep has stuck around at this point.</p>
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
            <h2 id="about-title">When I&apos;m quiet,<br />my mind is probably elsewhere.</h2>
          </div>

          <div className="about-layout">
            <figure className="section-art about-art">
              <Image
                src="/klevy-about.webp"
                alt="Klevy at a desk with a laptop, guitar, and miniature city models"
                fill
                sizes="(max-width: 900px) 100vw, 58vw"
              />
              <figcaption>Coding, guitar, then forgetting what I was doing.</figcaption>
            </figure>

            <div className="about-copy">
              <p className="about-lead">Friendly, calm, playful. The order changes depending on the day.</p>
              <p>
                I zone out a lot. But once a conversation gets serious, I can keep going for a while.
                Especially when it touches something I&apos;m learning or figuring out on my own.
              </p>
              <p>
                The rest is pretty simple: games, code, a little guitar practice, then back to
                whatever made me curious. Sometimes I finish it. Sometimes it becomes another browser tab.
              </p>
              <div className="lore-note">
                <span>small lore</span>
                <p>Calm on the outside. Random when the timing is right.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="interests" className="interests-section" aria-labelledby="interests-title">
          <div className="section-heading split-heading">
            <p className="section-label">02 / CURRENTLY INTO</p>
            <h2 id="interests-title">One quick game.<br />Suddenly, it&apos;s midnight.</h2>
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
            <figcaption>All my rabbit holes meet after midnight.</figcaption>
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
            <p>when I&apos;m not playing</p>
            <blockquote>
              There&apos;s usually jazz in the background. Coldiac, Ardhito Pramono, Laufey,
              and anyone who makes the night feel a little slower.
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
            <h2 id="radio-title">And then there&apos;s<br /><em>Ceritanya Radio.</em></h2>
            <p className="radio-lede">
              When I drop by the Podcasts map on Roblox, I sometimes take a seat in the booth,
              turn on the mic, and host a radio-style conversation. The frequency is made up. The conversation isn&apos;t always.
            </p>
            <p>
              This is where my playful side and serious side tend to meet. It might start with a game,
              something that happened that day, or a random opinion. A few minutes later, we&apos;re usually somewhere else entirely.
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

            <ol className="compact-flow" aria-label="Ceritanya Radio rundown">
              {showFlow.map(([time, text]) => (
                <li key={time}><time>{time}</time><span>{text}</span></li>
              ))}
            </ol>
          </div>
        </section>

        <section id="elsewhere" className="elsewhere-section" aria-labelledby="elsewhere-title">
          <div className="section-heading split-heading">
            <p className="section-label">04 / FIND ME</p>
            <h2 id="elsewhere-title">If you want to say hi,<br />I&apos;m usually around here.</h2>
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
                  aria-label={`Open Klevy's ${link.name} profile`}
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
        <p>Friendly, calm, playful. Depends on the ping.</p>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </footer>
    </div>
  );
}
