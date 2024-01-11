
<template>
    <div>
        <header class="shadow-lg bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
            <NuxtLink to="/" class="font-bold"><span class="block text-indigo-600 xl:inline">ICY'S</span>  E-commerce</NuxtLink>
            </nav>
        </header>
        <!-- output the content -->
        <div class="container mx-auto p-4"> 
     <!-- output the content -->
     <slot/>
    </div> 
        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="products">Products</NuxtLink>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script setup>

</script>

<style  scoped>.router-link-exact-active {
    color: rgb(38, 109, 85);
}</style>