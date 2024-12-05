// const item = reactive({
//     name: '',
//     price: '',
//     img: ''
//   });
  
  import {ref, computed, watch, reactive} from 'vue';
  import{ defineStore} from 'pinia';
  export const globalInput = defineStore('global', () =>{
    const item = reactive({
      name: '',
      about: '',
      price: '',
    });
    async function editIt(id) {
        try {
          const url = `https://post-api.hrarmy.in/posts/${id}`;
          const response = await fetch(url);
          const product = await response.json();
  
          product.title = inpTitle.value ;
          product.content = about.value ;
         product.price =  inpPrice.value ;
          console.log(inpTitle.value);
        } catch (error) {
          console.error('Error editing product:', error);
        }
      }
      const itemId = reactive([]);
      return {
          item,
          itemId,
          editIt
        };
  })