<template>
  <div>
    <!-- Button trigger modal -->
    <!-- modal create-appart -->
     <h6 class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-8 m-2 rounded w-56 text-center">Fiche Appartement</h6>

    <div class="flex flex-col m-2 shadow-lg">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-blue-200"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 border-b border-blue-200 bg-blue-50 text-xs leading-4 font-medium text-blue-500 uppercase tracking-wider text-center"
                >
                 Appartement
                </th>
                <th
                  class="px-6 py-3 border-b border-blue-200 bg-blue-50 text-xs leading-4 font-medium text-blue-500 uppercase tracking-wider text-center"
                >
                  Disponibilité
                </th>
                
                <th class="px-6 py-3 border-b border-blue-200 bg-blue-50"></th>
              </tr>
            </thead>
            <tbody class="bg-white" >
              <tr v-for="appart in getAllApparts.apparts" :key="appart._id">
                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-blue-200"
                >
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        :src="appart.images[0]"
                        alt=""
                        class="h-10 w-10 rounded-full"
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-blue-900">
                        {{ appart.name }}
                      </div>
                    </div>
                  </div>
                </td>
                
                

                <td
                  v-if="appart.available == true"
                  class="px-6 py-4 whitespace-no-wrap border-b border-blue-200 text-center"
                >
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >Disponible</span
                  >
                </td>

                <td
                  v-if="appart.available == false"
                  class="px-6 py-4 whitespace-no-wrap border-b border-blue-200 text-center"
                >
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
                    >Indisponible</span
                  >
                </td>
                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-blue-200"
                >
                  <div class="text-sm leading-5 text-blue-900 text-center">
                    {{ appart.userId.username }}
                  </div>
                </td>
                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-blue-200"
                >
                  <div
                    class="text-sm leading-5 text-blue-900 text-center"
                  ></div>
                </td>

                <td
                  class="px-1 py-4 whitespace-no-wrap border-b border-blue-200 text-sm leading-5 font-medium"
                >
                  <button
                    class="bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-2 rounded-full text-center"
                    @click="toggleModal = !toggleModal, appartToEdit = appart "
                  >

                    Modification

                  </button>
                  <div
                    class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
                    v-if="toggleModal"
                  >
                    <div class="relative mx-auto w-auto max-w-2xl">
                      <div
                        class="bg-blue-500 w-full rounded shadow-2xl flex flex-col overflow-y-auto"
                      >
                        <div class="text-2xl font-bold text-center mt-2 m-1">

                          Modifier un jeu

                          <button
                            class="rounded bg-red-500 text-white text-center px-2 py-1 text-sm absolute top-0 right-0 m-2"
                            @click="toggleModal = false"
                          >
                            X
                          </button>
                        </div>
  <form
            @submit.prevent="modifyAppartSubmit"
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 m-2"
          >
            <!-- MESSAGE APPART SUCCESS  -->
            <div
              v-if="modifySuccess  != null"
              class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
              role="alert"
            >
              <div class="flex">
                <div class="py-1">
                  <svg
                    class="fill-current h-6 w-6 text-teal-500 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="font-bold">Jeu Modifié avec succès</p>
                </div>
              </div>
            </div>

            <!-- MESSAGE APPART ERROR  -->

            <div v-if="modifyError != null" role="alert">
              <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                Error
              </div>
              <div
                class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
              >
                <p>Merci de verifier les informations</p>
              </div>
            </div>
            <div class="mb-1 mt-3">
              <label
                class="block text-blue-700 text-sm font-bold mb-2"
                for="nomdujeu"
              >
                Nom du jeu
              </label>
              <input
                class="shadow appearance-none border rounded w-1/3 py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nom du jeu"
                type="text"
                placeholder="nom du jeu"
                v-model="appartToEdit.name"
                required
              />
            </div>
            <div class="mb-1">
              <label
                class="block text-blue-700 text-sm font-bold mb-2"
                for="category"
              >
                Catégorie
              </label>
              <select
                  v-model="appartToEdit.categoryId"
                  required
                  class="bg-white block shadow appearance-none w-full border border-blue-200 text-blue-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="grid-state"
                  
                >
                  <option :value="null" disabled>Selectionner votre catégorie</option>
                  <option v-for="category in getAllCategories.Category" :key="category._id">
                    {{category.name}}
                  </option>
              
                </select>
            </div>
            <div class="mb-1">
              <label
                class="block text-blue-700 text-sm font-bold mb-2"
                for="description"
              >
                Description
              </label>
              <vue-editor
                class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                placeholder="description"
                v-model="appartToEdit.description"
                 required></vue-editor>
            </div>
            <div class="mb-1">
              <label
                class="block text-blue-700 text-sm font-bold mb-2"
                for="inventaire"
              >
                Inventaire
              </label>
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                id="inventaire"
                type="text"
                required
                placeholder="inventaire"
                v-model="appartToEdit.inventory"
              />
            </div>
            <div class="mb-1">
              <label
                class="block text-blue-700 text-sm font-bold mb-2"
                for="inventaire"
              >
                Status
              </label>
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                id="status"
                type="text"
                placeholder="status"
                required
                v-model="appartToEdit.status"
              />
            </div>
            <div class="flex flex-row">
              <div class="mb-1">
                <label
                  class="block text-blue-700 text-sm font-bold mb-2"
                  for="number"
                >
                  Nbr de joueurs
                </label>
                <input
                  class="shadow appearance-none border rounded w-2/3 mr-4 py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="number"
                  type="text"
                  placeholder="nombre de joueur"
                  required
                  v-model="appartToEdit.nbPlayers"
                />
              </div>
              <div class="mb-1">
                <label
                  class="block text-blue-700 text-sm font-bold mb-2"
                  for="streetname"
                >
                  Age minimum
                </label>
                <select
                        v-model="appartToEdit.minAge"
                        required
                        class="block appearance-none w-full bg-blue-200 border border-blue-200 text-blue-700  py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                        id="age"
                    >
                        <option value="null" disabled>Age minimum</option>
                        <option value="-5">-5 ans</option>
                        <option value="+5">+5 ans</option>
                        <option value="+12">+12 ans</option>
                    </select>
              </div>
            </div>
            <div class="flex flex-row">
              
              <div class="mb-1">
                <label
                  class="block text-blue-700 text-sm font-bold mb-2"
                  for="zip"
                >
                 Disponible
                </label>
                <select
                  v-model="appartToEdit.available"
                  required
                  class="block appearance-none w-full bg-blue-200 border border-blue-200 text-blue-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="grid-state"
                >
                  <option>Choisir une option</option>
                  <option value="true">Disponible</option>
                  <option value="false">Indisponible</option>
                </select>
              </div>
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
                  <div
                    v-if="toggleModal"
                    class="absolute inset-0 z-40 opacity-25 bg-black"
                  ></div>
                </td>
                <td
                  class="px-6 py-4 whitespace-no-wrap text-right border-b border-blue-200 text-sm leading-5 font-medium"
                >
                  <div
                    class="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-1 rounded-full text-center w-20"
                    style="cursor: pointer"
                    @click="deleteAppartButton(appart._id)"
                  >
                    Supprimer
                  </div>
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

import {
    VueEditor
  } from "vue2-editor";

  export default {
    components: {
      VueEditor,
    },
  data() {
    return {
      Modal: false,
      toggleModal: false,
      editModal: false,
      appartToEdit: "",
      name: "",
      categoryId: "",
      description: "",
      inventory: "",
      images: "",
      minAge: "",
      userId: "",
      available: "",
      nbPlayers: "",
      status: "",
      createModal: false,
      cat:null,
      // ERROR 

      createSuccess:null,
      createError:null,
      modifySuccess:null,
      modifyError:null,

    };
  },
  methods: {
    ...mapActions([
      "fetchAllApparts",
      "deleteAppart",
      "createAppart",
      "modifyAppart",
      "fetchUserMe",
      "fetchAppartById",
      "fetchAllCategories"
    ]),
    deleteAppartButton(id) {
      this.fetchAllApparts();
      this.deleteAppart(id);
      this.fetchAllApparts();
    },

    // CREATION D'UN JEU
    createAppartSubmit() {
      var obj = {
        name: this.name,
        categoryId: this.categoryId,
        description: this.description,
        inventory: this.inventory,
        images: this.images,
        nbPlayers: this.nbPlayers,
        minAge: this.minAge,
        userId: this.getUserMe.profile._id,
        available: this.available,
        status: this.status,
      };

      this.createAppart(obj);
      console.log(obj);
      this.fetchAllApparts();

      if (this.getCreateAppartResponse.success) {
        this.createSuccess = this.getCreateAppartResponse.success;
        setTimeout(function () {
          window.location.href = "/admin";
        }, 2000);
      }
    },
    modifyAppartSubmit() {
      var obj = {
        name: this.appartToEdit.name,
        categoryId: this.appartToEdit.categoryId,
        description: this.appartToEdit.description,
        inventory: this.appartToEdit.inventory,
        images: this.appartToEdit.images,
        nbPlayers: this.appartToEdit.nbPlayers,
        minAge: this.appartToEdit.minAge,
        userId: this.appartToEdit.userId,
        available: this.appartToEdit.available,
        status: this.appartToEdit.status,
        id: this.appartToEdit._id
      };

      this.modifyAppart(obj);
      this.fetchAllApparts();

      if (this.getModifyAppartResponse.success) {
        
        this.modifySuccess = this.getModifyAppartResponse.success;
        setTimeout(function () {
          window.location.href = "/admin";
        }, 2000);
      }
    },
  },


  created() {
    this.fetchAllApparts();
    this.fetchUserMe();
    this.fetchAllCategories()
    // this.fetchAppartById(this.appart._id);
    this.createSuccess = null;
    this.modifySuccess = null;
    this.createError = null;
    this.modifyError = null;
  },
  computed: mapGetters([
    "getAllApparts",
    "getUserMe",
    "getAppartById",
    "getCreateAppartResponse",
    "getModifyAppartResponse",
    "getAllCategories",
  ]),
};
</script>

<style scoped>
</style>