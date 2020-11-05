<template>
  <div>
    <!-- Button trigger modal -->
    <!-- modal create-appart -->
     <h6 class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-8 m-2 rounded w-56 text-center">Fiche Appartement</h6>

    <div class="flex flex-col m-2 shadow-lg">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-blue-200"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 border-b border-blue-200 bg-blue-50 text-xs leading-4 font-medium text-blue-500 uppercase tracking-wider text-center"
                >
                 Appartement
                </th>
                <th
                  class="px-6 py-3 border-b border-blue-200 bg-blue-50 text-xs leading-4 font-medium text-blue-500 uppercase tracking-wider text-center"
                >
                  Disponibilité
                </th>
                
                <th class="px-6 py-3 border-b border-blue-200 bg-blue-50"></th>
              </tr>
            </thead>
            <tbody class="bg-white" >
              <tr v-for="appart in getAllApparts.apparts" :key="appart._id">
                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-blue-200"
                >
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        :src="appart.images[0]"
                        alt=""
                        class="h-10 w-10 rounded-full"
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-blue-900">
                        {{ appart.name }}
                      </div>
                    </div>
                  </div>
                </td>
                
                

                <td
                  v-if="appart.available == true"
                  class="px-6 py-4 whitespace-no-wrap border-b border-blue-200 text-center"
                >
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-300 text-green-800"
                    >Disponible</span
                  >
                </td>

                <td
                  v-if="appart.available == false"
                  class="px-6 py-4 whitespace-no-wrap border-b border-blue-200 text-center"
                >
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-300 text-red-800"
                    >Non Disponible</span
                  >
                </td>
                
                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-blue-200"
                >
                  <div
                    class="text-sm leading-5 text-blue-900 text-center"
                  ></div>
                </td>

                <td
                  class="px-1 py-4 whitespace-no-wrap border-b border-blue-200 text-sm leading-5 font-medium"
                >
                  
                <td
                  class="px-6 py-4 whitespace-no-wrap text-right border-b border-blue-200 text-sm leading-5 font-medium"
                >
                  <div
                    class="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-1 rounded-full text-center w-20"
                    style="cursor: pointer"
                    @click="deleteAppartButton(appart._id)"
                  >
                    Supprimer
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
      Modal: false,
      appartToEdit: "",
      available: "",
      status: "",
      
    };
  },
  methods: {
    ...mapActions([
      "fetchAllApparts",
      "deleteAppart",
      "fetchAppartById",
    ]),
    deleteAppartButton(id) {
      this.fetchAllApparts();
      this.deleteAppart(id);
      this.fetchAllApparts();
    },

  },


  created() {
    this.fetchAllApparts();
    
  },
  computed: mapGetters([
    "getAllApparts",
    "getAppartById",
    "getAllCategories",
  ]),
};
</script>

<style scoped>
</style>