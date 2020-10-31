<template>

                                         <!-- RESTE A FAIRE FILTRE ET AMELIORER CONTENU CARD  -->

  <div class="findGame">
    <Navbar />
    <div class=" flex ">
      <div class="bg-white flex flex-col items-center w-2/12"></div>

      <div class="bg-white flex flex-col w-8/12 my-5">
        <input
          type="text"
          name="search"
          v-model="search"
          placeholder="Recherchez un jeu..."
          autocomplete="off"
          class="shadow-md border w-11/12 h-15 px-3 py-2 mx-auto text-gray-700 focus:outline-none focus:border-orange-400 focus:shadow-inner hover:shadow-inner mb-3 rounded-full"
        />
           
           
            <!-- RECHERCHE PAR NOM DE JEU  -->
        <div class="flex justify-around my-6">
   
        

           <!-- RECHERCHE PAR CATEGORIES  -->

          <div class="dropdown relative">
           

              <select v-model="filteredByCategory" class="py-2 px-6 border-0 font-bold bg-orange-300 text-center focus:outline-none hover:inner-shadow shadow rounded">
                <option value="" >Toutes les Catégories</option>
                <option  v-for="category in getAllCategories.Category" :key="category._id" :value="category.name"
                  class="font-bold bg-orange-300"
                 
                  >{{category.name}}</option>
                
              </select>
              
            
          </div>

           <!-- RECHERCHE PAR AGE  -->

          <div class="dropdown relative">
           
              <select v-model="filteredByAge" class="py-2 px-6 border-0 font-bold bg-orange-300 text-center focus:outline-none hover:inner-shadow shadow rounded">
                <option value="" class="font-bold bg-orange-300">Tout âge</option>
                <option value="-5" class="font-bold bg-orange-300"> - 5 ans </option>
                <option value="+5" class="font-bold bg-orange-300"> + 5 ans </option>
                <option value="+12" class="font-bold bg-orange-300"> + 12 ans </option>
              </select>
          </div>
        </div>


       <div>                               <!-- CARD PRESENTATION D'UN JEU  -->
        <div
          class="w-full flex lg:flex my-5"
          v-for="games in filtredGames"
          :key="games._id"
        >
          <div
            class="h-48 lg:h-auto lg:w-4/12 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            :style="'background-image: url('+games.images[0]+');'"
            
          ></div>
          <div
            class="w-8/12 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between"
          >
            <div class="mb-8">
              <div class="text-gray-700 font-bold text-xl mb-2">
                {{ games.name }}
              </div>
              <div class="text-gray-700 text-base" v-html="games.description"></div>
            </div>
            <div class="flex items-center">
              <div class="text-sm">
                <p class="text-gray-600 m-2 mb-4">Proprietaire du jeu:
                 <router-link class="font-bold text-orange-500" :to="'/reviews/'+games.userId._id">{{ games.userId.username }}</router-link>
                </p>
                <p class="text-blue-600 text-center font-bold p-1 bg-blue-200 rounded-full m-2 shadow">
                  {{games.categoryId}}
                </p>
                            </div>

                   <router-link :to="'/jeux/'+games._id"  class="flex ml-auto text-white font-bold bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 hover:inner-shadow shadow rounded mt-5">Details</router-link>
              </div>
          </div>
        </div>
      </div>

      
    </div>
</div>

                              <!-- FIN CARD PRESENTATION JEU  -->
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
// @ is an alias to /src
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
  name: "FindGame",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      search:"",
      filteredByCategory:"",
      filteredByAge:"",
    };
  },
  methods: {
    ...mapActions(["fetchAllGames", "fetchAllCategories"]),
  
  },
  created() {
    this.fetchAllGames();
    this.fetchAllCategories();
  },
  computed: {
    ...mapGetters(["getAllGames", "getAllCategories"]),
      filtredGames(){
       
          return this.getAllGames.games.filter(game => game.name.toLowerCase().includes(this.search.toLowerCase()) &&  game.categoryId.toLowerCase().includes(this.filteredByCategory.toLowerCase()) && game.minAge.toLowerCase().includes(this.filteredByAge.toLowerCase()));

          
    
    }
  }
  
};
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}

</style>