import Link from "next/link";

export default function NotFound() {
  return (
    <main className="state-page">
      <p className="eyebrow">OFF AIR / 404</p>
      <h1>Wrong turn.</h1>
      <p>This page never made it on air.</p>
      <Link href="/">Back to the studio</Link>
    </main>
  );
}
