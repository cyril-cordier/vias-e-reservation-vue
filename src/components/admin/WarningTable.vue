<template>
  <div>
<h6 class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-12 m-2 rounded w-64">Contenu signalé</h6>
        <div class="flex flex-col m-2 shadow-lg">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Nom de l'utilisateur</th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Utilisateur signalé</th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Sujet</th>
              <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Statut</th>
                  
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="warning in getAllWarnings.Warning" :key="warning._id">
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10"><img
                        :src="warning.userId.avatar"
                        alt="" class="h-10 w-10 rounded-full"></div>
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-gray-900">{{warning.userId.username}}</div>

                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10"><img
                        :src="warning.targetId.avatar"
                        alt="" class="h-10 w-10 rounded-full"></div>
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-gray-900">{{warning.targetId.username}}</div>

                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-gray-900">{{warning.subject}}</div>

                    </div>
                  </div>
                </td>
                
                
                <td
                  v-if="warning.status == 'Traité'"
                  class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center"
                >
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >{{ warning.status }}</span
                  >
                </td>
                <td
                  v-if="warning.status == 'En attente'"
                  class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center"
                >
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
                    >{{ warning.status }}</span
                  >
                </td>

                <!-- début du modal edit -->
                

                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium"
                >
                  <button
                    class="bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-2 rounded-full text-center"
                    @click="(editModal = !editModal), (warningToEdit = warning)"
                  >

                    Voir et traiter le signalement

                  </button>
                  <div
                    class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
                    v-if="editModal"
                  >
                    <div class="relative mx-auto w-auto max-w-2xl">
                      <div
                        class="bg-gray-500 w-full rounded shadow-2xl flex flex-col"
                      >
                        <div class="text-2xl font-bold text-center mt-2">

                          Détail du signalement

                          <button
                            class="rounded bg-red-500 text-white text-center px-2 py-1 text-sm absolute top-0 right-0 m-1"
                            @click="editModal = false"
                          >
                            X
                          </button>
                        </div>

                        <form
                          @submit.prevent="editWarningSubmit"
                          class="bg-white shadow-md rounded px-8 pt-6 pb-8 m-2"
                        >

                        <!-- MESSAGE MODIFY SUCCESS  -->
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
                          <p class="font-bold">Signalement mis à jour avec succès</p>
                        </div>
                      </div>
                    </div>
                          
                          <div class="m-2 "><span class="font-bold">Sujet: </span>{{ warningToEdit.subject }}</div>
                          
                          <div class="m-2 "><span class="font-bold">Origine : </span>{{ warningToEdit.userId.username }}</div>
                          <div class="m-2 "><span class="font-bold">A propos de : </span>{{ warningToEdit.targetId.username }}</div>
                          <p class="m-2 font-bold"> Signalement :</p>
                          <div v-html="warningToEdit.content" 
                          class="border-2 border-orange-500 bg-orange-100 p-3 overflow-auto sm:overflow-visible md:overflow-hidden lg:overflow-x-scroll xl:overflow-y-scroll leading-5 h-32 rounded-md whitespace-normal text-justify m-2">
                            
                          </div>  
                          
                          <div class="mb-4">
                            <label
                              class="block text-gray-700 text-sm font-bold mb-2"
                              for="status"
                            >
                              Statut du signalement
                            </label>
                                <select
                                  v-model="warningToEdit.status"
                                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                  id="status"
                              >
                                  <option value="En attente">En attente</option>
                                  <option value="Traité">Traité</option>
                                </select>
                          </div>
                        
                          
                          
                          <button
                            class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                          >
                            Modifier
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="editModal"
                    class="absolute inset-0 z-40 opacity-25 bg-black"
                  ></div>
                  <!-- fin du modal -->
                </td>
                
                <td
                  class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                  <div class= "bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-1 rounded-full text-center w-20" style="cursor:pointer;" @click="deleteWarningButton(warning._id)">Supprimer
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
  data() {
    return {
      username:"",
      avatar:"",
      editModal: false,
      warningToEdit: "",
      modifySuccess:"",
      modifyError:"",
      

      
    };
  },
  methods: {
    ...mapActions([
      "fetchAllWarnings", "deleteWarning", "modifyWarning"]),

    deleteWarningButton(id) {
      this.fetchAllWarnings();
      this.deleteWarning(id);
      this.fetchAllWarnings();
    },

    editWarningSubmit() {
          var obj = {
            
            status: this.warningToEdit.status,
            id: this.warningToEdit._id
          };

          this.modifyWarning(obj);

          
          

          if (this.getModifyWarningResponse.success) {
            this.modifyError = null;
            this.modifySuccess = this.getModifyWarningResponse.success;
            setTimeout(function () {
              window.location.href = "/admin";
            }, 1000);
          }else{
            this.modifyError = this.getModifyWarningResponse.error;
          }
          this.fetchAllWarnings();
        },
    

    
  },
  computed: mapGetters([
    "getAllWarnings", 
    "getModifyWarningResponse",
    ]),
  created() {
    this.fetchAllWarnings();
    this.modifySuccess = null;
    this.modifyError = null;
    
  },
  
};
</script>

<style scoped>

</style>
