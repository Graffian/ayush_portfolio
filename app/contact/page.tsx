import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/site-icons";

export const metadata: Metadata = {
  title: "Contact — Ayushkant Behera",
  description:
    "Get in touch with Ayushkant Behera about projects, freelance work, or collaboration.",
};

const channels = [
  {
    label: "ayushkantworks@gmail.com",
    href: "mailto:ayushkantworks@gmail.com",
    Icon: Mail,
  },
  {
    label: "x.com/ayushh4506",
    href: "https://x.com/ayushh4506",
    Icon: XIcon,
  },
  {
    label: "github.com/Graffian",
    href: "https://github.com/Graffian",
    Icon: GithubIcon,
  },
  {
    label: "linkedin.com/in/ayushkant-behera-18a860279",
    href: "https://www.linkedin.com/in/ayushkant-behera-18a860279",
    Icon: LinkedinIcon,
  },
];

export default function ContactPage() {
  return (
    <section>
      <h1 className="mb-4 text-xs font-medium uppercase tracking-widest text-muted sm:mb-6 sm:text-sm">
        Contact
      </h1>
      <div className="flex flex-col gap-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:text-sm">
        <ul className="flex flex-col gap-2">
          {channels.map(({ label, href, Icon }) => {
            const isEmail = href.startsWith("mailto:");
            return (
              <li key={label}>
                <a
                  href={href}
                  {...(isEmail
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className="inline-flex items-center gap-2 hover:text-accent"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href="/ayush_resume.pdf"
          download
          className="inline-flex items-center justify-center self-start rounded-md bg-foreground px-4 py-2 font-medium text-background transition-opacity hover:opacity-90 sm:self-auto sm:px-5 sm:py-2.5"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
