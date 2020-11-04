<template>
    <div>
    


    <div class="flex flex-col mx-20">

<div class="mb-6 p-3 bg-orange-300 shadow rounded text-blue-700">
    <h2 class="text-center font-bold text-xl">Mes Locataires</h2>

    <h5 class="text-center ">Retrouvez ici toutes les locataires et les demandes en attente</h5>
</div>


<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 m-3">

			<div v-for="reservation in getAllReservations.Reservation" :key="reservation._id" class="flex flex-col items-center justify-center bg-white p-4 shadow-lg rounded-lg">
				<div class="inline-flex  overflow-hidden h-40 w-40">
					<img :src="reservation.appartId.images[0]" class="h-full w-full">
				</div>

				<h2 class="mt-4 font-bold text-xl text-center">Locataire : <br>{{reservation.borrowerId.username}}	
        <div class="inline-flex shadow-lg border border-blue-200 rounded-full overflow-hidden h-10 w-10">
					<img :src="reservation.borrowerId.avatar" class="h-full w-full">
				</div>
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
                    >Vous avez accepté de louer<br>{{reservation.appartId.name}}<br>à {{reservation.borrowerId.username}}</p>
                    <h4 class="mt-4 text-normal text-center">Vous pouvez contacter le locataire : <br><a :href="'mailto:'+reservation.borrowerId.email">{{reservation.borrowerId.email}}</a></h4>
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
						<div v-if="reservation.status == 0"
                  class="whitespace-no-wrap text-sm leading-5 font-medium align-center text-center"
                >
                  <button @click="acceptReservation(reservation)"
                    class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-2 mx-3 rounded text-center focus:outline-none transform hover:scale-110 transition duration-1000 ease-in-out"
                  >

                    ACCEPTER

                  </button>
                 

                  <button @click="refuseReservation(reservation)"
                    class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-2 mx-3 rounded text-center focus:outline-none transform hover:scale-110 transition duration-1000 ease-in-out"
                  >

                    REFUSER

                  </button>
                  </div>
					</li>
				
				</ul>
			</div>

		</div>


  </div>

                </div>
</template>

<script>
 import { mapActions, mapGetters } from "vuex";
export default {
  data(){
    return{
      Modal:"",
      content:"",
      createSuccess:null,
      
    }
  },
  methods:{
      ...mapActions([
      "fetchAllReservations",
      "fetchUserMe",
      "modifyReservation",
      "createWarning",
    ]),
     acceptReservation(reservation){
          var obj = {
        id:reservation._id,
        ownerId:reservation.ownerId._id,
        borrowerId:reservation.borrowerId._id,
        start:reservation.start,
        end:reservation.end,
        title:reservation.title,
        status:"2",
        appartId:reservation.appartId._id
      };
      
      this.modifyReservation(obj);
      this.fetchAllReservations();
      setTimeout(function () {
          location.reload();
        }, 1000);

    },
    refuseReservation(reservation){
        var obj = {
        id:reservation._id,
        ownerId:reservation.ownerId._id,
        borrowerId:reservation.borrowerId._id,
        start:reservation.start,
        end:reservation.end,
        title:reservation.title,
        status:"1",
        appartId:reservation.appartId._id
      };
      
      this.modifyReservation(obj);
      this.fetchAllReservations();
      setTimeout(function () {
          location.reload();
        }, 1000);
    },

    createWarningSubmit(reservation){
          var obj = {
        userId: reservation.ownerId._id,
        targetId: reservation.borrowerId._id,
        content: this.content,
        subject: "Pb avec un prêteur",
        
      };
      
      this.createWarning(obj);
      
      if (this.getCreateWarningResponse.success) {
        this.createSuccess = this.getCreateWarningResponse.success;
        setTimeout(function () {
          location.reload();
        }, 2000);
      }

    },
  },
  computed: {
    ...mapGetters([
      "getAllReservations",
      "getUserMe",
      "getCreateWarningResponse"
            
    ]),
    /* reservationOfUser() {
      if(this.getAllReservations.Reservation){
      return this.getAllReservations.Reservation.filter((reservation) =>
        reservation.ownerId._id
          .toLowerCase()
          .includes(this.getUserMe.profile._id.toLowerCase())
      );
      }
      return false;
    }, */
   
    
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