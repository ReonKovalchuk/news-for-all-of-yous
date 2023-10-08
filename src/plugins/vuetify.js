/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// import '@/styles/main.scss'

// Composables
import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md2 } from 'vuetify/blueprints'
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
import { VInfiniteScroll } from 'vuetify/labs/VInfiniteScroll'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
    defaultTheme: 'light'
  },
  components: {
    VSkeletonLoader,
    VInfiniteScroll,
  },
  directives,
  blueprint: md2,

})



