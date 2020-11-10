import 'vue-tsx-support/enable-check'

export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'lottery-royale',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    "~/assets/styles/global.scss"
  ],

  plugins: [
    '~/plugins/buefy.js',
    '~/plugins/apollo.js'
  ],

  components: true,

  babel: {
    presets: ['@nuxt/babel-preset-app', 'vca-jsx'],
  },

  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxt/typescript-build',
    'nuxt-composition-api',
  ],

  env: {
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT || 'http://localhost:8010/proxy/graphql',
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-buefy',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
