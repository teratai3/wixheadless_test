<template>
<h1>お知らせ詳細</h1>
<h2>{{ item.data?.title }}</h2>

<ImageWixMedia :media="item.data?.image" />
<div v-html="item.data?.longdescription ? item.data?.longdescription: '' "></div>

<p><NuxtLink :to="{ path: '/' }">トップに戻る</NuxtLink></p>
</template>
<script>
export default {
    setup() {
        definePageMeta({
            validate: async (route) => {
                //スラッグと一致しなければ404
                const Item = await $fetch("/api/news/" + route.params.slug);
                return Item._items[0]?.data.slug === route.params.slug;
            }
        })
    },
    
    data() {
        return {
            route: useRoute(),
            item: []
        };
    },
    async mounted() {
        let fetch_data = await $fetch("/api/news/" + this.route.params.slug);
        this.item = fetch_data._items[0];
    },
};
</script>