<script scoped>

import { reactive, ref } from "vue";

// let inpTitle = ref('')
//     let about = ref('')

import { globalInput } from "@/stores/global";
// const global = globalInput()

// inpTitle.value = global.item.name 
//     about.value = global.item.about


// // function col(){
// //     console.log('title =',global.titleInput)
// //     console.log('id =',global.categoryInput)
// //     console.log('rs =',global.priceInput)
// // }




// // async function deleteIt(id) {
// //     console.log('hello vids')
// //     const api = `https://post-api.hrarmy.in/posts/${id}`;
// //     const resp = await fetch(api, {
// //         method: "DELETE"
// //     })
// //     if(resp.ok){
// //         fetchData();
// //     }
// //     else{
// //         alert('Failed to delete product');
// //     }
    

// // }


// // async function editIt(id) {
// //     const url = `https://post-api.hrarmy.in/posts/${id}`;
// //     const response = await fetch(url);
// //     const product = await response.json();

// //    inpTitle = product.title;
// //    about = product.content;
// //     console.log(inpTitle)
// // }
// let test =  ref('')

// const productsData = reactive([]);

// async function fetchData(){
//     const fetchApi = await fetch('https://post-api.hrarmy.in/posts');
//     const data = await fetchApi.json();
//     productsData.value = data
//     console.log('here is list of data', );
//     productsData.value.forEach(element => {
//     test.value = element.title;
//     console.log('ham hai', test.value)
        
//     });
// }


// fetchData();



export default {
  setup() {
    const global = globalInput();
    const inpTitle = ref('');
    const about = ref('');
    const inpPrice = ref('');
    const productsData = ref([]);

    // Initialize with global data if available
    inpTitle.value = global.item.name;
    about.value = global.item.about;
    inpPrice.value = global.item.price;

    async function fetchData() {
      try {
        const fetchApi = await fetch('https://post-api.hrarmy.in/posts');
        const data = await fetchApi.json();
        productsData.value = data;
        console.log('Here is list of data:', productsData.value);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // async function editIt(id) {
    //   try {
    //     const url = `https://post-api.hrarmy.in/posts/${id}`;
    //     const response = await fetch(url);
    //     const product = await response.json();

    //     product.title = inpTitle.value ;
    //     product.content = about.value ;
    //    product.price =  inpPrice.value ;
    //     console.log(inpTitle.value);
    //   } catch (error) {
    //     console.error('Error editing product:', error);
    //   }
    // }

    async function deleteIt(id) {
      try {
        console.log('Deleting item with ID:', id);
        const api = `https://post-api.hrarmy.in/posts/${id}`;
        const resp = await fetch(api, { method: "DELETE" });
        if (resp.ok) {
          fetchData(); // Refresh the data after deletion
        } else {
          alert('Failed to delete product');
        }
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }

    // Fetch data when component is set up
    fetchData();

    return { inpTitle, about, productsData, deleteIt };
  }
};
</script>

<template>
    
    <div class="tw-w-full tw-flex tw-items-center tw-p-2 tw-gap-2 tw-flex-col">
        <span class="tw-p-2 tw-px-4 tw-my-10 tw-text-xl tw-text-white tw-rounded-md tw-bg-blue-400">
            Create +</span>
        <table class="tw-w-1/2 tw-p-2">
            <thead>
               <tr>
                <th class="tw-p-2 tw-text-black">Name</th>
                <th class="tw-p-2 tw-text-black">About</th>
                <th class="tw-p-2 tw-text-black">Price</th>
                <th class="tw-p-2 tw-text-black">Edit</th>
                <th class="tw-p-2 tw-text-black">Delete</th>
               </tr>
            </thead>

            <tbody>
                <tr v-for="item in productsData" :key="item.id">
                    <td class="tw-p-2 tw-text-center tw-text-black">{{ item.title }}</td>
                    <td class="tw-p-2 tw-text-center tw-text-black">{{ item.content }}</td>
                    <td class="tw-p-2 tw-text-center tw-text-black">${{ item.price }}</td>
                    <td class="tw-text-center">
                        <RouterLink to="/form"  @click="global.editIt(item.id)" class="tw-text-center tw-p-2 tw-px-5 tw-rounded-md tw-bg-green-400 tw-text-white">
                            Edit
                        </RouterLink>
                    </td>
                    <td class="tw-text-center">
                        <button @click="deleteIt(item.id)"  class="tw-text-center tw-rounded-md tw-p-2 tw-bg-red-500 tw-text-white tw-px-3">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<style scoped>
th,
td {
    width: 18%;
    border-bottom: 1px solid rgb(194, 194, 194);
}

table {
    border: 1px solid rgb(194, 194, 194);
}
</style>