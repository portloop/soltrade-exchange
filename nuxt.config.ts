// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true }

// })
// import scrollAnimation from '~/plugins/scrollAnimation.js'


export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  // plugins: [
  //   { src: '~/plugins/scrollAnimation.js', mode: 'client' }
  //  ],
  plugins: [
    // '~/plugins/scrollAnimation.js',

  ],
  
  vite: {
    esbuild: {
      target: "esnext",
    },
    build: {
      target: "esnext",
    },
    optimizeDeps: {
      include: [ "@solana/web3.js", "buffer"],
      esbuildOptions: {
        target: "esnext",
      },
    },
    define: {
      "process.env.BROWSER": true,
    },
  },

  app: {
    head: {
      title: 'SolTrade - SolTrade Market',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    }
  },
  
  alias: {
    assets: "/<rootDir>/assets/"
  },
  
  // Ensure static assets are properly handled
  nitro: {
    publicAssets: [
      {
        dir: 'assets',
        maxAge: 60 * 60 * 24 * 365 // 1 year
      }
    ]
  }
});