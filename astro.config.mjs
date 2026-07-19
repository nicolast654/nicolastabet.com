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
});
