type IconProps = { className?: string };

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.3 3h3.17c.18 1.55 1.08 2.9 2.53 3.65v3.22a8.2 8.2 0 0 1-2.55-.7v5.73A6.1 6.1 0 1 1 12 8.83v3.28a2.9 2.9 0 1 0 2.3 2.84V3Z" />
    </svg>
  );
}

export function RobloxIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="m5.27 2.2 16.53 3.07-3.07 16.53L2.2 18.73 5.27 2.2Zm5.2 7.1-.94 5.02 5.02.94.94-5.03-5.02-.93Z" clipRule="evenodd" />
    </svg>
  );
}

export function PixelSpark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10 2h4v6h6v4h-6v10h-4V12H4V8h6V2Z" fill="currentColor" />
      <path d="M19 15h2v2h-2v-2ZM3 17h3v3H3v-3Z" fill="currentColor" opacity=".6" />
    </svg>
  );
}
