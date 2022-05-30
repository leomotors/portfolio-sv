const plugin = require("tailwindcss/plugin");

const transitionTransform = {
  transitionProperty: "transform",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "150ms",
};

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  darkMode: "class",

  theme: {
    extend: {
      spacing: {
        160: "40rem",
      },
    },
  },

  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".expand": transitionTransform,
        ".expand-sm": transitionTransform,
        ".expand:hover": {
          transform: "scale(1.05)",
        },
        ".expand-sm:hover": {
          transform: "scale(1.025)",
        },
      });
    }),
  ],
};
