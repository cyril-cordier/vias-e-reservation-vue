<template>

  <div>
        <Navbar />
    <div
      v-if="modifySuccess != null"
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
          <p class="font-bold">Votre adresse email à été validée ! <br> Votre compte doit maintenant être validé par le gestionnaire. Vous serez averti par email.</p>
        </div>
      </div>
    </div>

    <div v-if="error" role="alert">
      <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
        Erreur
      </div>
      <div
        class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
      >
        <p v-if="error">{{ error }}</p>
      </div>
    </div>

          <div class="mt-20 text-center font-bold text-xl text-blue-800 my-3">Validez votre adresse email en cliquant sur le bouton :</div>
    <div class="flex justify-around">

          

          <button
            class="px-5 py-1 m-10 mb-20 font-semibold transform hover:scale-105 bg-blue-400 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-blue-700 hover:inner-shadow text-blue-800 hover:text-blue-100 rounded text-lg focus:outline-none shadow-md"
            @click="activeUser()"
          >
            <span>Valider mon adresse email : <br>{{iUser[0].email}}</span>
          </button>
          
    </div>
        
      <Footer />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from 'emailjs-com';

export default {
  name: "ActiveUser",
  components: {
    Navbar,
    Footer,
  },

  data() {
    return {
      
      email:"",
      modifySuccess: null,

      //USER

      error: "",
      
      successUpdate: null,

      //TEMPLATE DE MAIL
      email_template: {
          informGestionnaire:"template_4jsuuic",
      }
    };
  },
  methods: {
    ...mapActions(["fetchAllUsers", "modifyUser"]),
    //EDIT D'UN USER

    activeUser() {
  
          var obj = {
            
            id: this.iUser[0]._id,
            email: this.iUser[0].email,
            username: this.iUser[0].username,
            who_is: this.iUser[0].who_is,
            avatar: this.iUser[0].avatar,
            is_admin: this.iUser[0].is_admin,
            is_active: this.iUser[0].email,
          };

          this.modifyUser(obj);
          console.log(this.getModifyResponse.success);
          if (this.getModifyResponse.success) {
            this.modifySuccess = this.getModifyResponse.success;

           var activeParams = {
        from_name : this.iUser[0].username,
        reply_to : this.iUser[0].email,
        message : this.iUser[0].username +" a créé un compte ou modifié son adresse email. Vérifiez son statut et activez son compte si besoin sur l'espace d'administration : "+process.env.VUE_APP_URL+"/admin",
        to_email : process.env.VUE_APP_TO_EMAIL
      }

       emailjs.send(process.env.VUE_APP_SERVICE_ID_RESPONSE, this.email_template.informGestionnaire, activeParams, process.env.VUE_APP_USER_ID_RESPONSE)
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
         
              /* setTimeout(function () {
            window.location.href = "/";
          }, 1500); */
        }
        
  },
  
  },

  
  computed: {
    ...mapGetters(["getAllUsers", "getModifyResponse"]),
    
    iUser(){

        return this.getAllUsers.users.filter(info => 
             info.email.toLowerCase().includes(this.$route.params.email.toLowerCase())
      
        );
        

      },
  },

  created() {
    this.fetchAllUsers();
    
    this.modifySuccess = null;
  },
}
</script>

<style>
</style>