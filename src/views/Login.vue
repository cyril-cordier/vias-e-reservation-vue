<template>
  <div class="login">
    <div class="w-full h-screen flex">
      <img
        src="../assets/loginPlage.jpg"
        alt="background"
        class="object-cover object-center h-screen w-0 overflow-hidden md:w-7/12"
      />

      <div
        class="bg-white flex flex-col justify-center items-center md:w-5/12 w-full"
      >
      <router-link to="/"><img class="h-32" src="../assets/logo_vias-e-reservation.png" alt="Logo"></router-link>
        <!-- MESSAGE CONNEXION SUCCESS  -->
        <div
          v-if="success != null "
          class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
          role="alert"
        >
          <div class="flex">
            <div class="py-1">
              <svg
                class="fill-current h-6 w-6 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
                />
              </svg>
            </div>
            <div>
              <p class="font-bold">Bienvenue dans votre espace !</p>
            </div>
          </div>
        </div>

        <!-- MESSAGE CONNEXION ERROR  -->

        <div v-if="error != null" role="alert">
          <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Error
          </div>
          <div
            class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
          >
            <p>Merci de verifier votre Email ou Mot de Passe</p>
          </div>
        </div>

        <!-- FORM  -->

        <h1 class="text-3xl font-bold text-orange-500 mb-5 mt-5">Connexion</h1>
        <div class="md:w-1/2 w-2/3 text-center">
          <form @submit.prevent="loginSubmit">
            <input
              v-model="email"
              type="email"
              required
              name="email"
              placeholder="Email"
              autocomplete="off"
              class="shadow-md border w-full h-10 px-3 py-2 text-gray-700 focus:outline-none focus:border-orange-500 focus:shadow-inner hover:shadow-inner mb-3 rounded"
            />
            <input
              v-model="password"
              type="password"
              name="password"
              required
              placeholder="Mot de Passe"
              autocomplete="off"
              class="shadow-md border w-full h-10 px-3 py-2 text-gray-700 focus:outline-none focus:border-orange-500 focus:shadow-inner hover:shadow-inner mb-3 rounded"
            />
            <button
              type="submit"
              class=" w-4/5 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-lg focus:outline-none mt-5 shadow"
            >
              Se Connecter
            </button>
          </form>
         <br>  
         <div class="w-full border-t pt-1 text-xs text-gray-600">Nouveau sur Vias e-Réservation</div>
                   
        <router-link to='/register'>
        <button  type="submit" class="w-full bg-gray-400 hover:bg-orange-500 text-white px-3 py-1 rounded text-lg focus:outline-none mt-4 shadow">
          Créer mon compte
        </button>
      </router-link>
      <br><br>
      <div class="w-full text-xs text-gray-600">Ou</div>
      <router-link to='/'>
        <button  type="submit" class="w-full bg-gray-400 hover:bg-orange-500 text-white px-3 py-1 rounded text-lg focus:outline-none mt-5 shadow">
          Retourner sur le site
        </button>  
      </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: "",
      success:null,
      error:null
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginSubmit() {
      var obj = {
        email: this.email,
        password: this.password,
      };

      this.login(obj);
      if(this.getLoginResponse.error){
        this.success = null;
   this.error = this.getLoginResponse.error;
      }
   if(this.getLoginResponse.success){
        this.error = null;
       this.success = this.getLoginResponse.success;
   }

    },
    created(){
      this.error = null;
      this.success = null;
    }
  },
  computed: mapGetters(["getLoginResponse"]),
};
</script>

<style>
</style>