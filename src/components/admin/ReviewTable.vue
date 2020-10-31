<template>
  <div>
    <!-- Button trigger modal -->
    <!-- modal create-galme -->
    <h6 class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-8 m-2 rounded w-40">Commentaires</h6>
    

    <div class="flex flex-col m-2 shadow-lg">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center">
                  Utilisateur noteur
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center">
                  Utilisateur noté
                </th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center">
                  Note
                </th>

                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="review in reviewOfUser" :key="review._id">
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        :src="review.userId.avatar"
                        alt=""
                        class="h-10 w-10 rounded-full"
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ review.userId.username }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    
                   
                      <div class="flex-shrink-0 h-10 w-10">
                      <img
                        :src="review.profileId.avatar"
                        alt=""
                        class="h-10 w-10 rounded-full"
                      />
                    </div> 
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ review.profileId.username }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">

                    </div>
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ review.mark }} / 5
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="text-sm leading-5 text-gray-900 text-center"></div>
                </td>

                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium"
                >
                  <button
                    class="bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-2 rounded-full text-center"
                    @click="(showModal = !showModal)"
                  >

                    Voir le commentaire

                  </button>
                  <div
                    class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
                    v-if="showModal"
                  >
                    <div class="relative mx-auto w-auto max-w-2xl">
                      <div
                        class="bg-gray-500 w-full rounded shadow-2xl flex flex-col"
                      >
                        <div class="text-2xl font-bold text-center mt-2">

                          Commentaire

                          <button
                            class="rounded bg-red-500 text-white text-center px-2 py-1 text-sm absolute top-0 right-0 m-1"
                            @click="showModal = false"
                          >
                            X
                          </button>
                        </div>

                        <form
                          
                          class="bg-white shadow-md rounded px-8 pt-6 pb-8 m-2"
                        >

                                                 
                          <div class="m-2 "><span class="font-bold">Utilisateur noteur: 
                            </span><div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        :src="review.userId.avatar"
                        alt=""
                        class="h-10 w-10 rounded-full"
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ review.userId.username }}
                      </div>
                    </div>
                  </div></div>
                          
                          <div class="m-2 "><span class="font-bold">Utilisateur noté : 
                            </span><div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        :src="review.profileId.avatar"
                        alt=""
                        class="h-10 w-10 rounded-full"
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-gray-900">
                        {{ review.profileId.username }}
                      </div>
                    </div>
                  </div></div>
                          <div class="m-2 "><span class="font-bold">Note : </span>{{ review.mark }}/ 5</div>
                          <p class="m-2 font-bold"> Commentaire :</p>
                          <div v-html="review.comment" 
                          class="border-2 border-orange-500 bg-orange-100 p-3 overflow-auto sm:overflow-visible md:overflow-hidden lg:overflow-x-scroll xl:overflow-y-scroll leading-5 h-32 rounded-md whitespace-normal text-justify m-2">
                            
                          </div>  
                        
                          
                          
                          <button
                            class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                            @click="showModal = false"
                          >
                            Fermer
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="showModal"
                    class="absolute inset-0 z-40 opacity-25 bg-black"
                  ></div>
                  <!-- fin du modal -->
                </td>
                

                <td
                  class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                  <div class="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-1 rounded-full text-center w-20"
                    style="cursor: pointer" @click="deleteReviewButton(review._id)">
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
  import {
    mapActions,
    mapGetters
  } from "vuex";
  

  export default {
    
    data() {
      return {

        Modal: false,
        toggleModal: false,
        showModal: false,
        createModal: false,
        success: "",
        error: "",
      };
    },
    methods: {
      ...mapActions([
        "fetchAllReviews",
        "deleteReview",


      ]),
      deleteReviewButton(id) {
        this.fetchAllReviews();
        this.deleteReview(id);
        this.fetchAllReviews();
      },

    },



    created() {
      this.fetchAllReviews();

    },
    computed:{

   
    ...mapGetters([
      "getAllReviews",
    ]),
    reviewOfUser() {
        
        return this.getAllReviews.Review.filter((review) => {
            if(review.gameId == null){
            return review
            }
        })
        
 } 
      },
  };
</script>

<style scoped>
</style>