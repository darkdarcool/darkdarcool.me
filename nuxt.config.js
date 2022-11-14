export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'darkdarcool',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://fonts.googleapis.com/css?family=Nunito Sans', rel: 'stylesheet' }
    ]
  },
  components: {
    dirs: [
      '~/components',
    ]
  },

  css: [
    '~/assets/styles/main.css'
  ],
  plugins: [
    { src: '~/plugins/bgImage.js', mode: 'client' }
  ],
  routes: [
    {
      name: "about",
      path: "/about",
      component: "~/pages/about.vue"
    },
    {
      name: "contact",
      path: "/contact",
      component: "~/pages/contact.vue"
    }
  ],
  buildDir: "dist",

}
