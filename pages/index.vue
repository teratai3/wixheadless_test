<template>
    <h1>NEWS一覧</h1>
    <ul>
        <li v-for="item in items?._items" :key="item._id"><NuxtLink :to="{ path: '/news/' + item.data.slug }">{{ item.data.title }}</NuxtLink></li>
    </ul>
</template>



<script>
export default {
    data() {
        return {
            items: []
        }
    },
    async mounted() {
        this.items = await $fetch("/api/news/all");
    }
};
</script>

<style scoped></style>