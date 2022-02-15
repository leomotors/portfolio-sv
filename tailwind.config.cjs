module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      scale: {
        102.5: "1.025",
      },
      colors: {
        emerald: {
          150: "#bcf7db",
        },
      },
      spacing: {
        160: "40rem",
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
