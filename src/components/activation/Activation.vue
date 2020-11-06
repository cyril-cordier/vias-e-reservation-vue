<template>
  <div class=" py-5 my-5 bg-yellow-300 ">

          <div class="text-center font-bold text-xl text-blue-800 ">Vous devez valider votre adresse email. </div>
          <div class="flex justify-around">

            <div class=" text-center font-bold text-l text-blue-800 ">Appuyez sur ce bouton pour envoyer un mail de
              validation à {{getUserMe.profile.email}} et suivez les instructions.
              <br>
              <button
                class="px-5 py-1 mt-5 font-semibold transform hover:scale-105 bg-blue-400 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-blue-700 hover:inner-shadow text-blue-800 hover:text-blue-100 rounded text-lg focus:outline-none shadow-md"
                @click="sendActivation()">
                <span>Envoyer le mail de validation</span>
              </button>
            </div>
          </div>
        </div>
</template>

<script>

import emailjs from 'emailjs-com';
import { mapActions, mapGetters } from "vuex";

export default {
data() {
    return {
      email_template: {
          activation:"template_4jsuuic",
      }
      
    };

},
methods: {
    ...mapActions([
      "fetchUserMe",
      
    ]),
    sendActivation(){
      var demandeResaParams = {
        from_name : this.getUserMe.profile.username,
        reply_to : process.env.VUE_APP_TO_EMAIL,
        message : "Merci de cliquer sur ce lien pour activer votre adresse email : http://192.168.1.49:8080/activeuser/"+this.getUserMe.profile.email,
        to_email : this.getUserMe.profile.email,
      }

       emailjs.send(process.env.VUE_APP_SERVICE_ID_RESPONSE, this.email_template.activation, demandeResaParams, process.env.VUE_APP_USER_ID_RESPONSE)
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        }); 
    }
    
  },
  computed: {
    ...mapGetters([
      "getUserMe",
      
    ]),
    
    },
  
  created() {
    this.fetchUserMe();
    
  },
}
</script>

<style>

</style>