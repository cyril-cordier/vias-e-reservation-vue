<template>
  <div class="home">
    <Navbar />
    <div class="text-center">
    <input type="text" class="w-1/3 m-5 text-center p-2 border-2 border-gray-400 bg-orange-100 text-gray-700 rounded hover:border-orange-200 focus:outline-none focus:border-orange-400 shadow focus:inner-shadow" v-model="search" placeholder="Rechercher par code postal"/>
    </div>
    <div class="h-screen">
            <gmap-map 
          :center="mapCenter"
          :zoom="10"
          style="width:100%; height:100%;"
        >
          <gmap-info-window
            :options="infoWindowOptions"
            :position="infoWindowPosition()"
            :opened="infoWindowOpened"
            @closeclick="activeUser = {}; infoWindowOpened = false">

            <div class="p-5 bg-orange-400 rounded-t-lg  hover:bg-orange-500 w-40 hover:shadow-inner text-center shadow">
                <p class="text-white font-bold text-lg mb-2">
                  <router-link :to="'/reviews/'+activeUser._id">
                  {{activeUser.username}}</router-link>
                  </p>
                <p class="text-white font-normal">{{activeUser.email}}</p>
            </div>
            <div v-for="game in getAllGames.games" :key="game._id" class="bg-gray-200 border">
              <div class="mt-2 text-center font-semibold text-orange-600" v-if="game.userId._id == activeUser._id">
                {{game.name}}
                <div>
                <router-link :to="'/jeux/'+game._id"> <img :src="game.images[0]"
                            class="m-auto w-24 mb-2 rounded shadow transform hover:scale-105 transition duration-500 ease-in-out"
                            alt="game image"/></router-link>
                            </div>
              </div>
            </div>

          </gmap-info-window>
            <gmap-marker
          v-for="user in filteredUsers"
          :key="user.id"
          :position="getPosition(user)"
          :clickable="true"
          :draggable="false"
          @click="activeUser = user; infoWindowOpened = true"
          ></gmap-marker>

        </gmap-map>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
    
  },
  data() {
      return {
          search:"",
          infoWindowOptions:{
              pixelOffset:{
                width : 0,
                height:-35
              }
          },
          activeUser:{},
          infoWindowOpened: false,
          marker:'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|4169E1',
          }
    },
    methods: {
      ...mapActions(['fetchAllUsers', 'fetchAllGames']),
      getPosition(r){
        return {
          lat : parseFloat(r.lat),
          lng: parseFloat(r.lng),
        }
      },
      infoWindowPosition(){
        return{
          lat: parseFloat(this.activeUser.lat),
          lng: parseFloat(this.activeUser.lng),
        }
      },
      
     
    },
    created(){
      this.fetchAllUsers(); 
  

    },
    computed: {
      ...mapGetters(['getAllUsers', 'getAllGames']),
      mapCenter(){
       
          return {
          lat:48.8534,
          lng:2.3488
          }
      
      },
       filteredUsers() {
        return this.getAllUsers.users.filter((user) =>
          user.zip
            .toLowerCase()
            .includes(this.search)
        );
       }
      }
}
</script>

<style scoped>

.vue-map-container,
.vue-map-container .vue-map {
    width: 100%;
    height: 100%;
}


</style>