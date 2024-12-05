<script scoped>
import { createStructuralDirectiveTransform } from '@vue/compiler-core';
import { globalInput } from "@/stores/global";
import { ref, reactive } from 'vue';
import { RouterLink } from 'vue-router';

    export default{
        setup(){
            const global = globalInput();
    const inpTitle = ref('');
    const about = ref('');
    const inpPrice = ref('');

           function formFilled(){
            global.item.name = inpTitle.value;
            global.item.about = about.value;
            global.item.price = inpPrice.value;
            console.log('name', inpTitle.value);
            console.log('about', about.value);
            console.log('price', inpPrice.value)
           }

            return { inpTitle, about, inpPrice, formFilled};

        }
    }



</script>

<template>

    <div class="div_for_list tw-w-full  tw-flex tw-justify-center tw-items-center tw-flex-col">
        <div class="overlay tw-w-full  tw-flex tw-justify-center tw-items-center tw-gap-10">

            <div class="tw-w-2/5 tw-flex tw-justify-center">
                <form @submit.prevent="formFilled()"  class=" tw-w-full tw-bg-gray-100 tw-p-2 tw-flex tw-flex-col tw-items-center tw-justify-center">
                    <span 
                        class="tw-my-8 tw-text-xl tw-block tw-text-center tw-text-white tw-w-48 tw-bg-pink-500 tw-p-2 tw-rounded-md">Products Form</span>
                    <div class="tw-flex tw-m-10 tw-text-lg tw-items-center tw-gap-40">
                        <span
                            class="tw-font-semibold tw-rounded-md tw-text-white tw-bg-pink-500 tw-p-2 tw-block tw-text-center tw-w-28">Name
                            :</span>
                        <input placeholder="Enter Name" id="title" name="title" class="tw-text-pink-500 tw-border tw-border-pink-500 tw-rounded tw-p-2"
                            type="text" v-model="inpTitle">
                         

                    </div>
                    <div class="tw-flex tw-m-10 tw-text-lg tw-items-center tw-gap-40">
                        <span
                            class="tw-font-semibold tw-rounded-md tw-text-white tw-bg-pink-500 tw-p-2 tw-block tw-text-center tw-w-28">About
                            :</span>
                        <input placeholder="EnterClass" id="title" name="title" class="tw-text-pink-500 tw-border tw-border-pink-500 tw-rounded tw-p-2"
                            type="text" v-model="about">
                            

                    </div>
                    <div class="tw-flex tw-m-10 tw-text-lg tw-items-center tw-gap-40">
                        <span
                            class="tw-font-semibold tw-rounded-md tw-text-white tw-bg-pink-500 tw-p-2 tw-block tw-text-center tw-w-28">Price
                            :</span>
                        <input placeholder="Enter Roll Number" id="title" name="title" class="tw-text-pink-500 tw-border tw-border-pink-500 tw-rounded tw-p-2"
                            type="number" v-model="inpPrice">

                    </div>

                    <button
                        class="tw-my-8 tw-text-xl tw-block tw-text-center tw-text-white tw-w-48 tw-bg-pink-500 tw-p-2 tw-rounded-md"
                        type="submit">Submit</button>
                </form>
            </div>

            
        </div>
    </div>





</template>
<style scoped>
input {
    outline: none;
}

.div_for_list {
    background-image: url('src/assets/todo.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 83vh;
}

.overlay {
    background-color: rgba(149, 149, 149, 0.435);
    height: 86vh;
}
th,
td {
    width: 18%;
    border-bottom: 1px solid rgb(194, 194, 194);
}

table {
    border: 1px solid rgb(194, 194, 194);
}
</style>