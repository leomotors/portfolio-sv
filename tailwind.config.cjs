const config = {
  mode: "jit",
  purge: ["index.html", "./src/**/*.svelte"],

  theme: {
    extend: {
      scale: {
        102.5: "1.025",
      },
    },
  },

  plugins: [],
};

module.exports = config;
