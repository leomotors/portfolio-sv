// @ts-check

/**
 * @author Leomotors
 * * Vite Plugin that handle importing Markdown files
 * * No documentation, please read source code.
 */

import chalk from "chalk";
import hljs from "highlight.js";
import { marked } from "marked";

/**
 * @param {string} id
 * @returns {string}
 */
function parseDate(id) {
  const idtokens = id.split("/");
  const fname = idtokens[idtokens.length - 1]?.split(".md")[0];

  if (fname.length < 6) {
    console.log(chalk.yellow(`[WARN: ${id}] Cannot parse date from file name`));
    return "unknown";
  }

  return `20${fname.slice(0, 2)}-${fname.slice(2, 4)}-${fname.slice(4, 6)}`;
}

/**
 * @param {string} src
 * @param {string} id
 * @returns {{config: import("./src/lib/types").GetConfigOutput, newSrc: string}}
 */
function getConfig(src, id) {
  const lines = src.split("\n");

  // * Default Configuration
  const config = {
    title: lines.find((l) => l.startsWith("# "))?.slice(2) ?? "",
    desc: "",
    date: parseDate(id),
    updated: undefined,
  };

  if (!lines[0].startsWith("---")) {
    console.log(`[NOTE: ${id}] No configuration found.`);
    return {
      config,
      newSrc: src,
    };
  }

  let closing = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].startsWith("---")) {
      closing = i;
      break;
    }
  }

  if (closing === -1) {
    console.log(chalk.red(`[WARN: ${id}] Cannot parse configuration!`));
    return {
      config,
      newSrc: src,
    };
  }

  for (let i = 1; i < closing; i++) {
    const line = lines[i];
    let [prop, ...val] = line.split(":");
    prop = prop.trim();

    if (val.length < 1) {
      console.log(chalk.red(`[WARN: ${id}] Cannot parse ${prop}!`));
      continue;
    }

    if (!(prop in config)) {
      console.log(chalk.red(`[WARN: ${id}] No such properties ${prop}!`));
    }

    config[prop.trim()] = val.join(":").trim();
  }

  return {
    config,
    newSrc: lines.slice(closing + 1).join("\n"),
  };
}

/** @type {import("vite").Plugin} */
export default {
  // * Preprocess *.md files at compile time
  name: "preprocess-markdown",

  /** @type {import("vite").Plugin["transform"]} */
  transform(src, id) {
    if (id.endsWith(".md")) {
      const { config, newSrc } = getConfig(src, id);

      const html = marked(newSrc, {
        highlight(code, lang) {
          return hljs.highlight(code, { language: lang }).value;
        },
      }).replace(/"/g, '\\"');

      const tokens = html
        .split("\n")
        .map((line) => `"${line}"`.replace(/\\n/g, "\\\\n"));

      const content = `[
        ${tokens}
      ].join("\\n")`;

      return {
        code: `export default {
          title: "${config.title}",
          desc: "${config.desc}",
          date: "${config.date}",
          updated: ${config.updated ? `"${config.updated}"` : "undefined"},
          content: ${content}
        };`,
      };
    }
  },
};
