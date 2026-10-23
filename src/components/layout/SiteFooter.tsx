// src/components/layout/SiteFooter.tsx

import Link from "next/link";
import Image from "next/image";
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link href="/" className="brand flex">
        <Image
          src="/vx.png"
          alt="Company logo"
          height={32}
          width={32}
          priority
        />
        <span>®</span>
      </Link>
      <p>Designed beyond the visible.</p>
      <span>© {new Date().getFullYear()} VX Vision</span>
    </footer>
  );
}
