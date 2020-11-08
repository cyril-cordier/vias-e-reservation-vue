<template>

                                         <!-- RESTE A FAIRE FILTRE ET AMELIORER CONTENU CARD  -->

  <div class="findAppart">
    <Navbar />
    <div class=" flex ">
      <div class="bg-white flex flex-col items-center w-2/12"></div>

      <div class="bg-white flex flex-col w-8/12 my-5">
        <input
          type="text"
          name="search"
          v-model="search"
          placeholder="Recherchez un appartement..."
          autocomplete="off"
          class="shadow-md border w-11/12 h-15 px-3 py-2 mx-auto text-blue-700 focus:outline-none focus:border-orange-400 focus:shadow-inner hover:shadow-inner mb-3 rounded-full"
        />
           
           
            <!-- RECHERCHE PAR NOM DE JEU  -->
        <div class="flex justify-around my-6">
   
        

           <!-- RECHERCHE PAR CATEGORIES  -->

          <div class="dropdown relative">
           

              <!-- <select v-model="filteredByCategory" class="py-2 px-6 border-0 font-bold bg-orange-300 text-center focus:outline-none hover:inner-shadow shadow rounded">
                <option value="" >Toutes les Catégories</option>
                <option  v-for="category in getAllCategories.Category" :key="category._id" :value="category.name"
                  class="font-bold bg-orange-300"
                 
                  >{{category.name}}</option>
                
              </select> -->
              
            
          </div>

           <!-- RECHERCHE PAR AGE  -->

         <!--  <div class="dropdown relative">
           
              <select v-model="filteredByAge" class="py-2 px-6 border-0 font-bold bg-orange-300 text-center focus:outline-none hover:inner-shadow shadow rounded">
                <option value="" class="font-bold bg-orange-300">Tout âge</option>
                <option value="-5" class="font-bold bg-orange-300"> - 5 ans </option>
                <option value="+5" class="font-bold bg-orange-300"> + 5 ans </option>
                <option value="+12" class="font-bold bg-orange-300"> + 12 ans </option>
              </select>
          </div> -->
        </div>


       <div>                               <!-- CARD PRESENTATION D'UN JEU  -->
        <div
          class="w-full flex lg:flex my-5"
          v-for="apparts in filtredApparts"
          :key="apparts._id"
        >
          <div
            class="h-48 lg:h-auto lg:w-4/12 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            :style="'background-image: url('+apparts.images[0]+');'"
            
          ></div>
          <div
            class="w-8/12 border-r border-b border-l border-blue-400 lg:border-l-0 lg:border-t lg:border-blue-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between"
          >
            <div class="mb-8">
              <div class="text-blue-700 font-bold text-xl mb-2">
                {{ apparts.name }}
              </div>
              <div class="text-blue-700 text-base" v-html="apparts.description.substr(0,55)+'[...]'"></div>
            </div>
            <div class="flex items-center">
              <div class="text-sm">
                <div class="text-blue-600  ">Gestionnaire :</div>
                 <div class="font-bold text-orange-500 m-2 mb-4" >Carol PRAVDA-STAROV</div>
                
                <!-- <p class="text-blue-600 text-center font-bold p-1 bg-blue-200 rounded-full m-2 shadow">
                  categories
                </p> -->
                <p 
                  class=" m-5 px-2 inline-flex text-l leading-5 font-semibold rounded-full bg-green-300 text-green-800 "
                  v-if= "apparts.available == true">Disponible pour la réservation</p>
                  <p 
                  class=" m-5 px-2 inline-flex text-l leading-5 font-semibold rounded-full bg-red-300 text-red-800 "
                  v-if= "apparts.available != true">Non disponible à la réservation</p>
              </div>

                   <router-link :to="'/appartements/'+apparts._id"  class="flex ml-auto text-white font-bold bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 hover:inner-shadow shadow rounded mt-5">Details</router-link>
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
  name: "FindAppart",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      search:"",
      
      filteredByAge:"",
    };
  },
  methods: {
    ...mapActions(["fetchAllApparts"]),
  
  },
  created() {
    this.fetchAllApparts();
    
  },
  computed: {
    ...mapGetters(["getAllApparts"]),
      filtredApparts(){
       
          return this.getAllApparts.apparts.filter(appart => appart.name.toLowerCase().includes(this.search.toLowerCase()));

          
    
    }
  }
  
};
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}

</style>