"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="state-page">
      <p className="eyebrow">SIGNAL LOST</p>
      <h1>waduh.</h1>
      <p>webnya lagi keselek kabel. coba sekali lagi.</p>
      <button type="button" onClick={reset}>nyalain ulang</button>
    </main>
  );
}
