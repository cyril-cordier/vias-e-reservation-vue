<template>
  <div class="home" v-if="this.getUserMe.profile.is_admin == true">

<div x-data="{ sidebarOpen: false }" class="flex h-screen bg-gray-200">
        <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false" class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>

        <div :class="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" class="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
            <div class="flex items-center justify-center mt-8">
                <div class="flex items-center ">
                    <router-link to="/"><img class="h-24" src="../assets/logoGame_ssfond2.png" alt="Logo"></router-link>
                </div>
            </div>


            <nav class="mt-10 ">
                <button class="flex cursor-pointer items-center w-full mt-4 py-2 px-6 border-l-4 transition duration-500 ease-in-out border-gray-900 hover:bg-gray-600 text-gray-500 hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:outline-none focus:border-white hover:text-gray-100" 
                @click="userTable = true, gameTable = false, categoryTable = false, warningTable = false, reservationTable = false, contentTable = false, reviewTable = false, gameReviewTable = false">

 
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4.35418C12.7329 3.52375 13.8053 3 15 3C17.2091 3 19 4.79086 19 7C19 9.20914 17.2091 11 15 11C13.8053 11 12.7329 10.4762 12 9.64582M15 21H3V20C3 16.6863 5.68629 14 9 14C12.3137 14 15 16.6863 15 20V21ZM15 21H21V20C21 16.6863 18.3137 14 15 14C13.9071 14 12.8825 14.2922 12 14.8027M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    <span class="mx-4">Utilisateurs</span>
                </button>
            

                <button class="flex cursor-pointer items-center w-full mt-4 py-2 px-6 border-l-4 transition duration-500 ease-in-out border-gray-900 hover:bg-gray-600 text-gray-500 hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:outline-none focus:border-white hover:text-gray-100" 
                @click="userTable = false, gameTable = true, categoryTable = false, warningTable = false, reservationTable = false, contentTable = false, reviewTable = false, gameReviewTable = false">

 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 4C11 2.89543 11.8954 2 13 2C14.1046 2 15 2.89543 15 4V5C15 5.55228 15.4477 6 16 6H19C19.5523 6 20 6.44772 20 7V10C20 10.5523 19.5523 11 19 11H18C16.8954 11 16 11.8954 16 13C16 14.1046 16.8954 15 18 15H19C19.5523 15 20 15.4477 20 16V19C20 19.5523 19.5523 20 19 20H16C15.4477 20 15 19.5523 15 19V18C15 16.8954 14.1046 16 13 16C11.8954 16 11 16.8954 11 18V19C11 19.5523 10.5523 20 10 20H7C6.44772 20 6 19.5523 6 19V16C6 15.4477 5.55228 15 5 15H4C2.89543 15 2 14.1046 2 13C2 11.8954 2.89543 11 4 11H5C5.55228 11 6 10.5523 6 10V7C6 6.44772 6.44772 6 7 6H10C10.5523 6 11 5.55228 11 5V4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    <span class="mx-4">Fiches de jeux</span>
                </button>


                <button class="flex cursor-pointer items-center w-full mt-4 py-2 px-6 border-l-4 transition duration-500 ease-in-out border-gray-900 hover:bg-gray-600 text-gray-500 hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:outline-none focus:border-white hover:text-gray-100"  
                @click="userTable = false, gameTable = false, categoryTable = true, warningTable = false,reservationTable = false, contentTable = false, reviewTable = false, gameReviewTable = false">
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 3C6.44772 3 6 3.44772 6 4C6 4.55228 6.44772 5 7 5H13C13.5523 5 14 4.55228 14 4C14 3.44772 13.5523 3 13 3H7Z" fill="currentColor"/>
                        <path d="M4 7C4 6.44772 4.44772 6 5 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H5C4.44772 8 4 7.55228 4 7Z" fill="currentColor"/>
                        <path d="M2 11C2 9.89543 2.89543 9 4 9H16C17.1046 9 18 9.89543 18 11V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V11Z" fill="currentColor"/>
                    </svg>

                    
                    <span class="mx-4">Catégories</span>
                </button>


                <button class="flex cursor-pointer items-center w-full mt-4 py-2 px-6 border-l-4 transition duration-500 ease-in-out border-gray-900 hover:bg-gray-600 text-gray-500 hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:outline-none focus:border-white hover:text-gray-100"  
                @click="userTable = false, gameTable = false, categoryTable = false, warningTable = true, reservationTable = false, contentTable = false, reviewTable = false, gameReviewTable = false">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    
                    <span class="mx-4">Contenu signalé</span>

                </button>
                <button class="flex cursor-pointer items-center w-full mt-4 py-2 px-6 border-l-4 transition duration-500 ease-in-out border-gray-900 hover:bg-gray-600 text-gray-500 hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:outline-none focus:border-white hover:text-gray-100"  
                @click="userTable = false, gameTable = false, categoryTable = false, warningTable = false, reservationTable = true, contentTable = false, reviewTable = false, gameReviewTable = false">

                    
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 19V10.0704C3 9.40165 3.3342 8.77718 3.8906 8.40625L10.8906 3.73959C11.5624 3.29172 12.4376 3.29172 13.1094 3.73959L20.1094 8.40625C20.6658 8.77718 21 9.40165 21 10.0704V19M3 19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19M3 19L9.75 14.5M21 19L14.25 14.5M3 9.99999L9.75 14.5M21 9.99999L14.25 14.5M14.25 14.5L13.1094 15.2604C12.4376 15.7083 11.5624 15.7083 10.8906 15.2604L9.75 14.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    
                    <span class="mx-4">Réservations</span>

                </button>
                <button class="flex cursor-pointer items-center w-full mt-4 py-2 px-6 border-l-4 transition duration-500 ease-in-out border-gray-900 hover:bg-gray-600 text-gray-500 hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:outline-none focus:border-white hover:text-gray-100"  
                @click="userTable = false, gameTable = false, categoryTable = false, warningTable = false, reservationTable = false, contentTable = false, reviewTable = true, gameReviewTable = false">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 8H17M7 12H11M12 20L8 16H5C3.89543 16 3 15.1046 3 14V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H16L12 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    
                    <span class="mx-4">Notes Utilisateurs</span>
                </button>

                <button class="flex cursor-pointer items-center w-full mt-4 py-2 px-6 border-l-4 transition duration-500 ease-in-out border-gray-900 hover:bg-gray-600 text-gray-500 hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:outline-none focus:border-white hover:text-gray-100"  
                @click="userTable = false, gameTable = false, categoryTable = false, warningTable = false, reservationTable = false, contentTable = false, reviewTable = false, gameReviewTable = true">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 8H17M7 12H11M12 20L8 16H5C3.89543 16 3 15.1046 3 14V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H16L12 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    
                    <span class="mx-4">Notes Jeu</span>
                </button>

                <button class="flex cursor-pointer items-center w-full mt-4 py-2 px-6 border-l-4 transition duration-500 ease-in-out border-gray-900 hover:bg-gray-600 text-gray-500 hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:outline-none focus:border-white hover:text-gray-100" 
                @click="userTable = false, gameTable = false, categoryTable = false, warningTable = false, reservationTable = false, contentTable = true, reviewTable = false, gameReviewTable = false">

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 13C4 12.4477 4.44772 12 5 12H11C11.5523 12 12 12.4477 12 13V19C12 19.5523 11.5523 20 11 20H5C4.44772 20 4 19.5523 4 19V13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 13C16 12.4477 16.4477 12 17 12H19C19.5523 12 20 12.4477 20 13V19C20 19.5523 19.5523 20 19 20H17C16.4477 20 16 19.5523 16 19V13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    <span class="mx-4">Modifier Accueil</span>
                </button>
                <button class="flex cursor-pointer items-center w-full mt-4 py-2 px-6 border-l-4 transition duration-500 ease-in-out border-gray-900 hover:bg-gray-600 text-gray-500 hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:outline-none focus:border-white hover:text-gray-100">

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 9L16 12M16 12L13 15M16 12L8 12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    <router-link to="/" class="mx-4">Retour Accueil</router-link>
                </button>
                <button  class="flex cursor-pointer items-center w-full mt-4 py-2 px-6 border-l-4 transition duration-500 ease-in-out border-gray-900 hover:bg-gray-600 text-gray-500 hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:outline-none focus:border-white hover:text-gray-100">
 
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 6H5C3.89543 6 3 6.89543 3 8V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V8C21 6.89543 20.1046 6 19 6H14M10 6V5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V6M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6M9 14C10.1046 14 11 13.1046 11 12C11 10.8954 10.1046 10 9 10C7.89543 10 7 10.8954 7 12C7 13.1046 7.89543 14 9 14ZM9 14C10.3062 14 11.4174 14.8348 11.8292 16M9 14C7.69378 14 6.58249 14.8348 6.17065 16M15 11H18M15 15H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    <router-link to="/profile" class="mx-4">Mon Profil</router-link>
                </button>
                <button @click="logout()" class="flex cursor-pointer items-center w-full mt-4 py-2 px-6 border-l-4 transition duration-500 ease-in-out border-gray-900 hover:bg-gray-600 text-gray-500 hover:border-orange-500 focus:bg-orange-500 focus:text-white focus:outline-none focus:border-white hover:text-gray-100" >

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
                    <button @click="sidebarOpen = true" class="text-gray-500 focus:outline-none lg:hidden">
                        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>

                    
                </div>             
            </header>
            <UserTable v-if="userTable == true"/>
            <GameTable v-if="gameTable == true"/>
            <CategoryTable v-if="categoryTable == true"/>
            <WarningTable v-if="warningTable == true"/>
            <ReservationTable v-if="reservationTable == true"/>
            <ContentTable v-if="contentTable == true"/>
            <ReviewTable v-if="reviewTable == true"/>
            <GameReviewTable v-if="gameReviewTable == true"/>
        </div>

    </div>
   
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
import UserTable from '../components/admin/UserTable'
import GameTable from '../components/admin/GameTable'
import CategoryTable from '../components/admin/CategoryTable'
import WarningTable from '../components/admin/WarningTable'
import ReservationTable from '../components/admin/ReservationTable'
import ContentTable from '../components/admin/ContentTable'
import ReviewTable from '../components/admin/ReviewTable'
import GameReviewTable from '../components/admin/GameReviewTable'
// import jwt_decode from 'jwt-decode';

export default {
  name: 'Admin',
  components: {
    UserTable,
    GameTable,
    CategoryTable,
    WarningTable,
    ReservationTable,
    ContentTable,
    ReviewTable,
    GameReviewTable
    
  },
  data(){
      return {
            sidebarOpen :true,
            userTable: true,
            gameTable: false,
            categoryTable: false,
            warningTable: false,
            reservationTable:false,
            contentTable: false,
            reviewTable: false,
            gameReviewTable:false,
            token: null
      }
  },
   methods: {
       ...mapActions(["fetchUserMe"]),
      getToken() {
        this.token = localStorage.getItem('token');
      },
      logout() {
        localStorage.removeItem('token');
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
