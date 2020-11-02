<template>
    <div class="Review">
       <Navbar/>
       <div class="h-full my-4">
           <div class="flex  sm:flex-col">
            <div class="border border-b-0 w-2/3 flex flex-row p-3 mx-auto lg:justify-around">
               
                <div class="">
                        <img src="../assets/avatar/Speedy.png" class="w-20 cover rounded-full" alt="">
                </div>  
                <div class=" p-3 W-1/3 mr-3"> 
                    Nom utilisateur: {{getUserById.user[0].username}}<br>
                    Ville: {{getUserById.user[0].city}} <br>
                    </div>
                    <div class=" p-3 W-1/3"> 
                 
                        <div class="flex items-center">

                    
                    <div class="text-blue-600 ml-3">{{reviewOfUser.length}} Avis</div>
                
                    </div>
                        <div v-if="markResult >= 3" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-800 px-6 py-2 shadow-lg">Note Moyenne : {{markResult}} </div>
                         <div v-if="markResult < 3 && markResult != 0" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-red-800 px-6 py-2 shadow-lg">Note Moyenne : {{markResult}} </div>
                    <!-- STAR REVIEWS FINISH -->

                    </div>
             
            </div>
            <!-- images -->
            <div class="w-2/3 mx-auto border border-t-0 mb-3 ">
                <div class="m-3">Les autres jeux de <span class="text-orange-500">{{getUserById.user[0].username}}</span></div> 
               <div class="grid grid-cols-6 gap-4">
                    <div v-for="appart in appartOfUser" :key="appart._id" class="w-32 m-3">
                      
                        <router-link :to="'/appartements/'+appart._id"> <img :src="appart.images[0]"
                            class="shadow-xl"
                            alt="appart image"/></router-link>
                       
                      </div>
                    </div>   
              </div>

               <!-- COMMENTAIRES -->  

            <div class="border-l-2 border-orange-400  w-2/3 mx-auto p-3">
                <form @submit.prevent="postReview" v-if="getUserMe.profile && getUserMe.profile._id != this.$route.params.id " class="border p-3" action="">
                  <!-- MESSAGE CREATE SUCCESS  -->
                        <div v-if="getCreateReviewResponse.success"
                            class="bg-teal-100 border-t-4 mt-5 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                            role="alert">
                            <div class="flex">
                                <div class="py-1">
                                    <svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="font-bold">Votre avis vient d'etre publié avec succès </p>
                                </div>
                            </div>
                        </div>

                        <!-- MESSAGE APPART ERROR  -->

                        <div v-if="getCreateReviewResponse.error" role="alert">
                            <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                                Erreur
                            </div>
                            <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                                <p>Merci de verifier les informations</p>
                            </div>
                        </div>
                    <textarea v-model="comment" required name="" id="" cols="30" rows="10" class="border w-full h-20"></textarea>
                    <div class="flex flex-row">
                         <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 text-orange-400 my-auto"
                        viewBox="0 0 24 24"
                    >
                        <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        ></path>
                    </svg>
                        <select v-model="mark" required name=" " id="" class=" bg-white m-4">
                            <option class="p-4" value=" 1 "> 1 </option>
                            <option value=" 2 "> 2 </option>
                            <option value=" 3 "> 3 </option>
                            <option value=" 4 "> 4 </option>
                            <option value=" 5 "> 5 </option>
                        </select>
                        <button type="submit" class=" bg-orange-200 hover:bg-orange-500 hover:text-white px-3 my-auto h-8 rounded text-lg focus:outline-none shadow">
                        Donnez votre avis
                        </button>
                    </div>
                 </form>

                            <!-- COMMENTS  -->
                                      <div class="text-center "><h2>Les avis</h2></div>
                <div v-for="review in reviewOfUser" :key="review._id" class="border p-3 mt-3">
          
                    <div >{{review.mark}}/ 5</div> 
                    <div>{{review.userId.username}} </div>
                    <div class=" mt-3">{{review.comment}}</div>
                     <button 
                    class=" bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-2 rounded-full text-center mt-5 cursor-pointer" 
                   v-if=" getUserMe.profile && getUserMe.profile._id == review.userId._id "
                    @click="deleteReviewButton(review._id)"
                    >
                    Supprimer votre avis 
                  </button>
                </div> 

            </div>
           </div>
           
       </div> 
        <Footer/>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import { mapActions, mapGetters } from "vuex";


export default {
    name:"Review",
    components:{
        Navbar,
        Footer,
        
    },
    data() {
    return {
    mark:"",
    comment:"",
    markResult:"",

    };
  },
  methods: {
    ...mapActions([
      "fetchUserMe",
      "fetchUserById",
      "fetchAllReviews",
      "createReview",
      "fetchAllApparts",
      "deleteReview"
    ]),
    postReview(){
    var obj = {
            "comment":this.comment,
            "mark":this.mark,
            "userId":this.getUserMe.profile._id,
            "profileId":this.$route.params.id,
            "appartId":null,
    } 
    this.createReview(obj);
   
                  setTimeout(function () {
                   location.reload();
                  }, 1200);
                
    
    },
    markCalc(){
        var count = 0;
        this.reviewOfUser.forEach(element => {
            count += parseInt(element.mark);
        });
        this.markResult = Math.round(count / this.reviewOfUser.length);
        
    },
      deleteReviewButton(id) {
        this.fetchAllReviews();
        this.deleteReview(id);
        this.fetchAllReviews();
      },
  },
  
  computed: {
    ...mapGetters([
      "getUserMe",
      "getUserById",
      "getAllReviews",
      "getAllApparts",
      "getCreateReviewResponse"

    ]),
    reviewOfUser() {
        return this.getAllReviews.Review.filter((review) => {
            if(review.appartId == null && review.profileId){
            return review.profileId._id
            .toLowerCase()
            .includes(this.$route.params.id.toLowerCase())
                }
            }
        );
    
    },
     appartOfUser() {
      return this.getAllApparts.apparts.filter((appart) =>
        appart.userId._id
         .toLowerCase()
          .includes(this.$route.params.id.toLowerCase())
      );
    },

    
    },
  
  created() {
 this.fetchAllReviews();
    this.fetchUserMe();
   
    this.fetchAllApparts();
    this.fetchUserById(this.$route.params.id)
    this.getCreateReviewResponse.success = null;
    this.getCreateReviewResponse.error = null;
    this.markCalc();
    
  },
}
</script>

<style  scoped>

</style>