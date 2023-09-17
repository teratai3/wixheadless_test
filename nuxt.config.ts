// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    wixClientId:process.env.NUXT_PUBLIC_WIX_CLIENT_ID || '',
  }
})
