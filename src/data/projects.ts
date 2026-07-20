// Shared project list. The home page shows `featured` entries; /projects shows all.
// Order here is the display order (most interesting first).

export interface Project {
  name: string;
  /** One line for the list view. */
  tagline: string;
  /** A sentence or two for the /projects page. */
  description: string;
  tech: string[];
  href?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    name: "malloc",
    tagline: "A memory allocator written from scratch in C, straight on raw syscalls.",
    description:
      "malloc, free, and realloc with no libc allocator underneath — just the kernel, my own free-list bookkeeping, and the alignment and coalescing logic in between. Building it was the fastest way to actually feel fragmentation and the cost of a system call rather than read about them.",
    tech: ["C", "syscalls", "memory"],
    featured: true,
  },
  {
    name: "memtrack",
    tagline: "An LD_PRELOAD leak tracker that shims malloc and free at runtime.",
    description:
      "Interposes on the allocator with LD_PRELOAD, bootstraps the real symbols through dlsym, and records every live allocation in a hash table with linear probing that never calls malloc itself — it can't, it's the thing replacing malloc. Dumps whatever leaked at exit.",
    tech: ["C", "LD_PRELOAD", "dlsym"],
    featured: true,
  },
  {
    name: "Homelab",
    tagline: "Self-hosted infrastructure across three sites. This site runs on it.",
    description:
      "A Tailscale mesh tying together a NUC home server, a Raspberry Pi exit node, and a Linode edge node running Traefik. Kopia snapshots back up to Backblaze B2, and GitHub Actions ships deploys over the tailnet. The site you're reading is served from it.",
    tech: ["Tailscale", "Traefik", "Linux", "CI/CD"],
    featured: true,
  },
  {
    name: "HTTP server",
    tagline: "A small HTTP/1.1 server in C, built on raw sockets.",
    description:
      "Accept loop, request parsing, and static file serving over BSD sockets — enough of HTTP/1.1 to understand where the real work (and the real footguns) live.",
    tech: ["C", "sockets", "HTTP"],
  },
  {
    name: "Unix shell",
    tagline: "A shell in C with pipes, redirection, and job control.",
    description:
      "Tokenizing, forking, wiring up pipelines and redirections, and reaping background jobs — the standard fork/exec/wait dance, done carefully enough to handle the edge cases.",
    tech: ["C", "processes", "POSIX"],
  },
  {
    name: "Task manager",
    tagline: "A terminal task manager in C.",
    description:
      "A small keyboard-driven task tracker for the terminal — persistent storage, add/complete/remove, no dependencies.",
    tech: ["C", "CLI"],
  },
];
