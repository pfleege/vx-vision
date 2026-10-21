// src/components/layout/SiteHeader.tsx

import Link from "next/link";
import Image from "next/image";
import { links } from "@/data/nav-links";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="VX Vision home">
        <Image
          className="h-25 w-auto"
          src="/logo.png"
          alt="Next.js logo"
          width={150}
          height={250}
          priority
        />
      </Link>
      <nav aria-label="Main navigation" className="nav-links">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <Link href="/products/vx-one" className="nav-cta">
        Discover <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}
