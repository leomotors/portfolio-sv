import vercel from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";

import path from "path";
import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";

import PreprocessMarkdown from "./md.plugin.js";

/** @type {import("@sveltejs/kit").Config} */
export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [preprocess({ postcss: true })],
  kit: {
    adapter: vercel(),
    vite: defineConfig({
      resolve: {
        alias: {
          $posts: path.resolve("./src/posts"),
        },
      },
      plugins: [Inspect(), PreprocessMarkdown],
    }),
  },
};
