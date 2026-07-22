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
        tagline: "A runtime memory leak tracker in C.",
        description: "memtrack is a simple memory leak tracker written in C to deepen my comprehension of dynamic linking, symbol tables, and shared objects. It tracks heap allocations and reports at the end how many elements were allocated and not freed.",
        tech: ["C", "LD_PRELOAD", "dlsym", "addr2line", "/proc"],
        href: "https://github.com/nicolast654/memtrack",
        featured: true,
    },
    {
        name: "Homelab",
        tagline: "Self-hosted infrastructure across three sites. This site runs on it.",
        description: "A Tailscale mesh across a NUC at home, a Pi, and a Linode box running Traefik out front: a reverse proxy, off-site backups, CI/CD deploys, and alerting, tied together over a private network. Beyond hosting a few things (this site, Immich, small projects with friends), it's my actual Linux dev environment. memtrack and most of my systems work happened here, over SSH from wherever I am." +
            "Backups run through Kopia to Backblaze B2.",
            tech: ["Tailscale", "Traefik", "Linux", "CI/CD"],
        featured: true,
    },
    {
        name: "malloc",
        tagline: "A thread-safe memory allocator in C, with four block-selection strategies.",
        description: "A memory allocator in C, built directly on sbrk with no libc allocator underneath. malloc, free, calloc, and realloc, thread-safe, with all four classic block-selection strategies (first, next, best, and worst fit) implemented and swappable. Coalescing is O(1) rather than a free-list scan, using a left_size field to find neighboring blocks without walking the list. Fenceposts guard chunk edges so coalescing never reaches outside memory the OS actually gave me, and adjacent chunks from separate sbrk calls merge automatically.",
        tech: ["C", "syscalls", "pthreads", "memory management"],
        course: "CS 252, Purdue",
        featured: false,
    },
    {
        name: "HTTP server",
        tagline: "A multithreaded HTTP/1.1 server in C on raw sockets.",
        description: "A multithreaded HTTP/1.1 server in C on raw sockets, with three concurrency modes: forking, thread-per-request, and a fixed thread pool. Supports Basic HTTP Authentication, HTTPS via OpenSSL/TLS, CGI execution over fork and execv, and dynamically loadable request handlers through dlopen and dlsym. Directory browsing, all the standard status codes, aiming for RFC 2616 compliance.",
        tech: ["C", "sockets", "HTTP", "multithreading"],
        course: "CS 252, Purdue",
    },
    {
        name: "Unix shell",
        tagline: "A shell in C with pipes, redirection, and job control.",
        description: "Unix shell: " +
            "A shell in C with a Lex/Yacc parser: piping, redirection, backgrounding, subshells, wildcard and environment expansion. Also built my own line editor and command history from raw terminal input, no readline.",
        tech: ["C", "processes", "POSIX"],
        course: "CS 252, Purdue",
    },
];
