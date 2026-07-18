import Link from "next/link";

export default function NotFound() {
  return (
    <main className="state-page">
      <p className="eyebrow">OFF AIR / 404</p>
      <h1>nyasar.</h1>
      <p>halamannya ga ikut siaran.</p>
      <Link href="/">balik ke studio</Link>
    </main>
  );
}
