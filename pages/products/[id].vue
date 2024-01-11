<template>
    <!-- Details page -->
    <h3 class="text-4xl text-xg font-bold text-indigo-600">Product Details</h3>
    <div>
        <ProductDetail :product="product" />
    </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

// fetch product
const { data: product } = await useFetch(uri, { key: id })
if(!product.value){
    throw createError({statusCode:404, statusMessage:'Product not found', fatal:true})
}


definePageMeta({
    layout: 'products'
})
</script>

<style scoped></style>