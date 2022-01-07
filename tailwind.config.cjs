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
        128: "32rem",
      },
    },
  },

  plugins: [],
};
