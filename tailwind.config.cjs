module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      scale: {
        102.5: "1.025",
      },
      spacing: {
        160: "40rem",
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
