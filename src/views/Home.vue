<template>
  <div class="home">
    <Navbar />
    <div class="h-full border-t-2 border-orange-400 mb-20">
       <Coverflow/>
       <div  v-for="content in getAllContents.Content" :key="content._id" > 
                 
         <div v-html="content.content" class="text-center bg-gray-200 m-4 p-10" v-if="content.visible == true"></div>
      </div>
      <div class="flex flex-row">
       <div class=" border-2 border-black-300 hover:bg-orange-200 rounded-md ml-4 mr-4 w-1/2" 
       onclick="document.location='./recherchejeux'">
       <h3 class="m-2 text-center font-bold">Recherches par catégories</h3>
       <img :src="require('../assets/Home/categories.png')" class="p-3" alt="">
       </div>
       <div class="border-2 border-black-300 hover:bg-orange-200 rounded-md mr-4 w-1/2"
       onclick="document.location='./gameMap'">       
       <h3 class="m-2 text-center font-bold">Recherches par localisation</h3>
       <img :src="require('../assets/Home/localisation.png')" class="p-3" alt="">
       </div>
      </div>
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


      ...mapActions(['fetchAllContents']),


    },
    computed: mapGetters(['getAllContents']),
    created() {

      this.fetchAllContents();
      console.log("coucou")
    }
}
</script>
