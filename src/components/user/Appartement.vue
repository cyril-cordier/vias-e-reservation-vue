<template>
    <div>
        <!-- toggle Appartement -->

        <div >
            <div class="rounded-lg text-light w-85 mx-auto p-10 bg-blue-300 row">
                <div class="w-full inline-block p-auto m-auto">
                    <div class="mb-6 p-3 bg-orange-300 shadow rounded text-blue-700">
                        <h3 class="text-center font-bold text-xl">Mon Appartement</h3>
                    </div>
                    <button
                        class="px-5 py-1 m-10 font-semibold transform hover:scale-105 bg-blue-200 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-blue-700 hover:inner-shadow text-blue-800 hover:text-blue-100 rounded text-lg focus:outline-none shadow"
                        type="submit" 
                        v-if="getUserMe.profile.who_is == 'Administrateur'"
                        @click="AddAppart_modal = !AddAppart_modal">
                        <span>+ Ajouter un appartement</span>
                    </button>

                    <div v-for="appart in getAllApparts.apparts" :key="appart._id" class="max-w-sm w-full   lg:max-w-full lg:flex mb-5">

                        <img :src="appart.images[0]"
                            class="h-auto lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                            alt="appart image" />
                        <div
                        class="p-5 bg-white w-full rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-center leading-normal">                            <div class="mb-8">
                                <div class="pl-6 text-blue-900 font-bold text-xl mb-2">
                                    {{ appart.name }}
                                </div>
                                <div class=" pl-6 text-blue-700 text-base" v-html="appart.description"></div>
                            </div>
                            <div class="flex items-center">
                                <div class="text-sm">
                                    <!-- <p class="pl-6 text-blue-900 leading-none">
                                        Catégorie
                                    </p> -->
                                    <p 
                                    class=" m-5 px-2 inline-flex text-l leading-5 font-semibold rounded-full bg-green-300 text-green-800 "
                                    v-if= "appart.available == true">Disponible pour la réservation</p>
                                    <p 
                                    class=" m-5 px-2 inline-flex text-l leading-5 font-semibold rounded-full bg-red-300 text-red-800 "
                                    v-if= "appart.available != true">Non disponible à la réservation</p>
                                </div>
                            </div>
                            <div class="row">
                                <button
                                    class="px-3 py-1 m-5  font-semibold transform hover:scale-105 bg-blue-200 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-blue-700 hover:inner-shadow text-blue-800 hover:text-blue-100 rounded text-lg focus:outline-none shadow"
                                    type="submit" @click="EditAppart_modal = !EditAppart_modal, appartToEdit = appart">
                                    <span>Modifier</span>
                                </button>
                                <button
                                    class="px-3 py-1 m-5  font-semibold transform hover:scale-105 bg-gray-200 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-gray-700 hover:inner-shadow text-gray-800 hover:text-gray-100 rounded text-lg focus:outline-none shadow"
                                    v-if="getUserMe.profile.who_is == 'Administrateur'"
                                    type="submit" @click="deleteAppartButton(appart._id)">
                                    <span>Supprimer</span>
                                </button>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <!-- Modal Ajout d'un appart -->
        <div class="fixed overflow-x-hidden inset-0 flex justify-center items-center z-50 " v-if="AddAppart_modal">
            <div class="relative mx-auto w-auto max-w-2xl h-full overflow-auto">
                <div class="bg-blue-200 w-full rounded shadow-2xl flex flex-col ">
                    <div class="text-2xl font-bold text-center pt-3">
                        Ajouter un appartement
                        <button class="rounded bg-red-500 text-white font-bold w-10 text-center text-sm absolute top-0 right-0 mt-4 mr-3"
                            @click="AddAppart_modal = false">
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
                                    <p class="font-bold">Appartement créé avec succès</p>
                                </div>
                            </div>
                        </div>

                        <!-- MESSAGE APPART ERROR  -->

                        <div v-if="createError != null" role="alert">
                            <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                                Erreur
                            </div>
                            <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                                <p>Merci de verifier les informations</p>
                            </div>
                        </div>


                    <form @submit.prevent="createAppartSubmit" class="bg-white shadow-md rounded px-8 pt-1 pb-4 m-2 ">
                  
                        <div class="mb-1">
                            <label class="block text-blue-700 text-sm font-bold mb-2" for="nomdujeu">
                                Nom de l'appartement
                            </label>
                            <input v-model="name"
                                class="shadow appearance-none border rounded w-2/3 py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="nom du jeu" type="text" required placeholder="nom de l'appartement" />
                        </div>
                        
                        <div class="mb-1">
                            <label class="block text-blue-700 text-sm font-bold mb-1" for="description">
                                Description
                            </label>
                            <vue-editor v-model="description"
                                class="shadow appearance-none border rounded w-full py-1 px-2 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="description" type="text" required placeholder="description"></vue-editor>
                        </div>
                        
                <div class="mb-1">
                    <label
                    class="block text-blue-700 text-sm font-bold mb-1"
                    for="inventaire"
                    >
                    Inventaire
                    </label>
                    <textarea
                    v-model="inventory"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="inventaire"
                    type="text"
                    placeholder="Inventaire"
                    />
                </div>
                <div class="flex flex-row">
                    <div class="mb-1">
                    <label
                        class="block text-blue-700 text-sm font-bold mb-1"
                        for="number"
                    >
                        Nbr de couchages
                    </label>
                    <input
                        v-model="nbPlayers"
                        class="shadow appearance-none border rounded w-2/3 mr-4 py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="number"
                        type="text"
                        required
                        placeholder="Nombre de couchages"
                    />
                    </div>
                    
                </div>
                <div class="flex flex-row">
                    <div class="mb-1">
                    <label
                        class="block text-blue-700 text-sm font-bold mb-1"
                        for="zip"
                    >
                        Images
                    </label>
                            <div 
                                @click="openUploadModal" 
                                class="px-3 py-1 w-4/6 text-sm font-semibold transform hover:scale-105 bg-blue-200 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-blue-700 hover:inner-shadow text-blue-800 hover:text-white rounded focus:outline-none shadow">
                                Ajouter
                            </div>
                    <input
                        v-model="url"
                        class="shadow invisible appearance-none border rounded w-1/6 py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Photo"
                        type="text"
                        required
                        placeholder="Photo"
                    />
                    </div>
                    <div class="mb-1">
                    <label
                        class="block text-blue-700 text-sm font-bold mb-1"
                        for="zip"
                    >
                        Disponibilité
                    </label>
                    <select
                        v-model="available"
                        required
                        class="block appearance-none w-full bg-blue-200 border border-blue-200 text-blue-700 mt-1 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
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
            v-if="AddAppart_modal"
            class="absolute inset-0 z-40 opacity-25 bg-black"
        ></div>

        <!-- Modal Edit d'un appart -->
        <div
            class="fixed overflow-x-hidden inset-0 flex justify-center items-center z-50"
            v-if="EditAppart_modal"
        >
            <div class="relative mx-auto w-auto h-full max-w-2xl">
            <div
                class="bg-blue-300 w-full rounded shadow-2xl flex flex-col overflow-y-auto"
            >
                <div class="text-2xl font-bold text-center mt-2">
                Modifier un appartement
                <button
                    class="rounded bg-red-500 text-white font-bold w-10 text-center text-sm absolute top-0 right-0 mt-4 mr-4"
                    @click="EditAppart_modal = false"
                >
                    X
                </button>
                </div>

                <form @submit.prevent="editAppartSubmit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 m-2">
                <!-- MESSAGE APPART SUCCESS  -->
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
                    <p class="font-bold">Informations modifiées avec succès</p>
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
                <div class="mb-1">
                    <label
                    class="block text-blue-700 text-sm font-bold mb-1"
                    for="nomdujeu"
                    >
                    Nom de l'appartement
                    </label>
                    <input
                    class="shadow appearance-none border rounded w-2/3 py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nom du jeu"
                    type="text"
                    placeholder="nom du jeu"
                    required
                    v-model="appartToEdit.name"
                    />
                </div>
                
                <div class="mb-1">
                    <label
                    class="block text-blue-700 text-sm font-bold mb-1"
                    for="description"
                    >
                    Description
                    </label>
                    <vue-editor
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    type="text"
                    placeholder="description"
                    required
                    v-model="appartToEdit.description"

                    ></vue-editor>
                </div>
                        
                <div class="mb-1">
                    <label
                    class="block text-blue-700 text-sm font-bold mb-1"
                    for="inventaire"
                    >
                    Inventaire
                    </label>
                    <textarea
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="inventaire"
                    type="text"
                    placeholder="Inventaire"
                    v-model="appartToEdit.inventory"

                    />
                </div>
                <div class="flex flex-row">
                    <div class="mb-1">
                    <label
                        class="block text-blue-700 text-sm font-bold mb-1"
                        for="number"
                    >
                        Nombre de couchages
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-2/3 mr-4 py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="number"
                        type="text"
                        placeholder="Nombre de couchages"
                        required
                    v-model="appartToEdit.nbPlayers"

                    />
                    </div>
                    
                </div>
                <div class="flex flex-row">
                    <div class="mb-1">
                    <label
                        class="block text-blue-700 text-sm font-bold mb-1"
                        for="images"
                    >
                        Images
                    </label>
                    <div 
                        @click="openUploadModal" 
                        class="px-3 py-1 m-2 w-2.5/6 text- sm font-semibold transform hover:scale-105 bg-blue-200 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-blue-700 hover:inner-shadow text-blue-800 hover:text-white rounded text-lg focus:outline-none shadow">
                        Ajouter
                    </div>
                    <input
                        class="shadow invisible appearance-none border rounded w-2/3 py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="images"
                        type="text"
                        placeholder="Photo"

                    />
                    </div>
                    <div class="mb-1">
                    <label
                        class="block text-blue-700 text-sm font-bold mb-1"
                        for="grid-state"
                    >
                        Disponibilité
                    </label>
                    <select
                        v-model="appartToEdit.available"
                        required
                        class="block appearance-none w-full bg-blue-200 border border-blue-200 text-blue-700  py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                        id="grid-state"
                    >
                        <option>Choisir une option</option>
                        <option value="true">Disponible pour la réservation</option>
                        <option value="false">Non disponible</option>
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
            v-if="EditAppart_modal"
            class="absolute inset-0 z-40 opacity-25 bg-black"
        ></div>
    </div>
  
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { VueEditor } from "vue2-editor";
export default {
  name: "appartement",
  components: {
    VueEditor,
  },
  data() {
    return {
      user: "",
      AddAppart_modal: false,
      EditAppart_modal: false,
    
      // APPART
      name: "",
      description: "",
      inventory: "",
      images: "",
      url:[],
      userId: "",
      available: "",
      nbPlayers: "",
      appartToEdit:"",
     
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
      "fetchAllApparts",
      "createAppart",
      "deleteAppart", 
      "modifyAppart",
    ]),
    
    // CREATION D'UN JEU PAR LE USER
    // CREATION D'UN JEU
    createAppartSubmit() {
      var obj = {
        name: this.name,
        description: this.description,
        inventory: this.inventory,
        images: this.url,
        nbPlayers: this.nbPlayers,
        userId: this.userId,
        available: this.available,
      };

      console.log(obj);
      this.createAppart(obj);
      this.fetchAllApparts();
      if (this.getCreateAppartResponse.success) {
          this.createSuccess = this.getCreateAppartResponse.success;
          this.createError = null;
         setTimeout(function () {
          location.reload()
        }, 1200); 
      }
      console.log(this.getCreateAppartResponse);
    },
  deleteAppartButton(id) {
      this.fetchAllApparts();
      this.deleteAppart(id);
      
      if (this.getDeleteAppartResponse.success) {
          this.deleteSuccess = this.getDeleteAppartResponse.success;
         
      }
      this.fetchAllApparts();
    },
    editAppartSubmit() {
    var imagesEdited = "";
        if(this.url.length == 0){
            imagesEdited = this.appartToEdit.images;
        }else{
            imagesEdited = this.url;
        }

      var obj = {
        name: this.appartToEdit.name,
        description: this.appartToEdit.description,
        inventory: this.appartToEdit.inventory,
        images: imagesEdited,
        nbPlayers: this.appartToEdit.nbPlayers,
        userId: this.appartToEdit.userId,
        available: this.appartToEdit.available,
        id: this.appartToEdit._id
      };
      console.log(obj);
      this.modifyAppart(obj);
      this.fetchAllApparts();
      if (this.getModifyAppartResponse.success) {
          this.modifySuccess = this.getModifyAppartResponse.success;
          this.modifyError = null;
         setTimeout(function () {
          window.location.href = "/profile";
        }, 1000); 
      }
    },
    openUploadModal () { 
               
        window.cloudinary.openUploadWidget(
        { cloud_name: 'dcp7bq2a1',
          upload_preset: 'wwxwqq4n'
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log('Done uploading...: ', result.info);
            this.url.push(result.info.secure_url);          
            }
        }).open();
      }    
    
  },
  
  computed: {
    ...mapGetters([
      "getUserMe",
      "getAllApparts",
      "getCreateAppartResponse",
      "getModifyAppartResponse",
      "getDeleteAppartResponse",
    ]),
    appartOfUser() {
      return this.getAllApparts.apparts.filter((appart) =>
        appart.userId._id
          .toLowerCase()
          .includes(this.getUserMe.profile._id.toLowerCase())
      );
    },
    
    },
  
  created() {
    this.fetchUserMe();
    this.fetchAllApparts();
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