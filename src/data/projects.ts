// Shared project list. The home page shows `featured` entries; /projects shows all.
// Order here is the display order (most interesting first).

export interface Project {
  name: string;
  /** One line for the list view. */
  tagline: string;
  /** A sentence or two for the /projects page. */
  description: string;
  tech: string[];
  /** External link, when the source is public. Coursework has none. */
  href?: string;
  /** Set when the project was built for a course (no shareable source). */
  course?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    name: "memtrack",
    tagline: "An LD_PRELOAD leak tracker that shims malloc and free at runtime.",
    description:
      "Interposes on the allocator process-wide with LD_PRELOAD, so nothing in the target has to be recompiled, and records every live allocation in an open-addressing hash table with linear probing and tombstone deletion. That table can never call malloc itself, because it is the thing replacing malloc. At exit it reports leaks down to the file and line by forking to addr2line, resolving ASLR-shifted addresses against /proc/self/maps and capturing a stack trace for each allocation.",
    tech: ["C", "LD_PRELOAD", "dlsym"],
    featured: true,
  },
  {
    name: "malloc",
    tagline: "A memory allocator written from scratch in C, on top of raw syscalls.",
    description:
      "malloc, free, and realloc with no libc allocator underneath: just the kernel, my own free-list bookkeeping, and the alignment and coalescing logic in between. Writing it was the fastest way to actually feel fragmentation and the cost of a system call instead of reading about them.",
    tech: ["C", "syscalls", "memory"],
    course: "CS 252, Purdue",
    featured: true,
  },
  {
    name: "Homelab",
    tagline: "Self-hosted infrastructure across three sites. This site runs on it.",
    description:
      "A Tailscale mesh ties together a NUC home server, a Raspberry Pi exit node, and a Linode edge node running Traefik. Kopia snapshots back up to Backblaze B2, and GitHub Actions ships deploys over the tailnet. The site you are reading is served from it.",
    tech: ["Tailscale", "Traefik", "Linux", "CI/CD"],
    featured: true,
  },
  {
    name: "HTTP server",
    tagline: "A small HTTP/1.1 server in C, built on raw sockets.",
    description:
      "An accept loop, request parsing, and static file serving over BSD sockets. Enough of HTTP/1.1 to see where the real work, and the real footguns, live.",
    tech: ["C", "sockets", "HTTP"],
    course: "CS 252, Purdue",
  },
  {
    name: "Unix shell",
    tagline: "A shell in C with pipes, redirection, and job control.",
    description:
      "Tokenizing input, forking, wiring up pipelines and redirections, and reaping background jobs: the standard fork, exec, and wait dance, done carefully enough to handle the edge cases.",
    tech: ["C", "processes", "POSIX"],
    course: "CS 252, Purdue",
  },
  {
    name: "Task manager",
    tagline: "A terminal task manager in C.",
    description:
      "A small keyboard-driven task tracker for the terminal, with persistent storage and no dependencies.",
    tech: ["C", "CLI"],
    course: "CS 252, Purdue",
  },
];
