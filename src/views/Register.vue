<template>
  
   <div class="register">
<div class="w-full h-screen flex">
    
    <div class="bg-white flex flex-col justify-center items-center md:w-5/12 w-full">
     <!-- MESSAGE REGISTER SUCCESS  -->
        <div
          v-if="getRegisterResponse.success"
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
              <p class="font-bold">Vous pouvez desormais vous connecter !</p>
            </div>
          </div>
        </div>

        <!-- MESSAGE REGISTER ERROR  -->

        <div v-if="getRegisterResponse.error " role="alert">
          <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Error
          </div>
          <div
            class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
          >      

            <p v-if="getRegisterResponse.error.badEmail">Utilisateur déjà enregistré !</p>
          </div>
        </div>

        <div v-if="error " role="alert">
          <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Error
          </div>
          <div
            class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
          >      
            <p v-if="error">{{error}}</p>
          </div>
        </div>

        <!-- FORM  -->

      <div class="md:w-1/2 w-2/3 mb-5 pb-5 text-center overflow-auto">
                    <router-link to="/"><img class="h-32 m-auto" src="../assets/logoGame_ssfond2.png" alt="Logo"></router-link>

      <h1 class="text-3xl font-bold text-orange-500 mb-5 mt-5">Creation de Compte</h1>
      <form @submit.prevent="registerSubmit">
        <input required v-model="username" type="text" name="username" placeholder="Nom d'Utilisateur..." autocomplete="off"
            class="shadow-md border w-full h-10 px-3 py-2 text-gray-700 focus:outline-none focus:border-orange-500 focus:shadow-inner hover:shadow-inner mb-3 rounded">
             <input required  v-model="email" type="email" name="email" placeholder="votre@email.fr" autocomplete="off"
            class="shadow-md border w-full h-10 px-3 py-2 text-gray-700 focus:outline-none focus:border-orange-500 focus:shadow-inner hover:shadow-inner mb-3 rounded">
             <div class="flex flex-wrap">
                 <div class="w-1/6">
             <input required  v-model="number" type="text" name="numero" placeholder="N°" autocomplete="off"
            class="shadow-md border w-full h-10 px-3 py-2 text-gray-700 focus:outline-none focus:border-orange-500 focus:shadow-inner hover:shadow-inner mb-3 rounded">
                 </div>
                <div class="w-5/6 pl-2">
             <input required v-model="street" type="text" name="rue" placeholder="Nom de la Rue" autocomplete="off"
            class="shadow-md border w-full h-10 px-3 py-2 text-gray-700 focus:outline-none focus:border-orange-500 focus:shadow-inner hover:shadow-inner mb-3 rounded">
                </div>

            </div>
              <div class="flex flex-wrap">
                 <div class="w-1/3">
             <input required v-model="zip" type="text" name="codePostal" placeholder="Code Postal" autocomplete="off"
            class="shadow-md border w-full h-10 px-3 py-2 text-gray-700 focus:outline-none focus:border-orange-500 focus:shadow-inner hover:shadow-inner mb-3 mr-3 rounded">
            </div>
                <div class="w-2/3 pl-2">
             <input required v-model="city" type="text" name="ville" placeholder="Ville" autocomplete="off"
            class="shadow-md border w-full h-10 px-3 py-2 text-gray-700 focus:outline-none focus:border-orange-500 focus:shadow-inner hover:shadow-inner mb-3 rounded">
            </div>
              </div>
             <input required v-model="password" type="password" name="password" placeholder="Mot de Passe" autocomplete="off"
            class="shadow-md border w-full h-10 px-3 py-2 text-gray-700 focus:outline-none focus:border-orange-500 focus:shadow-inner hover:shadow-inner mb-3 rounded">
        <input required v-model="c_password" type="password" name="password_conf" placeholder="Confirmation du Mot de Passe" autocomplete="off"
            class="shadow-md border w-full h-10 px-3 py-2 text-gray-700 focus:outline-none focus:border-orange-500 focus:shadow-inner hover:shadow-inner mb-3 rounded">
        <button  type="submit" class="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-lg focus:outline-none mt-5 shadow">Créer son Compte</button>
      </form>
      <br>
      <router-link to='/login'>
      <div class="border-t flex flex-row justify-center">
      <div class="text-xs mt-2 mr-3 text-gray-600">J'ai déjà un compte</div> 
        <button  type="submit" class="bg-transparent  text-orange-500 font-semibold hover:text-orange-600 py-1 px-1 rounded">
           Me connecter
        </button>
     </div>
      </router-link>
      <router-link to='/'>
      <div class="w-full text-xs text-gray-600">ou</div>
        <button  type="submit" class="w-full bg-gray-400 hover:bg-orange-500 text-white px-3 py-1 rounded text-lg focus:outline-none mt-5 shadow">
          Retourner sur le site
        </button>  
      </router-link>
      </div>
    </div>
        <img src="../assets/registerGame.jpg" alt="background" class="bject-cover object-center h-screen w-0 overflow-hidden md:w-7/12">

  </div>
</div>

</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Register",

  data() {
    return {
      email: "",
      password: "",
      c_password:"",
      username:"",
      street:"",
      zip:"",
      number:"",
      city:"",
      error:"",
      lat:"",
      lng:'',


    };
  },
  methods: {
    ...mapActions(["register"]),
    registerSubmit() {

        // VERIF CONFIRMATION DU MOT DE PASSE 
      if(this.password != this.c_password){
        this.error = "Les mots de passe ne sont pas identique";
      }else{
        // VERIF LONGUEUR MDP 
        if(this.password.length < 5 && this.password.length > 20){
          this.error = "Le mot de passe doit contenir minimum 5 char maximum 20"
          // VERIF ZIP 
        }else if(isNaN(this.zip)){
          this.error = "Le code postal doit être un nombre"
        }
        else if(isNaN(this.number)){
          this.error = "Le numero de rue doit être un nombre"
        }
        else{

           var requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                };
                // FETCH GOOGLE API POUR RECUPERER LA LNG et LAT

                fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.street + this.zip + this.city}&key=${process.env.VUE_APP_ENV_GOOGLE_API}`,
                  //fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.street + this.zip + this.city}&key=AIzaSyAs3BJtjP6MMUmpkRMPrMvHFq0_YaotfjM`,
                        requestOptions)
                    .then(response => response.json())
                    .then(result => {
                      if(result.status === "ZERO_RESULTS"){
                        this.error ="Message de renseigner une adresse valide"
                      }else{

                     
                      console.log(result);
                        this.lat = result.results[0].geometry.location.lat;
                        this.lng = result.results[0].geometry.location.lng;
                      var obj = {
                          email: this.email,
                          password: this.password,
                          username:this.username,
                          street:this.street,
                          zip:this.zip,
                          number:this.number,
                          city:this.city,
                          lat:this.lat,
                          lng:this.lng

                        };

                        this.register(obj);
                        
 }

                    })
                    .catch(error => console.log('error', error));

      console.log(this.getRegisterResponse)
        if (this.getRegisterResponse.success != null) {
                  setTimeout(function () {
                    window.location.href = "/login";
                  }, 2000);
                }
      
     
       }

      }
    },
  },
  computed: mapGetters(["getRegisterResponse"]),
  created(){
    this.getRegisterResponse.success = null;
    this.getRegisterResponse.error = null;
  }
};
</script>

<style>

</style>