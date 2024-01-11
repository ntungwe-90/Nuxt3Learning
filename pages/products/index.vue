<template>
     <h3 class="text-4xl font-bold text-indigo-600 text-center">Our Products</h3>
    <div class="grid grid-cols-4 gap-5">
     <div v-for="p in products">
        <ProductCard :product="p"/>
        <!-- <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink> -->
    </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'products'
})

// fetch the products
const {data:products} = await useFetch('https://fakestoreapi.com/products')
</script>

<style  scoped>

</style>