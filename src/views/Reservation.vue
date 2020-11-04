<template>
    <div class="Reservation">
       <Navbar/>
       <div class=" mt-4">
            <div class="p-3 m-5 w-85 mx-auto">
        <div class="grid grid-flow-col grid-rows-2 xl:grid-rows-1 lg:grid-rows-1 md:grid-rows-2 sm:grid-rows-2">
<button
            class="px-2 py-2 m-4 text-blue-700 font-semibold transition duration-500 ease-in-out transform hover:scale-105 bg-blue-200 hover:bg-orange-400  focus:bg-orange-400 focus:text-blue-700 hover:inner-shadow hover:text-blue-100 rounded text-lg focus:outline-none shadow"
            v-if="this.getUserMe.profile.who_is == 'Gestionnaire' || this.getUserMe.profile.who_is == 'Administrateur'"
            @click="
            (pret_toggle = true),
                (emprunt_toggle = false)
            "
          >
            Mes locataires
          </button>
          <button
            class="px-2 py-2 m-4 text-blue-700 font-semibold transition duration-500 ease-in-out transform hover:scale-105 bg-blue-200 hover:bg-orange-400  focus:bg-orange-400 focus:text-blue-700 hover:inner-shadow hover:text-blue-100 rounded text-lg focus:outline-none shadow"
            @click="
              (pret_toggle = false),
                (emprunt_toggle = true)
            "
          >
            Mes Emprunts
          </button>
        </div>
            </div>


           <Borrower v-show="pret_toggle"/>
           <Lender v-show="emprunt_toggle"/>
       </div>
        <Footer/>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import Borrower from "../components/reservation/Borrower.vue"
import Lender from "../components/reservation/Lender.vue"
import { mapActions, mapGetters } from "vuex";

export default {
    name:"Reservation",
    components:{
        Navbar,
        Footer,
        Borrower,
        Lender
    },
    data() {
    return {
      
      pret_toggle: false,
      emprunt_toggle: false,

      
    };
},
methods: {
    ...mapActions([
      "fetchUserMe",
      
    ]),
    
  },
  
  computed: {
    ...mapGetters([
      "getUserMe",
      
    ]),
    
    },
  
  created() {
    this.fetchUserMe();
    if(this.getUserMe.profile.who_is === 'Gestionnaire' || this.getUserMe.profile.who_is === 'Administrateur'){
      this.pret_toggle= true;
    }else{
      this.emprunt_toggle= true;
    }
    
  },
}
</script>
