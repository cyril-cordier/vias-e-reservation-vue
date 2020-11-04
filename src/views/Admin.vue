<template>

  <div class="home" v-if="this.getUserMe.profile.is_admin == true">

<div x-data="{ sidebarOpen: false }" class="flex h-screen bg-blue-200">
        <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false" class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>

        <div :class="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-blue-700 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
            <div class="flex items-center justify-center mt-8">
                <div class="flex items-center ">
                    <router-link to="/"><img class="h-24" src="../assets/logo_vias-e-reservation_blanc.png" alt="Logo"></router-link>
                </div>
            </div>


            <nav class="mt-10 ">
                <button class="flex cursor-pointer items-center w-full mt-4 py-2 px-6 border-l-4 transition duration-500 ease-in-out border-blue-700 hover:bg-blue-500 text-white hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:outline-none focus:border-white hover:text-blue-100" 
                @click="userTable = true, appartTable = false, categoryTable = false, warningTable = false, reservationTable = false, contentTable = false, reviewTable = false, appartReviewTable = false">

 
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4.35418C12.7329 3.52375 13.8053 3 15 3C17.2091 3 19 4.79086 19 7C19 9.20914 17.2091 11 15 11C13.8053 11 12.7329 10.4762 12 9.64582M15 21H3V20C3 16.6863 5.68629 14 9 14C12.3137 14 15 16.6863 15 20V21ZM15 21H21V20C21 16.6863 18.3137 14 15 14C13.9071 14 12.8825 14.2922 12 14.8027M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    <span class="mx-4">Utilisateurs</span>
                </button>
            

                <button class="flex cursor-pointer items-center w-full mt-4 py-2 px-6 border-l-4 transition duration-500 ease-in-out border-blue-700 hover:bg-blue-500 text-white hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:outline-none focus:border-white hover:text-blue-100" 
                 v-if="this.getUserMe.profile.who_is == 'Administrateur'"
                @click="userTable = false, appartTable = true, categoryTable = false, warningTable = false, reservationTable = false, contentTable = false, reviewTable = false, appartReviewTable = false">

 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    <span class="mx-4">Fiche Appartement</span>
                </button>


                <button class="flex cursor-pointer items-center w-full mt-4 py-2 px-6 border-l-4 transition duration-500 ease-in-out border-blue-700 hover:bg-blue-500 text-white hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:outline-none focus:border-white hover:text-blue-100"  
                @click="userTable = false, appartTable = false, categoryTable = false, warningTable = true, reservationTable = false, contentTable = false, reviewTable = false, appartReviewTable = false">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    
                    <span class="mx-4">Contenu signalé</span>

                </button>
                <button class="flex cursor-pointer items-center w-full mt-4 py-2 px-6 border-l-4 transition duration-500 ease-in-out border-blue-700 hover:bg-blue-500 text-white hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:outline-none focus:border-white hover:text-blue-100"  
                @click="userTable = false, appartTable = false, categoryTable = false, warningTable = false, reservationTable = true, contentTable = false, reviewTable = false, appartReviewTable = false">

                    
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 19V10.0704C3 9.40165 3.3342 8.77718 3.8906 8.40625L10.8906 3.73959C11.5624 3.29172 12.4376 3.29172 13.1094 3.73959L20.1094 8.40625C20.6658 8.77718 21 9.40165 21 10.0704V19M3 19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19M3 19L9.75 14.5M21 19L14.25 14.5M3 9.99999L9.75 14.5M21 9.99999L14.25 14.5M14.25 14.5L13.1094 15.2604C12.4376 15.7083 11.5624 15.7083 10.8906 15.2604L9.75 14.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    
                    <span class="mx-4">Réservations</span>

                </button>
                

                <button class="flex cursor-pointer items-center w-full mt-4 py-2 px-6 border-l-4 transition duration-500 ease-in-out border-blue-700 hover:bg-blue-500 text-white hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:outline-none focus:border-white hover:text-blue-100"  
                @click="userTable = false, appartTable = false, categoryTable = false, warningTable = false, reservationTable = false, contentTable = false, reviewTable = false, appartReviewTable = true">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 8H17M7 12H11M12 20L8 16H5C3.89543 16 3 15.1046 3 14V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H16L12 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    
                    <span class="mx-4">Remarques Appart</span>
                </button>

                <button class="flex cursor-pointer items-center w-full mt-4 py-2 px-6 border-l-4 transition duration-500 ease-in-out border-blue-700 hover:bg-blue-500 text-white hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:outline-none focus:border-white hover:text-blue-100" 
                @click="userTable = false, appartTable = false, categoryTable = false, warningTable = false, reservationTable = false, contentTable = true, reviewTable = false, appartReviewTable = false">

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 13C4 12.4477 4.44772 12 5 12H11C11.5523 12 12 12.4477 12 13V19C12 19.5523 11.5523 20 11 20H5C4.44772 20 4 19.5523 4 19V13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 13C16 12.4477 16.4477 12 17 12H19C19.5523 12 20 12.4477 20 13V19C20 19.5523 19.5523 20 19 20H17C16.4477 20 16 19.5523 16 19V13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    <span class="mx-4">Modifier Accueil</span>
                </button>
                <button class="flex cursor-pointer items-center w-full mt-4 py-2 px-6 border-l-4 transition duration-500 ease-in-out border-blue-700 hover:bg-blue-500 text-white hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:outline-none focus:border-white hover:text-blue-100">

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 9L16 12M16 12L13 15M16 12L8 12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    <router-link to="/" class="mx-4">Retour Accueil</router-link>
                </button>
                <button  class="flex cursor-pointer items-center w-full mt-4 py-2 px-6 border-l-4 transition duration-500 ease-in-out border-blue-700 hover:bg-blue-500 text-white hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:outline-none focus:border-white hover:text-blue-100">
 
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 6H5C3.89543 6 3 6.89543 3 8V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V8C21 6.89543 20.1046 6 19 6H14M10 6V5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V6M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6M9 14C10.1046 14 11 13.1046 11 12C11 10.8954 10.1046 10 9 10C7.89543 10 7 10.8954 7 12C7 13.1046 7.89543 14 9 14ZM9 14C10.3062 14 11.4174 14.8348 11.8292 16M9 14C7.69378 14 6.58249 14.8348 6.17065 16M15 11H18M15 15H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    <router-link to="/profile" class="mx-4">Mon Profil</router-link>
                </button>
                <button @click="logout()" class="flex cursor-pointer items-center w-full mt-4 py-2 px-6 border-l-4 transition duration-500 ease-in-out border-blue-700 hover:bg-blue-500 text-white hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:outline-none focus:border-white hover:text-blue-100" >

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    <span class="mx-4">Déconnexion</span>

                </button>


            </nav>
        </div>
        <div class="flex-1 flex flex-col overflow-auto">
            <header class="flex justify-between items-center py-4 px-6 bg-white-4 border-indigo-600">
                <div class="flex items-center">
                    <button @click="sidebarOpen = true" class="text-white focus:outline-none lg:hidden">
                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>

                    
                </div>             
            </header>
            Connecté en tant que : {{this.getUserMe.profile.username}} ({{this.getUserMe.profile.who_is}})

            <UserTable v-if="userTable == true"/>
            <AppartTable v-if="appartTable == true"/>
            <CategoryTable v-if="categoryTable == true"/>
            <WarningTable v-if="warningTable == true"/>
            <ReservationTable v-if="reservationTable == true"/>
            <ContentTable v-if="contentTable == true"/>
            <ReviewTable v-if="reviewTable == true"/>
            <AppartReviewTable v-if="appartReviewTable == true"/>
        </div>

    </div>
   
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
import UserTable from '../components/admin/UserTable'
import AppartTable from '../components/admin/AppartTable'
import CategoryTable from '../components/admin/CategoryTable'
import WarningTable from '../components/admin/WarningTable'
import ReservationTable from '../components/admin/ReservationTable'
import ContentTable from '../components/admin/ContentTable'
import ReviewTable from '../components/admin/ReviewTable'
import AppartReviewTable from '../components/admin/AppartReviewTable'
// import jwt_decode from 'jwt-decode';

export default {
  name: 'Admin',
  components: {
    UserTable,
    AppartTable,
    CategoryTable,
    WarningTable,
    ReservationTable,
    ContentTable,
    ReviewTable,
    AppartReviewTable
    
  },
  data(){
      return {
            sidebarOpen :true,
            userTable: true,
            appartTable: false,
            categoryTable: false,
            warningTable: false,
            reservationTable:false,
            contentTable: false,
            reviewTable: false,
            appartReviewTable:false,
            viastoken: null
      }
  },
   methods: {
       ...mapActions(["fetchUserMe"]),
      getToken() {
        this.viastoken = localStorage.getItem('viastoken');
      },
      logout() {
        localStorage.removeItem('viastoken');
        window.location.href = "/";
      }
    },
    computed: {
        ...mapGetters([
        "getUserMe",
        ]),
    },
    mounted() {
    //   this.getToken();
    
    // var decoded = jwt_decode(this.token).exp;
    // console.log(decoded-(Math.round(+new Date() / 1000)));
    //   if(this.token == null || (decoded-(Math.round(+new Date() / 1000))<=0)){
    //     window.location.href="/login"
    //   }
     }
}
</script>
