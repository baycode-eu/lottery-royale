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

  css: [],

  plugins: [
    '~/plugins/buefy.js',
    // '~/plugins/apollo.js'
  ],

  components: true,

  babel: {
    presets: ['@nuxt/babel-preset-app', 'vca-jsx'],
  },

  buildModules: [
    '@nuxt/typescript-build',
    'nuxt-composition-api',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-buefy',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
