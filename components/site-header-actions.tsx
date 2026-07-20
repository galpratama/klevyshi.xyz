"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, RobloxIcon } from "@/components/brand-icons";

const ROBLOX_PROFILE_URL =
  "https://www.roblox.com/share?code=70e0c65e2c6c4f4bad3270886038109a&type=Profile&source=ProfileShare&stamp=1784366537053";

const sectionLinks = [
  ["About", "#about"],
  ["Things I like", "#interests"],
  ["103.9 FM", "#radio"],
  ["Find me", "#elsewhere"],
];

export function SiteHeaderActions() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <div className="header-actions" ref={containerRef}>
      <a
        className="header-roblox-cta"
        href={ROBLOX_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Klevy's Roblox profile"
      >
        <RobloxIcon />
        <span>Open Roblox</span>
        <ArrowUpRight />
      </a>

      <button
        ref={toggleRef}
        className="header-menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="header-mobile-menu"
        onClick={() => setOpen((current) => !current)}
      >
        <span>{open ? "Close" : "Menu"}</span>
        <i aria-hidden="true" />
      </button>

      {open && (
        <div className="header-menu-panel" id="header-mobile-menu">
          <p>Explore</p>
          <nav aria-label="Mobile navigation">
            {sectionLinks.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu}>
                <span>{label}</span>
                <span aria-hidden="true">↓</span>
              </a>
            ))}
          </nav>
          <a
            className="header-menu-roblox"
            href={ROBLOX_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <RobloxIcon />
            <span>Open Roblox</span>
            <ArrowUpRight />
          </a>
        </div>
      )}
    </div>
  );
}
