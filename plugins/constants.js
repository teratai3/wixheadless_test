import { defineNuxtPlugin } from '#app';
//定数を管理する

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide("PLACEHOLDER_IMAGE","/images/placeholder.jpg");
});