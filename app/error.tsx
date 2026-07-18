"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="state-page">
      <p className="eyebrow"><span /> SOMETHING GLITCHED</p>
      <h1>oops.</h1>
      <p>The page hit an unexpected error.</p>
      <button type="button" onClick={reset}>try again</button>
    </main>
  );
}
