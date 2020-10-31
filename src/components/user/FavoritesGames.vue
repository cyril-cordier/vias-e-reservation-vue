<template>
    <div>
        <!-- toggle jeux favoris -->

        <div >
            <div class="rounded-lg text-light w-85 mx-auto p-10 bg-gray-300">
                <div class="w-full inline-block p-auto m-auto">
                    <div class="mb-6 p-3 bg-orange-300 shadow rounded text-gray-700">
                        <h3 class="text-center font-bold text-xl">Mes jeux favoris</h3>
                    </div>
                    

                    <div v-for="game in favoritesOfUser" :key="game._id" class="max-w-md w-full lg:max-w-full lg:flex mb-5">

                        <img :src="game.images[0]"
                            class="h-auto lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                            alt="game image" />
                        <div
                            class="bg-white w-full rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-center leading-normal">
                            <div class="mb-8">
                                <div class="pl-6 pt-4 text-gray-900 font-bold text-xl mb-2">
                                    <router-link :to="'/jeux/'+game._id">{{ game.name }}</router-link>
                                </div>
                                <div class="pl-6 text-gray-700 text-base" v-html="game.description"></div>
                            </div>
                            <div class="pl-6 flex items-center">
                                <div class="text-sm">
                                    <p class="text-gray-900 leading-none">
                                        Catégorie : {{ game.category }}
                                    </p>
                                    <p class="text-gray-600">Etat : {{ game.status }}</p>
                                </div>
                            </div>
                            
                            <div class="row">
                                <router-link :to="'/jeux/'+game._id"  class="px-3 py-1 m-5 w-2.5/6 font-semibold transform hover:scale-105 bg-gray-200 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-gray-700 hover:inner-shadow text-gray-800 hover:text-gray-100 rounded text-lg focus:outline-none shadow">Details</router-link>
                                <button
                                    class="px-3 py-1 m-5 w-2.5/6 font-semibold transform hover:scale-105 bg-gray-200 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-gray-700 hover:inner-shadow text-gray-800 hover:text-gray-100 rounded text-lg focus:outline-none shadow"
                                    type="submit" @click="deleteFavButton(game._id)">
                                    <span>Supprimer</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  
</template>

<script>
import { mapActions, mapGetters } from "vuex";


export default {
  name: "Favoris",


  data() {
    return {
      user: "",

    

      // GAME
      name: "",
      categoryId: "",
      description: "",
      inventory: "",
      images: "",
      minAge: "",
      profilUserId: "",
      available: "",
      nbPlayers: "",
      status: "",
      gameToEdit:"",
    };
  },
  methods: {
    ...mapActions([
      "fetchUserMe",
      "fetchAllFavorites",
      "deleteFavorite", 
    ]),
    
    // CREATION D'UN JEU PAR LE USER

    // CREATION D'UN JEU
    
  deleteFavButton(id) {
    this.fetchAllFavorites();
      this.getAllFavorites.favorites.forEach(element => { 
        if(element.userId._id == this.getUserMe.profile._id && element.gameId._id == id){
          this.deleteFavorite(element._id);
        }
      });
      
      this.fetchAllFavorites();

    },
    
    
  },
  
  computed: {
    ...mapGetters([
      "getUserMe",
      "getAllGames",
      "getAllFavorites"
    ]),
    favoritesOfUser() {
      let elem=[];
      this.getAllFavorites.favorites.forEach(element => { 
        if(element.userId._id == this.getUserMe.profile._id){
         
          elem.push(element.gameId);
        }
      }); 
        
      return elem;   
    },
    

    },
  
  created() {

    this.fetchUserMe();
    this.fetchAllFavorites();
    this.profilUserId = this.getUserMe.profile._id;
    
    
  },
};
</script>

<style>

</style>