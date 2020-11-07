<template>
  <div>

        
    <!-- Button trigger modal -->


    
    <h6 class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-8 m-2 rounded w-40">Réservations</h6>
    
    <!-- Reservation Table -->

        <div class="flex flex-col m-2 shadow-lg">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-blue-200">
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 border-b border-blue-200 bg-blue-50 text-xs leading-4 font-medium text-blue-500 uppercase tracking-wider text-center">
                  Locataire</th>
                <th
                  class="px-6 py-3 border-b border-blue-200 bg-blue-50 text-xs leading-4 font-medium text-blue-500 uppercase tracking-wider text-center">
                  Appartement</th>
                <th
                  class="px-6 py-3 border-b border-blue-200 bg-blue-50 text-xs leading-4 font-medium text-blue-500 uppercase tracking-wider text-center">
                  Date début</th>
                  <th
                  class="px-6 py-3 border-b border-blue-200 bg-blue-50 text-xs leading-4 font-medium text-blue-500 uppercase tracking-wider text-center">
                  Date fin</th>
                  
                <th
                  class="px-6 py-3 border-b border-blue-200 bg-blue-50 text-xs leading-4 font-medium text-blue-500 uppercase tracking-wider text-center">
                  Statut</th>
               <th class="px-6 py-3 border-b border-blue-200 bg-blue-50"></th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="reservation in getAllReservations.Reservation" :key="reservation._id">
                <td class="px-6 py-4 whitespace-no-wrap border-b border-blue-200">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        :src="reservation.borrowerId.avatar"
                        alt=""
                        class="h-10 w-10 rounded-full"
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-blue-900">{{reservation.borrowerId.username}}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-blue-200">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        :src="reservation.appartId.images[0]"
                        alt=""
                        class="h-10 w-10 rounded-full"
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-blue-900">{{reservation.appartId.name}}</div>
                    </div>
                  </div>
                </td>
                
                <td class="px-6 py-4 whitespace-no-wrap border-b border-blue-200">
                  <div class="text-sm leading-5 text-blue-900 text-center">{{reservation.start}}</div>

                </td>

                
                   <td class="px-6 py-4 whitespace-no-wrap border-b border-blue-200">
                  <div class="text-sm leading-5 text-blue-900 text-center">{{reservation.end}}</div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-blue-200">
                  <div 
                  class="text-sm leading-5 text-center "
                  v-if="reservation.status == 0">En attente</div>
                  <div 
                  class="text-sm leading-5 text-center font-semibold rounded-full bg-red-300 text-red-800"
                  v-if="reservation.status == 1">Refusée</div>
                  <div 
                  class="text-sm leading-5 text-center font-semibold rounded-full bg-green-300 text-green-800"
                  v-if="reservation.status == 2">Acceptée</div>
                </td>
                <td
                  class="px-1 py-4 whitespace-no-wrap  border-b border-blue-200 text-sm leading-5 font-medium">
                  
      <button 
      class="bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-2 rounded-full text-center"
      @click="toggleModal = !toggleModal, (reservToEdit = reservation)"

    >Modification</button>

    <div 
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
      v-if="toggleModal"
    >
        <div class="relative mx-auto w-auto max-w-2xl">
       <div class="bg-blue-500 w-full rounded shadow-2xl flex flex-col">

         <div class="text-2xl font-bold text-center mt-2"> Modification

           <button class="rounded bg-red-500 text-white text-center px-2 py-1 text-sm absolute top-0 right-0 m-3" @click="toggleModal=false">X</button> 
         </div>
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
                          <p class="font-bold">Réservation mise à jour avec succès</p>
                        </div>
                      </div>
                    </div>
         <form 
         @submit.prevent="modifyReservationSubmit"
         class="bg-white shadow-md rounded px-8 pt-6 pb-8 m-2 " >
           <div class="mb-4">
              <label class="block text-blue-700 text-sm font-bold mb-2" for="borrowerId">
               Locataire
              </label>
              <select
                  v-model="reservToEdit.borrowerId._id"
                  required
                  class="bg-white block shadow appearance-none w-full border border-blue-200 text-blue-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="grid-state"
                >
                  <option :value="null" disabled>Selectionner le locataire</option>
                  <option v-for="user in getAllUsers.users" :key="user._id" :value="user._id">
                    {{user.username}}
                  </option>
              
                </select>
           </div>
           
           <div class="mb-4">
              <label class="block text-blue-700 text-sm font-bold mb-2" for="startDate">
                Date début
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="startDate" 
                type="date" 
                placeholder="Date début"
                required
                v-model="reservToEdit.start"/>
           </div>
           <div class="mb-4">
              <label class="block text-blue-700 text-sm font-bold mb-2" for="endDate">
                Date fin
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="endDate" 
                type="date" 
                placeholder="Date fin"
                required
                v-model="reservToEdit.end"/>
           </div>
           <div class="mb-4">
              <label class="block text-blue-700 text-sm font-bold mb-2" for="appartId">
                Statut de la demande de location
              </label>
              <select
                  v-model="reservToEdit.status"
                  required
                  class="bg-white block shadow appearance-none w-full border border-blue-200 text-blue-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="grid-state"
                >
                  <option :value="null" disabled>Choisir la réponse</option>
                  <option value=0>En attente</option>
                  <option value=1>Refusée</option>
                  <option value=2>Acceptée</option>
              
                </select>
           </div>
           
            <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline" 
            type="submit"
            >Modifier</button>
         </form>       
         </div>
      </div>
    </div>
    <div v-if="toggleModal" class= "absolute inset-0 z-40  opacity-25 bg-black"></div></td>
                <td
                  class="px-6 py-4 whitespace-no-wrap text-right border-b border-blue-200 text-sm leading-5 font-medium">
                  <div class=" bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-1 rounded-full text-center w-20" style="cursor:pointer;" @click="deleteReservationButton(reservation._id)">Supprimer
                  </div>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";


  export default {
    name: "ReservationTable",
    data() {
      return {
        
        toggleModal: false,
        Modal: false, 
        reservToEdit:"",


        //Reservation
        ownerId:"",
        borrowerId:"",
        start:"",
        end:"",
        title:"",
        appartId:"",
        status:"",
        
      }
    },
    methods: {
      ...mapActions([
      'fetchAllReservations',
      "fetchReservationById",
      "createReservation",
      "deleteReservation",
      "modifyReservation",
      "fetchAllApparts",
      "fetchAllUsers"

      
    ]),
    reservationForm(){
      var obj = {
            ownerId:this.ownerId,
            borrowerId:this.borrowerId,
            start:this.start,
            end:this.end,
            title:this.title,
            status:this.status,
            appartId:this.appartId
      }
      this.createReservation(obj);
      this.fetchAllReservations();
    },

    modifyReservationSubmit() {
      var obj = {
        id:this.reservToEdit._id,
        ownerId:this.reservToEdit.ownerId._id,
        borrowerId:this.reservToEdit.borrowerId._id,
        start:this.reservToEdit.start,
        end:this.reservToEdit.end,
        title:this.reservToEdit.title,
        status:this.reservToEdit.status,
        appartId:this.reservToEdit.appartId._id
      };
      
      this.modifyReservation(obj);
      if (this.getModifyReservationResponse.success) {
            this.modifyError = null;
            this.modifySuccess = this.getModifyReservationResponse.success;
            setTimeout(function () {
              window.location.href = "/admin";
            }, 1000);
          }else{
            this.modifyError = this.getModifyReservationResponse.error;
          }
      this.fetchAllReservations();

    },

    deleteReservationButton(id) {
      this.fetchAllReservations();
      this.deleteReservation(id);
      this.fetchAllReservations();
    },
    
    },
    computed: {
    ...mapGetters([
      "getAllReservations",
      "getReservationById",
      "getAllUsers",
      "getAllApparts",
      "getModifyReservationResponse"
      
    ]),
    
    
    },
  
  created() {
    this.fetchAllReservations();
    this.fetchAllUsers();
    this.fetchAllApparts();
    this.modifySuccess = null;
    this.modifyError = null;
    },
    
  }
  

</script>

<style scoped>

</style>
