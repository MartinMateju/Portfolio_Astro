import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), compress()],
  output: "server",
  adapter: vercel(),
  i18n: {
    defaultLocale: "en",
    locales: ["en", "cz"],
    routing: {
        prefixDefaultLocale: false
    }
  }
});