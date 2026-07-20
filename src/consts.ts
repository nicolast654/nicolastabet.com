// Single source of truth for site-wide metadata and links.
// Imported by layouts, the RSS feed, and the sitemap-driven pages.

export const SITE = {
  title: "Nicolas Tabet",
  description:
    "Systems-focused engineer working in operating systems, C, and infrastructure. Writing about low-level software and the things I build.",
  author: "Nicolas Tabet",
  url: "https://nicolastabet.com",
  locale: "en",
} as const;

export const NAV: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export const SOCIALS: { label: string; href: string }[] = [
  { label: "GitHub", href: "https://github.com/nicolast654" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nicolastabet" },
  { label: "Email", href: "mailto:nicolast654@gmail.com" },
  { label: "Résumé", href: "https://public.nicolastabet.com/files/resume.pdf" },
];
