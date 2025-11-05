"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { useMemo } from "react";

const links = [
  { href: "/", label: "Curations" },
  { href: "/saved", label: "Saved" }
];

export function Header() {
  const pathname = usePathname();

  const active = useMemo(() => {
    const base = pathname === "/" ? "/" : `/${pathname.split("/")[1] ?? ""}`;
    return base === "" ? "/" : base;
  }, [pathname]);

  return (
    <header className="nav-shell">
      <Link href="/" className="brand">
        Palm & Pixel
      </Link>
      <nav className="nav-links">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx("nav-link", link.href === active && "nav-link-active")}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
