import colors from 'vuetify/es5/util/colors'
import TerserPlugin from 'terser-webpack-plugin'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Bigyapan Inc. Pvt. Ltd.',
    title: 'Home',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vuelidate.js',
    {src: '~/plugins/vuex-persist', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/i18n',
    '@nuxtjs/dotenv',
    ['cookie-universal-nuxt', {alias: 'cookiz'}],
  ],

  styleResources: {
    scss: [
      '~/assets/scss/common/_variables.scss',
    ]
  },


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: "#0A1946",
          accent: "#F29D1F",
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          whatsapp: "#075e54",
          graybackground: "#F5F5F5",
        },
        light: {
          primary: "#0A1946",
          accent: "#F29D1F",
          secondary: colors.amber.lighten3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          whatsapp: "#075e54",
          graybackground: "#F5F5F5",
        }
      }
    }
  },

  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'  // recommended
    },
    locales: [{
      code: 'en',
      iso: 'en-US',
      file: 'en.json',
      name: 'EN'
    }, {
      code: 'np',
      iso: 'np-NP',
      file: 'np.json',
      name: 'NP'
    }],
    vueI18nLoader: true,
    strategy: 'no_prefix',
    defaultLocale: 'en',
    langDir: 'lang/',
    vueI18n: {
      fallbackLocale: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    extend(config, ctx) {
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: false
        })
      ]
    }
  }
}
