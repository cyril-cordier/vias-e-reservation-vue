<template>
    <div>
        <!-- toggle ludothèque -->

        <div >
            <div class="rounded-lg text-light w-85 mx-auto p-10 bg-gray-300 row">
                <div class="w-full inline-block p-auto m-auto">
                    <div class="mb-6 p-3 bg-orange-300 shadow rounded text-gray-700">
                        <h3 class="text-center font-bold text-xl">Ma Ludothèque</h3>
                    </div>
                    <div v-if="deleteSuccess != null"
                            class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                            role="alert">
                            <div class="flex">
                                <div class="py-1">
                                    <svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="font-bold">Jeu supprimé</p>
                                </div>
                            </div>
                        </div>
                    <button
                        class="px-5 py-1 m-10 font-semibold transform hover:scale-105 bg-gray-200 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-gray-700 hover:inner-shadow text-gray-800 hover:text-gray-100 rounded text-lg focus:outline-none shadow"
                        type="submit" @click="AddGame_modal = !AddGame_modal">
                        <span>+ Ajouter un jeu</span>
                    </button>

                    <div v-for="game in gameOfUser" :key="game._id" class="max-w-sm w-full   lg:max-w-full lg:flex mb-5">

                        <img :src="game.images[0]"
                            class="h-auto lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                            alt="game image" />
                        <div
                        class="p-5 bg-white w-full rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-center leading-normal">                            <div class="mb-8">
                                <div class="pl-6 text-gray-900 font-bold text-xl mb-2">
                                    {{ game.name }}
                                </div>
                                <div class=" pl-6 text-gray-700 text-base" v-html="game.description"></div>
                            </div>
                            <div class="flex items-center">
                                <div class="text-sm">
                                    <p class="pl-6 text-gray-900 leading-none">
                                        Catégorie : {{ game.categoryId }}
                                    </p>
                                    <p class=" pl-6 text-gray-600">Etat : {{ game.status }}</p>
                                </div>
                            </div>
                            <div class="row">
                                <button
                                    class="px-3 py-1 m-5  font-semibold transform hover:scale-105 bg-gray-200 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-gray-700 hover:inner-shadow text-gray-800 hover:text-gray-100 rounded text-lg focus:outline-none shadow"
                                    type="submit" @click="EditGame_modal = !EditGame_modal, gameToEdit = game">
                                    <span>Modifier</span>
                                </button>
                                <button
                                    class="px-3 py-1 m-5  font-semibold transform hover:scale-105 bg-gray-200 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-gray-700 hover:inner-shadow text-gray-800 hover:text-gray-100 rounded text-lg focus:outline-none shadow"
                                    type="submit" @click="deleteGameButton(game._id)">
                                    <span>Supprimer</span>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <!-- Modal Ajout d'un jeu -->
        <div class="fixed overflow-x-hidden inset-0 flex justify-center items-center z-50 " v-if="AddGame_modal">
            <div class="relative mx-auto w-auto max-w-2xl h-full overflow-auto">
                <div class="bg-gray-200 w-full rounded shadow-2xl flex flex-col ">
                    <div class="text-2xl font-bold text-center pt-3">
                        Ajouter un jeu
                        <button class="rounded bg-red-500 text-white font-bold w-10 text-center text-sm absolute top-0 right-0 mt-4 mr-3"
                            @click="AddGame_modal = false">
                           X
                        </button>
                    </div>


                          <!-- MESSAGE CREATE SUCCESS  -->
                        <div v-if="createSuccess != null"
                            class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                            role="alert">
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
                                Erreur
                            </div>
                            <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                                <p>Merci de verifier les informations</p>
                            </div>
                        </div>


                    <form @submit.prevent="createGameSubmit" class="bg-white shadow-md rounded px-8 pt-1 pb-4 m-2 ">
                  
                        <div class="mb-1">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="nomdujeu">
                                Nom du jeu
                            </label>
                            <input v-model="name"
                                class="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="nom du jeu" type="text" required placeholder="nom du jeu" />
                        </div>
                        <div class="mb-1">
                            <label class="block text-gray-700 bg-white text-sm font-bold mb-2" for="category">
                                Catégorie
                            </label>
                            <select v-model="categoryId"
                            required
                                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        
                                
                                id="category">
                                <option :value="null" disabled>Sélectionner la catégorie</option>
                                <option v-for="category in getAllCategories.Category" :value="category.name" :key="category._id">
                                    {{category.name}}
                                    </option>
                                
                            </select>

                        </div>
                        <div class="mb-1">
                            <label class="block text-gray-700 text-sm font-bold mb-1" for="description">
                                Description
                            </label>
                            <vue-editor v-model="description"
                                class="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="description" type="text" required placeholder="description"></vue-editor>
                        </div>
                        <div class="mb-1">
                            <label class="block text-gray-700 text-sm font-bold mb-1" for="inventaire">
                                Etat
                            </label>
                            <textarea
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="status" type="text" 
                                placeholder="Décrivez l'état général du jeu (boite...) " 
                                required
                                v-model="status" />
                            </div>
                <div class="mb-1">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-1"
                    for="inventaire"
                    >
                    Inventaire
                    </label>
                    <textarea
                    v-model="inventory"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="inventaire"
                    type="text"
                    required
                    placeholder="inventaire"
                    />
                </div>
                <div class="flex flex-row">
                    <div class="mb-1">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-1"
                        for="number"
                    >
                        Nbr de joueurs
                    </label>
                    <input
                        v-model="nbPlayers"
                        class="shadow appearance-none border rounded w-2/3 mr-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="number"
                        type="text"
                        required
                        placeholder="nombre de joueur"
                    />
                    </div>
                    <div class="mb-1">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-1"
                        for="age"
                    >
                        Age minimum
                    </label>
                    <select
                        v-model="minAge"
                        required
                        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 mt-1 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                        class="block text-gray-700 text-sm font-bold mb-1"
                        for="zip"
                    >
                        Images
                    </label>
                            <div 
                                @click="openUploadModal" 
                                class="px-3 py-1 w-4/6 text-sm font-semibold transform hover:scale-105 bg-gray-200 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-gray-700 hover:inner-shadow text-gray-800 hover:text-white rounded focus:outline-none shadow">
                                Ajouter
                            </div>
                    <input
                        v-model="url"
                        class="shadow invisible appearance-none border rounded w-1/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Photo"
                        type="text"
                        required
                        placeholder="Photo"
                    />
                    </div>
                    <div class="mb-1">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-1"
                        for="zip"
                    >
                        Disponibilité
                    </label>
                    <select
                        v-model="available"
                        required
                        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 mt-1 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                    >
                        <option value="null" disabled>Choisir une option</option>
                        <option value="true">Disponible</option>
                        <option value="false">Indisponible</option>
                    </select>
                    </div>
                </div>

                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 mt-1 w-full rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    
                >
                    Créer
                </button>
                </form>
            </div>
            </div>
        </div>
        <div
            v-if="AddGame_modal"
            class="absolute inset-0 z-40 opacity-25 bg-black"
        ></div>

        <!-- Modal Edit d'un jeu -->
        <div
            class="fixed overflow-x-hidden inset-0 flex justify-center items-center z-50"
            v-if="EditGame_modal"
        >
            <div class="relative mx-auto w-auto h-full max-w-2xl">
            <div
                class="bg-gray-300 w-full rounded shadow-2xl flex flex-col overflow-y-auto"
            >
                <div class="text-2xl font-bold text-center mt-2">
                Modifier un jeu
                <button
                    class="rounded bg-red-500 text-white font-bold w-10 text-center text-sm absolute top-0 right-0 mt-4 mr-4"
                    @click="EditGame_modal = false"
                >
                    X
                </button>
                </div>

                <form @submit.prevent="editGameSubmit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 m-2">
                <!-- MESSAGE GAME SUCCESS  -->
                <div
                v-if="modifySuccess != null"
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
                <div class="mb-1">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-1"
                    for="nomdujeu"
                    >
                    Nom du jeu
                    </label>
                    <input
                    class="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nom du jeu"
                    type="text"
                    placeholder="nom du jeu"
                    required
                    v-model="gameToEdit.name"
                    />
                </div>
                <div class="mb-1">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-1"
                    for="category"
                
                    >
                    Catégorie
                    </label>


                    <select v-model="gameToEdit.categoryId"
                    required
                        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                
                        
                        id="category">
                        <option :value="null" disabled>Sélectionner la catégorie</option>
                        <option v-for="category in getAllCategories.Category" :key="category._id">
                            {{category.name}}
                            </option>
                        
                    </select>

                    
                </div>
                <div class="mb-1">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-1"
                    for="description"
                    >
                    Description
                    </label>
                    <vue-editor
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    type="text"
                    placeholder="description"
                    required
                    v-model="gameToEdit.description"

                    ></vue-editor>
                </div>
                        <div class="mb-1">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-1"
                    for="inventaire"
                    >
                    Etat
                    </label>
                    <textarea
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="status"
                    type="text"
                    placeholder="Décrivez l'état du jeu: la boite, son contenu, le nombre de dés .... "
                    required
                    v-model="gameToEdit.status"
                    />
                </div>
                <div class="mb-1">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-1"
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
                    v-model="gameToEdit.inventory"

                    />
                </div>
                <div class="flex flex-row">
                    <div class="mb-1">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-1"
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
                        class="block text-gray-700 text-sm font-bold mb-1"
                        for="age"
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
                        class="block text-gray-700 text-sm font-bold mb-1"
                        for="images"
                    >
                        Images
                    </label>
                    <div 
                        @click="openUploadModal" 
                        class="px-3 py-1 m-2 w-2.5/6 text- sm font-semibold transform hover:scale-105 bg-gray-200 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-gray-700 hover:inner-shadow text-gray-800 hover:text-white rounded text-lg focus:outline-none shadow">
                        Ajouter
                    </div>
                    <input
                        class="shadow invisible appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="images"
                        type="text"
                        placeholder="Photo"

                    />
                    </div>
                    <div class="mb-1">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-1"
                        for="grid-state"
                    >
                        available
                    </label>
                    <select
                        v-model="gameToEdit.available"
                        required
                        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700  py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                    >
                        <option>Choisir une option</option>
                        <option value="true">Disponible</option>
                        <option value="false">Indisponible</option>
                    </select>
                    </div>
                    
                </div>

                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                    type="submit"
        
                >
                    Enregistrer
                </button>
                </form>
            </div>
            </div>
        </div>
        <div
            v-if="EditGame_modal"
            class="absolute inset-0 z-40 opacity-25 bg-black"
        ></div>
    </div>
  
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { VueEditor } from "vue2-editor";
export default {
  name: "Ludotheque",
  components: {
    VueEditor,
  },
  data() {
    return {
      user: "",
      AddGame_modal: false,
      EditGame_modal: false,
    
      // GAME
      name: "",
      categoryId: "",
      description: "",
      inventory: "",
      images: "",
      url:[],
      minAge: "",
      userId: "",
      available: "",
      nbPlayers: "",
      status: "",
      gameToEdit:"",
     
      cat:null,
      createSuccess:null,
      createError:null,
      modifySuccess:null,
      modifyError:null,
      deleteSuccess:null,
    };
  },
  methods: {
    ...mapActions([
      "fetchUserMe",
      "fetchAllGames",
      "createGame",
      "deleteGame", 
      "modifyGame",
      "fetchAllCategories",
    ]),
    
    // CREATION D'UN JEU PAR LE USER
    // CREATION D'UN JEU
    createGameSubmit() {
      var obj = {
        name: this.name,
        categoryId: this.categoryId,
        description: this.description,
        inventory: this.inventory,
        images: this.url,
        nbPlayers: this.nbPlayers,
        minAge: this.minAge,
        userId: this.userId,
        available: this.available,
        status: this.status,
      };

      console.log(obj);
      this.createGame(obj);
      this.fetchAllGames();
      if (this.getCreateGameResponse.success) {
          this.createSuccess = this.getCreateGameResponse.success;
          this.createError = null;
         setTimeout(function () {
          location.reload()
        }, 1200); 
      }
      console.log(this.getCreateGameResponse);
    },
  deleteGameButton(id) {
      this.fetchAllGames();
      this.deleteGame(id);
      
      if (this.getDeleteGameResponse.success) {
          this.deleteSuccess = this.getDeleteGameResponse.success;
         
      }
      this.fetchAllGames();
    },
    editGameSubmit() {
    var imagesEdited = "";
        if(this.url.length == 0){
            imagesEdited = this.gameToEdit.images;
        }else{
            imagesEdited = this.url;
        }

      var obj = {
        name: this.gameToEdit.name,
        categoryId: this.gameToEdit.categoryId,
        description: this.gameToEdit.description,
        inventory: this.gameToEdit.inventory,
        images: imagesEdited,
        nbPlayers: this.gameToEdit.nbPlayers,
        minAge: this.gameToEdit.minAge,
        userId: this.gameToEdit.userId,
        available: this.gameToEdit.available,
        status: this.gameToEdit.status,
        id: this.gameToEdit._id
      };
      console.log(obj);
      this.modifyGame(obj);
      this.fetchAllGames();
      if (this.getModifyGameResponse.success) {
          this.modifySuccess = this.getModifyGameResponse.success;
          this.modifyError = null;
         setTimeout(function () {
          window.location.href = "/profile";
        }, 1000); 
      }
    },
    openUploadModal () { 
               
        window.cloudinary.openUploadWidget(
        { cloud_name: 'dqtz7kbwz',
          upload_preset: 'anobxi9c'
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log('Done uploading..: ', result.info);
            this.url.push(result.info.secure_url);          
            }
        }).open();
      }    
    
  },
  
  computed: {
    ...mapGetters([
      "getUserMe",
      "getAllGames",
      "getCreateGameResponse",
      "getModifyGameResponse",
      "getDeleteGameResponse",
      "getAllCategories"
    ]),
    gameOfUser() {
      return this.getAllGames.games.filter((game) =>
        game.userId._id
          .toLowerCase()
          .includes(this.getUserMe.profile._id.toLowerCase())
      );
    },
    
    },
  
  created() {
    this.fetchUserMe();
    this.fetchAllGames();
    this.fetchAllCategories();
    this.userId = this.getUserMe.profile._id;
    this.createSuccess = null;
    this.modifySuccess = null;
    this.createError = null;
    this.modifyError = null;
    this.deleteSuccess = null;
    
  },
   
};
</script>

<style>
</style>