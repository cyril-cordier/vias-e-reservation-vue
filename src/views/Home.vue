<template>
  <div class="home">
    <Navbar />
    <div class="h-full border-t-2 border-orange-400 mb-20">
       <Coverflow/>
       <div  v-for="content in getAllContents.Content" :key="content._id" > 
                 
         <div v-html="content.content" class="text-center bg-blue-200 m-4 p-10" v-if="content.visible == true"></div>
      </div>
      
      <div
          class="flex justify-around"
          v-for="apparts in getAllApparts.apparts"
          :key="apparts._id"
        >
      <router-link :to="'/appartements/'+apparts._id"  
      class="text-white font-bold bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 hover:inner-shadow shadow rounded mt-12">
      Voir le détail de l'appartement et réserver</router-link>
      </div>
      
      <!-- <div class="flex flex-row">
       <div class=" border-2 border-black-300 hover:bg-orange-200 rounded-md ml-4 mr-4 w-1/2" 
       onclick="document.location='./rechercheappart'">
       <h3 class="m-2 text-center font-bold">Recherches par catégories</h3>
       <img :src="require('../assets/Home/categories.png')" class="p-3" alt="">
       </div>
       <div class="border-2 border-black-300 hover:bg-orange-200 rounded-md mr-4 w-1/2"
       onclick="document.location='./appartMap'">       
       <h3 class="m-2 text-center font-bold">Recherches par localisation</h3>
       <img :src="require('../assets/Home/localisation.png')" class="p-3" alt="">
       </div>
      </div> -->
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Coverflow from "../components/homepage/Coverflow"
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    Coverflow
  },
  data() {
      return {
        
        

      }
    },
  methods: {


      ...mapActions(['fetchAllContents', 'fetchAllApparts']),


    },
    computed: mapGetters(['getAllContents', 'getAllApparts']),
    created() {

      this.fetchAllContents();
      this.fetchAllApparts();
      
    }
}
</script>
