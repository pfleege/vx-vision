// src/app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <p className="section-kicker">404 / ZERO COMPREHENSION</p>
      <h1 className="section-title">This dimension doesn&apos;t exist.</h1>
      <p className="section-copy">The page you requested could not be found.</p>
      <p>
        <Link className="button-primary mt-4" href="/">
          Return Home ↗
        </Link>
      </p>
    </section>
  );
}
