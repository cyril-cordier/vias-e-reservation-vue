<template>
    <header class="bg-gray-200 md:flex md:justify-between md:items-center md:pl-2 md:pr-4 md:py-2">
        <div class="flex items-center justify-between pl-2 pr-4 py-2 md:pl-0 md:pr-0 md:py-0">
            <div>
                <router-link to="/"><img class="h-24" src="../assets/logo_vias-e-reservation.png" alt="Logo"></router-link>
            </div>
            <div class="md:hidden">
                <button @click="isOpen = !isOpen" type="button"
                    class="block text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                    <svg class="h-12 w-12 fill-current" viewBox="0 0 24 24">
                        <path v-if="isOpen" fill-rule="evenodd"
                            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                        <path v-if="!isOpen" fill-rule="evenodd"
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                    </svg>
                </button>
            </div>
            
        </div>
         <div :class="isOpen ? 'block' : 'hidden'" class="px-1 pt-2 pb-4 md:pb-2 md:flex">
            <router-link to="/" class="block md:inline-block px-2 py-1 text-gray-700 font-semibold rounded hover:bg-orange-400 hover:text-white">Accueil</router-link>
            <router-link to="/recherchejeux" class="mt-1 block md:inline-block px-2 py-1 text-gray-700 font-semibold rounded hover:bg-orange-400 hover:text-white md:mt-0 md:ml-4">Recherche</router-link>
            
        <router-link v-if="this.token != null" to="/reservation" class="mt-1 block md:inline-block px-2 py-1 text-gray-700 font-semibold rounded hover:bg-orange-400 hover:text-white md:mt-0 md:ml-4">Reservations</router-link>

        </div>
        <div :class="isOpen ? 'block' : 'hidden'" class="px-1 pt-2 pb-4 md:pb-2 md:flex">
            <router-link to="/profile" class="block md:inline-block px-2 py-1 text-gray-700 font-semibold rounded hover:bg-orange-400 hover:text-white">Mon compte</router-link>
            <div
            class="block md:inline-block px-2 py-1 text-gray-700 font-semibold rounded hover:bg-orange-400 hover:text-white cursor-pointer"
            @click="logout()" v-if="this.token != null"
            >Déconnexion</div>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                isOpen: false,
                token: null
            }
        },
        methods: {
      getToken() {
        this.token = localStorage.getItem('token');
      },
      logout() {
        localStorage.removeItem('token');
        window.location.href = "/";
      }
    },

    mounted() {
      this.getToken();

    }

    }
</script>

<style>

</style>