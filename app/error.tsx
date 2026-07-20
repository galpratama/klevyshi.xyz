"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="state-page">
      <p className="eyebrow">SIGNAL LOST</p>
      <h1>Well, this is awkward.</h1>
      <p>The site tripped over a cable. Give it another shot.</p>
      <button type="button" onClick={reset}>Try again</button>
    </main>
  );
}
