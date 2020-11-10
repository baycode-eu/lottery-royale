import 'vue-tsx-support/enable-check'
require('dotenv').config()

export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'Lottery Royale - the best lottery in the world since 1969',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The best lottery in the world since 1969' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    "~/assets/styles/global.scss"
  ],

  plugins: [
    '~/plugins/filters.js',
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
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
  },

  modules: [
    'nuxt-buefy',
  ],

  build: {}
}
