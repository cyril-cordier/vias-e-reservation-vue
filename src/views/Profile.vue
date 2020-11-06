<template>
  <div class="Profile">
    <Navbar />

<Activation v-if="getUserMe.profile.is_active == 'No'"/>
    <div class="h-full m-10">
      <div class="p-3 m-5 w-85 mx-auto">
        <div class="grid grid-flow-col grid-rows-6 xl:grid-rows-1 lg:grid-rows-1 md:grid-rows-2 sm:grid-rows-6">
          <div class="dropdown relative z-50 px-4 py-2 m-4 text-blue-700 text-center transition duration-500 ease-in-out transform hover:scale-105 bg-blue-200 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-blue-700 hover:inner-shadow hover:text-blue-100 rounded text-lg focus:outline-none shadow">
            <button
              class="text-blue-700 inline-flex items-center font-semibold focus:outline-none"
              @click="
              (user_toggle = true),
                (update_toggle = false),
                (password_toggle = false),
                (appart_toggle = false)
                
            "
            >
              <span class="mr-1">Mes Informations</span>
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </button>
            <ul class="dropdown-menu absolute left-0 hidden w-full text-blue-700 mt-2">
              <li class="" 
              @click="
              (user_toggle = true),
                (update_toggle = false),
                (password_toggle = false),
                (appart_toggle = false)
                
            ">
                <a
                  class="rounded-none bg-blue-200 hover:bg-blue-400 py-2 px-4 block border-b-2"
                  href="#"
                  >Mes Informations</a
                >
              </li>
              <li class=""
              @click="
                (user_toggle = false),
                (update_toggle = true),
                (password_toggle = false),
                (appart_toggle = false)
                
            ">
                <a
                  class="bg-blue-200 hover:bg-blue-400 py-2 px-4 block border-b-2"
                  href="#"
                  >Modifier mes informations</a
                >
              </li>
              <li class=""
              @click="
                (user_toggle = false),
                (update_toggle = false),
                (password_toggle = true),
                (appart_toggle = false)
                
            ">
                <a
                  class="bg-blue-200 hover:bg-blue-400 py-2 px-4 block border-b-2"
                  href="#"
                  >Modifier mon mot de passe</a
                >
              </li>
              
            </ul>
          </div>

          
          <button
            class="px-4 py-2 m-4 text-blue-700 font-semibold transition duration-500 ease-in-out transform hover:scale-105 bg-blue-200 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-blue-700 hover:inner-shadow hover:text-blue-100 rounded text-lg focus:outline-none shadow"
            v-if="this.getUserMe.profile.is_admin == true"
            @click="
              (update_toggle = false),
                (user_toggle = false),
                (password_toggle = false),
                (appart_toggle = true)           

            "
          >
            Gestion des informations Appartement
          </button>
          
          <router-link to="/admin"
            v-if="this.getUserMe.profile.is_admin == true"
            class="px-4 py-2 m-4 text-blue-700 text-center font-semibold transition duration-500 ease-in-out transform hover:scale-105 bg-yellow-100 hover:bg-yellow-500 focus:scale-105 focus:bg-yellow-500 focus:text-blue-700 hover:inner-shadow hover:text-blue-100 rounded text-lg focus:outline-none shadow"
          >
            <p class="hover:text-blue-100 hover:no-underline" 
              >Espace Administrateur</p>
            
          </router-link>
        </div>
      </div>

      
      
      <UserInfo v-show="user_toggle" />
      <EditUser v-show="update_toggle" />
      <EditPassword v-show="password_toggle" />
      <Appartement v-show="appart_toggle" />
      
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserInfo from "../components/user/UserInfo";
import EditUser from "../components/user/EditUser";
import EditPassword from "../components/user/EditPassword";
import Appartement from "../components/user/Appartement";
import Activation from "../components/activation/Activation.vue"

import { mapActions, mapGetters } from "vuex";
// import jwt_decode from 'jwt-decode';


export default {
  name: "Profile",
  components: {
    Navbar,
    Footer,
    UserInfo,
    EditUser, 
    EditPassword, 
    Appartement,
    Activation
    
  },

  data() {
    return {
      user: "",
      success: "",
      user_toggle: true,
      update_toggle: false,
      password_toggle: false,
      appart_toggle: false,
      AddAppart_modal: false,
      EditAppart_modal: false,
      
      viastoken: null,

      
    };
  },
  methods: {
    ...mapActions([
      "fetchUserMe",
      
    ]),
    
    getToken() {
        this.viastoken = localStorage.getItem('viastoken');
      },
  },
  
  computed: {
    ...mapGetters([
      "getUserMe",
      
    ]),
    
    },
  
  created() {
    this.fetchUserMe();
    this.userToEdit = this.getUserMe.profile;
    this.getToken();
    
      // if(this.token == null){
      //   window.location.href="/login"
      // }else{
      //   var decoded = jwt_decode(this.token).exp;
      //   console.log((decoded-(Math.round(+new Date() / 100))));
      //     if((decoded-(Math.round(+new Date() / 100)))>=0){
      //     window.location.href="/login"
      //     }
      // }
    
  },
};
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>