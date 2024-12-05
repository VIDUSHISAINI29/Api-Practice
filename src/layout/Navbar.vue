<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    
    <div class="navbar tw-shadow-xl tw-bg-gray-200 tw-sticky tw-top-0 tw-left-0 tw-w-full tw-p-2 tw-flex tw-justify-around tw-items-center">

<div class="nav_inn tw-rounded-lg w-3/5 tw-bg-pink-600 tw-p-3 tw-flex ">
    <div class="logo   tw-text-4xl tw-text-white tw-text-center tw-font-bold tw-flex-col">YOUR<small class="tw-text-md tw-font-bold">MALL</small></div>
  
</div>
<div class=" tw-text-pink-600 tw-text-lg tw-font-bold tw-flex tw-items-center tw-justify-end tw-gap-10">
        <span>Home </span>
        <RouterLink to="/shop">Shop</RouterLink>
        <RouterLink to="/form" >Form</RouterLink>
    </div>
</div>

</template>

<style scope>



</style>