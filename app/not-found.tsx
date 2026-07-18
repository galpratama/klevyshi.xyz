import Link from "next/link";

export default function NotFound() {
  return (
    <main className="state-page">
      <p className="eyebrow"><span /> LOST IN THE VELVET ROOM</p>
      <h1>404</h1>
      <p>This page wandered off somewhere.</p>
      <Link href="/">return home</Link>
    </main>
  );
}
