import vercel from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";

import path from "path";
import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";

import { marked } from "marked";
import hljs from "highlight.js";

/** @type {import('@sveltejs/kit').Config} */
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
      plugins: [
        Inspect(),
        {
          // * Preprocess *.md files at compile time
          name: "preprocess-markdown",
          transform(src, id) {
            if (id.endsWith(".md")) {
              const html = marked(src, {
                highlight(code, lang) {
                  return hljs.highlight(code, { language: lang }).value;
                },
              }).replace(/"/g, '\\"');

              const tokens = html.split("\n").map((line) => `"${line}"`);

              return {
                code: `export default [
                  ${tokens}
                ].join("\\n")`,
              };
            }
          },
        },
      ],
    }),
  },
};
