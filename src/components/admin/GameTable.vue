<template>
  <div>
    <!-- Button trigger modal -->
    <!-- modal create-galme -->
     <h6 class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-8 m-2 rounded w-48 text-center">Fiches de jeux</h6>
    
    <div class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
      v-if="createModal">
      <div class="relative mx-auto w-auto max-w-2xl">
        <div class="bg-gray-500 w-full rounded shadow-2xl flex flex-col">
          <div class="text-2xl font-bold text-center mt-2">
            Création nouveau jeu
            <button class="rounded bg-red-500 text-white text-center px-2 py-1 text-sm absolute top-0 right-0 m-3"
              @click="createModal = false">
              X
            </button>
          </div>

          <form @submit.prevent="createGameSubmit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 m-2">
            <!-- MESSAGE CREATE SUCCESS  -->
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
                  <p class="font-bold">Jeu créé avec succès</p>
                </div>
              </div>
            </div>

            <!-- MESSAGE GAME ERROR  -->

            <div v-if="createError != null" role="alert">
              <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                Error
              </div>
              <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <p>Merci de verifier les informations</p>
              </div>
            </div>
            <div class="mb-2">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="nomdujeu">
                Nom du jeu
              </label>
              <input
                class="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nom du jeu" type="text" placeholder="nom du jeu" required v-model="name" />
            </div>
            <div class="mb-3">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="category">
                Catégorie
              </label>
              <select v-model="categoryId" required
                class="bg-white block shadow appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state">
                <option :value="null" disabled>Selectionner votre catégorie</option>
                <option v-for="category in getAllCategories.Category" :key="category._id">
                  {{category.name}}
                </option>

              </select>
            </div>
            <div class="mb-3">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
                Description
              </label>
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description" type="text" placeholder="description" required v-model="description" />
              </div>
            <div class="mb-3">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="inventaire"
              >
                Inventaire
              </label>
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="inventaire"
                type="text"
                placeholder="inventaire"
                required
                v-model="inventory"
              />
            </div>
            <div class="mb-3">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="inventaire"
              >
                Status
              </label>
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="status"
                type="text"
                placeholder="status"
                required
                v-model="status"
              />
            </div>
            <div class="flex flex-row">
              <div class="mb-3">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="number"
                >
                  Nbr de joueurs
                </label>
                <input
                  class="shadow appearance-none border rounded w-2/3 mr-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="number"
                  type="text"
                  placeholder="nombre de joueur"
                  required
                  v-model="nbPlayers"
                />
              </div>
              <div class="mb-3">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="streetname"
                >
                  Age minimum
                </label>
                <select
                        v-model="minAge"
                        required
                        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700  py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
              <div class="mb-3">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="zip"
                >
                  Image
                </label>
                <input
                  class="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Image"
                  type="text"
                  required
                  placeholder="Image"
                  v-model="images"
                />
              </div>
              <div class="mb-3">
                <label
                  class="block text-gray-700 text-sm font-bold mb-1"
                  for="zip"
                >
                  available
                </label>
                <select
                  v-model="available"
                  required
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
              Créer
            </button>
          </form>
        </div>
      </div>
    </div>
    <div
      v-if="createModal"
      class="absolute inset-0 z-40 opacity-25 bg-black"
    ></div>

    <div class="flex flex-col m-2 shadow-lg">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center"
                >
                 Nom de jeu
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center"
                >
                  Catégorie
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center"
                >
                  Fiche du jeu
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center"
                >
                  status
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center"
                >
                  Utilisateur
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody class="bg-white" >
              <tr v-for="game in getAllGames.games" :key="game._id">
                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        :src="game.images[0]"
                        alt=""
                        class="h-10 w-10 rounded-full"
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ game.name }}
                      </div>
                    </div>
                  </div>
                </td>
                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  <div class="text-sm leading-5 text-gray-900 text-center">
                    {{ game.category }}
                  </div>
                </td>
                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                
         <button 
      class=" hover:bg-orange-500 hover:text-white text-blue font-bold py-1 px-12 m-1 rounded text-xs"
      @click="Modal = !Modal ,gameToEdit = game"
    >Lire fiche jeu ...</button>
    <div 
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
      v-if="Modal"
    >
        <div class="relative mx-auto w-auto max-w-2xl overscroll-auto ">
       <div class="bg-white w-full rounded shadow-2xl flex flex-col ">
         <div class="text-2xl font-bold text-center m-2 border-2 border-orange-500 rounded"> Description
           <button class="rounded bg-red-600 hover:bg-red-400 text-white text-center px-2 py-1 text-sm absolute top-0 right-0 m-3" @click="Modal=false">X</button> 
         </div>
            <div class="flex flex-row m-3">
               <div class="border border-r-0 rounded mx-auto py-3 mr-4">  
                  <p class="m-2"><span class="font-bold">Nom du jeu: </span>{{ gameToEdit.name }}</p>
                  <div class="flex flex-row">
                  <div class="m-2"> <span class="font-bold">Nbre de joueurs:</span>  {{ gameToEdit.nbPlayers }}</div>
                  <div class="m-2 "><span class="font-bold">Age minimum: </span>{{ gameToEdit.minAge }}</div>
                </div>
                <p class="m-2"><span class="font-bold">Nom de l'utilisateur: </span>{{ gameToEdit.userId.username }}</p>
                <p class="m-2"><span class="font-bold">Disponibilité: </span>{{ gameToEdit.available }}</p>
            </div> 
              <div><img :src= gameToEdit.images alt="" class="w-full mx-auto rounded"></div>
          </div>
         <p class="m-2 font-bold">Inventaire du jeu:</p>
         <div v-html="gameToEdit.inventory" class="border-2 border-orange-500 bg-orange-100 p-3 overflow-auto sm:overflow-visible md:overflow-hidden lg:overflow-x-scroll xl:overflow-y-scroll leading-5 h-32 rounded-md whitespace-normal text-justify m-2">
          
         </div> 
         <p class="m-2 font-bold"> Description du jeu:</p>
         <div v-html="gameToEdit.description" class="border-2 border-orange-500 bg-orange-100 p-3 overflow-auto sm:overflow-visible md:overflow-hidden lg:overflow-x-scroll xl:overflow-y-scroll leading-5 h-32 rounded-md whitespace-normal text-justify m-2">
          
         </div>  
         </div>
      </div>
    </div>
    <div v-if="Modal" class= "absolute inset-0 z-40  opacity-25 bg-black"></div>
                </td>

                <td
                  v-if="game.available == true"
                  class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center"
                >
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >Disponible</span
                  >
                </td>

                <td
                  v-if="game.available == false"
                  class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center"
                >
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
                    >Indisponible</span
                  >
                </td>
                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  <div class="text-sm leading-5 text-gray-900 text-center">
                    {{ game.userId.username }}
                  </div>
                </td>
                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  <div
                    class="text-sm leading-5 text-gray-900 text-center"
                  ></div>
                </td>

                <td
                  class="px-1 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium"
                >
                  <button
                    class="bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-2 rounded-full text-center"
                    @click="toggleModal = !toggleModal, gameToEdit = game "
                  >

                    Modification

                  </button>
                  <div
                    class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
                    v-if="toggleModal"
                  >
                    <div class="relative mx-auto w-auto max-w-2xl">
                      <div
                        class="bg-gray-500 w-full rounded shadow-2xl flex flex-col overflow-y-auto"
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
            @submit.prevent="modifyGameSubmit"
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 m-2"
          >
            <!-- MESSAGE GAME SUCCESS  -->
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

            <!-- MESSAGE GAME ERROR  -->

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
                class="block text-gray-700 text-sm font-bold mb-2"
                for="nomdujeu"
              >
                Nom du jeu
              </label>
              <input
                class="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nom du jeu"
                type="text"
                placeholder="nom du jeu"
                v-model="gameToEdit.name"
                required
              />
            </div>
            <div class="mb-1">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="category"
              >
                Catégorie
              </label>
              <select
                  v-model="gameToEdit.categoryId"
                  required
                  class="bg-white block shadow appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                class="block text-gray-700 text-sm font-bold mb-2"
                for="description"
              >
                Description
              </label>
              <vue-editor
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                placeholder="description"
                v-model="gameToEdit.description"
                 required></vue-editor>
            </div>
            <div class="mb-1">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="inventaire"
              >
                Inventaire
              </label>
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="inventaire"
                type="text"
                required
                placeholder="inventaire"
                v-model="gameToEdit.inventory"
              />
            </div>
            <div class="mb-1">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="inventaire"
              >
                Status
              </label>
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="status"
                type="text"
                placeholder="status"
                required
                v-model="gameToEdit.status"
              />
            </div>
            <div class="flex flex-row">
              <div class="mb-1">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="number"
                >
                  Nbr de joueurs
                </label>
                <input
                  class="shadow appearance-none border rounded w-2/3 mr-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="number"
                  type="text"
                  placeholder="nombre de joueur"
                  required
                  v-model="gameToEdit.nbPlayers"
                />
              </div>
              <div class="mb-1">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="streetname"
                >
                  Age minimum
                </label>
                <select
                        v-model="gameToEdit.minAge"
                        required
                        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700  py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="zip"
                >
                 Disponible
                </label>
                <select
                  v-model="gameToEdit.available"
                  required
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                  class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                >
                  <div
                    class="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-1 rounded-full text-center w-20"
                    style="cursor: pointer"
                    @click="deleteGameButton(game._id)"
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
      gameToEdit: "",
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
      "fetchAllGames",
      "deleteGame",
      "createGame",
      "modifyGame",
      "fetchUserMe",
      "fetchGameById",
      "fetchAllCategories"
    ]),
    deleteGameButton(id) {
      this.fetchAllGames();
      this.deleteGame(id);
      this.fetchAllGames();
    },

    // CREATION D'UN JEU
    createGameSubmit() {
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

      this.createGame(obj);
      console.log(obj);
      this.fetchAllGames();

      if (this.getCreateGameResponse.success) {
        this.createSuccess = this.getCreateGameResponse.success;
        setTimeout(function () {
          window.location.href = "/admin";
        }, 2000);
      }
    },
    modifyGameSubmit() {
      var obj = {
        name: this.gameToEdit.name,
        categoryId: this.gameToEdit.categoryId,
        description: this.gameToEdit.description,
        inventory: this.gameToEdit.inventory,
        images: this.gameToEdit.images,
        nbPlayers: this.gameToEdit.nbPlayers,
        minAge: this.gameToEdit.minAge,
        userId: this.gameToEdit.userId,
        available: this.gameToEdit.available,
        status: this.gameToEdit.status,
        id: this.gameToEdit._id
      };

      this.modifyGame(obj);
      this.fetchAllGames();

      if (this.getModifyGameResponse.success) {
        
        this.modifySuccess = this.getModifyGameResponse.success;
        setTimeout(function () {
          window.location.href = "/admin";
        }, 2000);
      }
    },
  },


  created() {
    this.fetchAllGames();
    this.fetchUserMe();
    this.fetchAllCategories()
    // this.fetchGameById(this.game._id);
    this.createSuccess = null;
    this.modifySuccess = null;
    this.createError = null;
    this.modifyError = null;
  },
  computed: mapGetters([
    "getAllGames",
    "getUserMe",
    "getGameById",
    "getCreateGameResponse",
    "getModifyGameResponse",
    "getAllCategories",
  ]),
};
</script>

<style scoped>
</style>