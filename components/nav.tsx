"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/content";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="mt-6 border-b border-border sm:mt-8">
      <ul className="-mb-px flex flex-wrap gap-x-5 gap-y-1 sm:gap-x-7">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-block border-b-2 pb-3 text-sm transition-colors ${
                  isActive
                    ? "border-accent text-foreground"
                    : "border-transparent text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
