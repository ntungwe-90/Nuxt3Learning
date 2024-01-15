
<template>
    <div>
     <header class="shadow-lg bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
            <NuxtLink to="/" class="font-bold"><span class="block text-indigo-600 xl:inline">ICY'S</span>  E-commerce</NuxtLink>
            <ul class="flex gap-4">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="about">About</NuxtLink></li>
                <li><NuxtLink to="products">Products</NuxtLink></li>
            </ul>
            <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <a href="/signUpForm" class="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                Sign in
            </a>
            <a href="/signUpForm" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                Sign up
            </a>
        </div>
        </nav>
       
     </header> 
     <div class="container mx-auto p-4"> 
     <!-- output the content -->
     <slot/>
    </div> 
    </div>
</template>

<script setup>

</script>

<style  scoped>
.router-link-exact-active{
    color: rgb(38, 109, 85);
}
</style>