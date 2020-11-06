<template>
    <div>




    <div class="flex flex-col mx-20">
  
  <div class="mb-6 p-3 bg-orange-300 shadow rounded text-blue-700">
    <h2 class="text-center font-bold text-xl">Mes locations</h2>

    <h5 class="text-center ">Retrouvez ici toutes vos locations et les demandes en attente</h5>
</div>


<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 m-3">

			<div v-for="reservation in reservationOfUser" :key="reservation._id" class="flex flex-col items-center justify-center bg-white p-4 shadow-lg rounded-lg">
				<div class="inline-flex  overflow-hidden h-40 w-40">
					<img :src="reservation.appartId.images[0]" class="h-full w-full">
				</div>

				<h2 class="mt-4 font-bold text-xl text-center">Gestionnaires :<br>C. PRAVDA / M. PUGIN	
        
        </h2>
				<h6 class="mt-2 text-normal font-medium">Appartement : {{reservation.appartId.name}}</h6>
        <router-link :to="'/appartements/'+reservation.appartId._id"  
        class="px-3 py-1 m-5 w-2.5/6 font-semibold transform hover:scale-105 bg-blue-200 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-blue-700 hover:inner-shadow text-blue-800 hover:text-blue-100 rounded text-lg focus:outline-none shadow">
        Détails Appart.</router-link>

				<p class="text-sm text-blue-500 text-center mt-3">
					Debut: {{reservation.start}}
				</p>
				<p class="text-sm text-blue-500 text-center mt-3">
					Fin: {{reservation.end}}
				</p>

				<ul class="flex flex-col mt-4">
					<li>
						<div v-if="reservation.status == 2"
                  class="px-6 py-4 whitespace-no-wrap text-center"
                >
                  <p
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-800 px-6 py-2 shadow-lg"
                    >{{reservation.ownerId.username}} a accepté de vous louer<br>{{reservation.appartId.name}}</p>
                    <h4 class="mt-4 text-xs text-center">Contacter le gestionnaire :<br><a :href="'mailto:'+gestionnaires">{{gestionnaires}}</a></h4>
						</div>
            <div v-if="reservation.status == 1"
                  class="px-6 py-4 whitespace-no-wrap text-center"
                >
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-red-800"
                    >Refusé</span>
						</div>
            <div v-if="reservation.status == 0"
                  class="px-6 py-4 whitespace-no-wrap text-center"
                >
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-grey-200 text-grey-800"
                    >En Attente</span>
						</div>
					</li>
					<li>
						<div v-if="reservation.status == 2"
                  class="px-6 py-4 whitespace-no-wrap text-center"
                >
                  <button 
                    class=" hover:bg-red-700 text-red-500 hover:text-white text-sm font-bold py-1 px-2 mx-3 rounded text-center focus:outline-none transform hover:scale-110 transition duration-1000 ease-in-out"
                    @click="Modal = !Modal"
                    >Signaler un Problème 
                </button>
                    <div 
                    class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
                    v-if="Modal"
                    >
                    <div class="relative mx-auto w-1/2 max-w-5xl">

                  <div class="bg-blue-500 w-full rounded shadow-2xl flex flex-col">

                    <div class="text-2xl font-bold text-center mt-2"> Signalement
                      <button class="rounded bg-red-600 hover:bg-red-400 text-white text-center px-2 py-1 text-sm absolute top-0 right-0 m-2" @click="Modal=false">X</button> 
                    </div>
                    
                    <form 
                      @submit.prevent="createWarningSubmit(reservation)"
                    class="bg-white shadow-md rounded px-8 pt-6 pb-8 m-2 " >
                    <!-- MESSAGE SIGNALEMENT SUCCESS  -->
                <div
                v-if="createSuccess != null"
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
                    <p class="font-bold">Signalement envoyé au gestionnaire</p>
                    </div>
                </div>
                </div>
                      <div class="mb-4 ">
                          <label class="block text-blue-700 text-sm font-bold mb-2 " for="warning">
                          Signalement d'un problème avec une location
                          </label>
                          <textarea   
                          v-model="content"
                          class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline" 
                          id="warning" 
                          type="text" 
                          required
                          placeholder="Saisir ici le contenu">
                          </textarea>
                      </div>
                      
                        <button 
                        class="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 w-full rounded focus:outline-none focus:shadow-outline" 
                        type="submit">
                        Envoyer le signalement au gestionnaire
                        </button>

                    </form>       
                    </div>
                  </div>
                </div>
                <div v-if="Modal" class= "absolute inset-0 z-40 opacity-25 bg-black"></div>
						</div>
                <!-- MODAL FINISH -->
					</li>
				</ul>
			</div>

		</div>












            <!-- <form class="w-1/2 border p-3 bg-blue-200 rounded mx-auto">
                <label class="block text-blue-700 text-lg font-bold mb-2 text-center" for="nomdujeu">
                Votre jeu XXXXXX intéresse quelqu'un !
                </label>
                 <textarea
                 class="text-center shadow appearance-none border rounded w-full h-64 py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                 type="text"
                 id="msgborrower"
                 >
                 Bonjour XXXXX,                
                 </textarea>
                <div class="flex flex-row justify-around mt-2">
                    <button
                        class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-2 rounded text-center w-1/4"
                        type="submit"
                    >
                        Oui
                    </button>
                    <button
                        class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-2 rounded text-center w-1/4"
                        type="submit"
                    >
                        Non
                    </button>
                </div>
            </form> -->

            
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import emailjs from 'emailjs-com';

export default {
  data(){
    return{
      Modal:"",
      createSuccess:null,
      gestionnaires : process.env.VUE_APP_TO_EMAIL,
      email_template: {
        message:"template_zdzj1jd",

      }
    }
  },
  methods:{
      ...mapActions([
      "fetchAllReservations",
      "fetchUserMe",
      "createWarning",
    ]),
    createWarningSubmit(reservation){
          var obj = {
        userId: reservation.borrowerId._id,
        targetId: reservation.appartId._id,
        content: this.content,
        subject: "Pb avec la location",
        
      };
      
      this.createWarning(obj);
      if (this.getCreateWarningResponse.success) {
        this.createSuccess = this.getCreateWarningResponse.success;
        var warningParams = {
        from_name : this.getUserMe.profile.username,
        reply_to : this.getUserMe.profile.email,
        message : "Signalement : "+this.content,
        to_email : process.env.VUE_APP_TO_EMAIL,
      }

      emailjs.send(process.env.VUE_APP_SERVICE_ID, this.email_template.message, warningParams, process.env.VUE_APP_USER_ID)
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
        setTimeout(function () {
          location.reload();
        }, 1200);
      }
    },
  },
  computed: {
    ...mapGetters([
      "getAllReservations",
            "getUserMe",
            "getCreateWarningResponse"
    ]),
    reservationOfUser() {
      return this.getAllReservations.Reservation.filter((reservation) =>
        reservation.borrowerId._id
          .toLowerCase()
          .includes(this.getUserMe.profile._id.toLowerCase())
      );
    },
    
  },
   created() {

    this.fetchUserMe();
    this.fetchAllReservations();
    this.createSuccess = null;
    
  },

    
}
</script>

<style scoped>

</style>