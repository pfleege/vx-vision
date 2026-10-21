// src/components/layout/SiteFooter.tsx

import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link href="/" className="brand flex">
        <img src="./vx.png" alt="Company logo" className="h-8 w-auto" />
        <span>®</span>
      </Link>
      <p>Designed beyond the visible.</p>
      <span>© {new Date().getFullYear()} VX Vision</span>
    </footer>
  );
}
