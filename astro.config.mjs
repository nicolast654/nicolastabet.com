// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Static output is Astro's default; no adapter means a pure `dist/` of HTML/CSS.
// `site` is required for absolute URLs in the sitemap, RSS feed, and OG tags.
export default defineConfig({
  site: "https://nicolastabet.com",
  integrations: [sitemap()],
  // Emit `/blog/a-post/index.html` so URLs have no trailing `.html`.
  build: { format: "directory" },
  markdown: {
    // Ship both theme palettes as CSS variables (--shiki-light/--shiki-dark)
    // and let global.css switch them by prefers-color-scheme — no JS, no
    // flash. `defaultColor: false` drops the inline color so our own code
    // block surface shows through.
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
      defaultColor: false,
    },
  },
});
