<template>
  <div>

    <!-- modal create-category -->
    <button 
      class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-12 m-2 rounded"
      @click="Modal = !Modal"
    >Création nouvelle Catégorie</button>
    <div 
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
      v-if="Modal"
    >
        <div class="relative mx-auto w-auto max-w-2xl">

       <div class="bg-blue-500 w-full rounded shadow-2xl flex flex-col">

         <div class="text-2xl font-bold text-center mt-2"> NouvelleCatégorie
           <button class="rounded bg-red-600 hover:bg-red-400 text-white text-center px-2 py-1 text-sm absolute top-0 right-0 m-2" @click="Modal=false">X</button> 
         </div>
         
         
         <!-- MESSAGE CATEGORY CREATE SUCCESS  -->
            <div v-if="createSuccess != null"
              class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
              <div class="flex">
                <div class="py-1">
                  <svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path
                      d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
                </div>
                <div>
                  <p class="font-bold">Categorie créée avec succès</p>
                </div>
              </div>
            </div>

            <!-- MESSAGE CATEGORY ERROR  -->

            <div v-if="createError != null" role="alert">
              <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                Error
              </div>
              <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <p>Merci de verifier les informations</p>
              </div>
          </div>

          <form 
          @submit.prevent="createCategorySubmit"
         class="bg-white shadow-md rounded px-8 pt-6 pb-8 m-2 " >
           
           <div class="mb-4 ">
              <label class="block text-blue-700 text-sm font-bold mb-2 " for="nomdujeu">
               Nom de la categorie
              </label>
              <input 
              v-model="name"
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline" id="categorie" type="text" placeholder="nom de la categorie">
           </div>
          

            <button 
            class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline" 
            type="submit">Création</button>

         </form>       
         </div>
      </div>
    </div>
    <div v-if="Modal" class= "absolute inset-0 z-40  opacity-25 bg-black"></div>    
    <!-- Button trigger modal -->
    

        <div class="flex flex-col m-2 shadow-lg">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-blue-200">
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 border-b border-blue-200 bg-blue-50 text-left text-xs leading-4 font-medium text-blue-500 uppercase tracking-wider">
                  Catégories</th>
                <th
                  class="px-6 py-3 border-b border-blue-200 bg-blue-50 text-left text-xs leading-4 font-medium text-blue-500 uppercase tracking-wider">
                  </th>
                <th
                  class="px-6 py-3 border-b border-blue-200 bg-blue-50 text-left text-xs leading-4 font-medium text-blue-500 uppercase tracking-wider">
                  </th>
                <th
                  class="px-6 py-3 border-b border-blue-200 bg-blue-50 text-left text-xs leading-4 font-medium text-blue-500 uppercase tracking-wider">
                  </th>
                <th class="px-6 py-3 border-b border-blue-200 bg-blue-50"></th>
                <th class="px-6 py-3 border-b border-blue-200 bg-blue-50"></th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="category in getAllCategories.Category" :key="category._id">
                <td class="px-6 py-4 whitespace-no-wrap border-b border-blue-200">
                  <div class="flex items-center">
                    
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-blue-900">{{category.name}} </div>

                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-blue-200">
                  <div class="text-sm leading-5 text-blue-900"></div>

                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-blue-200">
                  <div class="text-sm leading-5 text-blue-900"></div>

                </td>
<!-- v-if="user.admin == true" -->
                <td  class="px-6 py-4 whitespace-no-wrap border-b border-blue-200"><span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"></span>
                </td>
<!-- v-if="user.admin == false" -->
                      <td  class="px-6 py-4 whitespace-no-wrap border-b border-blue-200"><span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"></span>
                </td>
<!-- début du modal -->
<td 
  class="px-6 py-4 whitespace-no-wrap text-right border-b border-blue-200 text-sm leading-5 font-medium">
          <button 
          class="bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-2 rounded-full text-center"
          @click="toggleModal = !toggleModal, categoryToEdit = category"

        >Modification</button>

        <div 
          class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
          v-if="toggleModal"
        > 
        <div class="relative mx-auto w-auto max-w-2xl">

       <div class="bg-blue-500 w-full rounded shadow-2xl flex flex-col">
         <div class="text-2xl font-bold text-center mt-2 mr-1"> Modifier Catégorie

           <button 
            class="rounded bg-red-500 text-white text-center px-2 py-1 text-sm absolute top-0 right-0 m-1" 
            @click="toggleModal=false">X</button> 
         </div>
        
         
            <!-- MESSAGE CATEGORY CREATE SUCCESS  -->
            <div v-if="modifySuccess != null"
              class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
              <div class="flex">
                <div class="py-1">
                  <svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path
                      d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
                </div>
                <div>
                  <p class="font-bold">Categorie modifiée avec succès</p>
                </div>
              </div>
            </div>

            <!-- MESSAGE CATEGORY ERROR  -->

            <div v-if="modifyError != null" role="alert">
              <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                Error
              </div>
              <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <p>Merci de verifier les informations</p>
              </div>
          </div>

            <form 
            @submit.prevent="modifyCategorySubmit()"
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 m-2 " >
           <div class="mb-4 ">
              <label class="block text-blue-700 text-sm font-bold mb-2 text-left" for="nomdujeu">
               Nom de la categorie
              </label>
              <input 
              class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="categorie" 
              type="text" 
              required
              placeholder="Nom de la categorie"
              v-model="categoryToEdit.name"
              >
             </div>
          
            <button 
            class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline" 
            type="submit"
            >
            Modifier
            </button>

         </form>       
         </div>
      </div>
    </div>
    <div v-if="toggleModal" class= "absolute inset-0 z-40  opacity-25 bg-black"></div> 
  </td>                
<!--  modal modification finish-->
                <td
                  class="px-6 py-4 whitespace-no-wrap text-right border-b border-blue-200 text-sm leading-5 font-medium">
                  <button 
                    class=" bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-2 rounded-full text-center w-40" 
                    style="cursor:pointer;" 
                    @click="deleteCategoryButton(category._id)"
                    >
                    Supprimer la catégorie
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

  export default {
    data() {
      return {
        Modal: false,
        toggleModal: false,
        name: "",
        categoryToEdit:"",
        createSuccess:null,
        createError:null,
        modifySuccess:null,
        modifyError:null,
      };
    },
    methods: {
      ...mapActions([
        "createCategory",
        "fetchAllCategories",
        "fetchCategoryById",
        "modifyCategory",
        "deleteCategory"      
    ]),
    deleteCategoryButton(id) {
      this.fetchAllCategories();
      this.deleteCategory(id);
      this.fetchAllCategories();
      
    },
      createCategorySubmit() {
      var obj = {
        name: this.name,
      };

      this.createCategory(obj);
      
      if(this.getCreateCategoryResponse.success){
        this.createError = null;
        this.createSuccess = this.getCreateCategoryResponse.success;
        setTimeout(function () {
            window.location.href = "/";
          }, 1500);
      }else{
        this.createError = this.getCreateCategoryResponse.error;
      }
      this.fetchAllCategories(); 
        
     },
    
      modifyCategorySubmit() {
      var obj = {
        name: this.categoryToEdit.name,
        id : this.categoryToEdit._id
      };

      this.modifyCategory(obj);
      if(this.getModifyCategoryResponse.success){
        this.modifyError = null;
        this.modifySuccess = this.getModifyCategoryResponse.success;
      }else{
        this.modifyError = this.getModifyCategoryResponse.error;
      }
      this.fetchAllCategories();
      
      
  }
    },
    
     computed: mapGetters([
    "getCreateCategoryResponse",
    "getAllCategories",
    "getCategoryById",
    "getDeleteCategoryResponse",
    "getModifyCategoryResponse",
  ]),
    created(){
      this.fetchAllCategories() 
      this.createSuccess = null;
      this.modifySuccess = null;
      this.createError = null;
      this.modifyError = null;
    },
  }

</script>

<style scoped>

</style>
