module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Portfolio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Poiret+One|Quicksand:400,500|Kosugi+Maru|Noto+Sans+JP:400,900"
      }
    ]
  },
  css: ["~/assets/css/default.css"],
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  server: {
    port: 3001
  },

  modules: ["@nuxtjs/style-resources", "@nuxtjs/vuetify"],
  styleResources: {
    scss: ["~/assets/scss/_index.scss"]
  },
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
