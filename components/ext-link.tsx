import type { ReactNode } from "react";

export default function ExtLink({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-accent hover:underline ${className}`.trim()}
    >
      {children}
    </a>
  );
}
