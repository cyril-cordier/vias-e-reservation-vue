<template>
  <div class="Reservation">
    <Navbar />
    <div v-if="getUserMe.profile.who_is == 'ND'">
      <div class="mt-20 text-center font-bold text-xl text-blue-800 my-3">Votre compte n'a pas encoré été validé par le
        gestionnaire.</div>
      <div class="my-10 text-center font-bold text-l text-blue-800 my-3">Vous serez informé par mail sur l'adresse
        {{getUserMe.profile.email}} dès que votre compte sera actif.</div>
      
        
        <Activation v-if="getUserMe.profile.is_active == 'No'"/>

      
    </div>
    <div class=" mt-4" v-if="getUserMe.profile.who_is != 'ND'">

      <div class="p-3 m-5 w-85 mx-auto">
        <div class="grid grid-flow-col grid-rows-2 xl:grid-rows-1 lg:grid-rows-1 md:grid-rows-2 sm:grid-rows-2">
          <button
            class="px-2 py-2 m-4 text-blue-700 font-semibold transition duration-500 ease-in-out transform hover:scale-105 bg-blue-200 hover:bg-orange-400  focus:bg-orange-400 focus:text-blue-700 hover:inner-shadow hover:text-blue-100 rounded text-lg focus:outline-none shadow"
            v-if="this.getUserMe.profile.who_is == 'Gestionnaire' || this.getUserMe.profile.who_is == 'Administrateur'"
            @click="
            (pret_toggle = true),
                (emprunt_toggle = false)
            ">
            Mes locataires
          </button>
          <button
            class="px-2 py-2 m-4 text-blue-700 font-semibold transition duration-500 ease-in-out transform hover:scale-105 bg-blue-200 hover:bg-orange-400  focus:bg-orange-400 focus:text-blue-700 hover:inner-shadow hover:text-blue-100 rounded text-lg focus:outline-none shadow"
            @click="
              (pret_toggle = false),
                (emprunt_toggle = true)
            ">
            Mes Locations
          </button>
        </div>
      </div>


      <Borrower v-show="pret_toggle" />
      <Lender v-show="emprunt_toggle" />
    </div>
    <Footer />
  </div>
</template>

<script>
  import Navbar from "../components/Navbar.vue"
  import Footer from "../components/Footer.vue"
  import Borrower from "../components/reservation/Borrower.vue"
  import Lender from "../components/reservation/Lender.vue"
  import Activation from "../components/activation/Activation.vue"
  import {
    mapActions,
    mapGetters
  } from "vuex";


  export default {
    name: "Reservation",
    components: {
      Navbar,
      Footer,
      Borrower,
      Lender, 
      Activation
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
      if (this.getUserMe.profile.who_is === 'Gestionnaire' || this.getUserMe.profile.who_is === 'Administrateur') {
        this.pret_toggle = true;
      } else {
        this.emprunt_toggle = true;
      }

    },
  }
</script>