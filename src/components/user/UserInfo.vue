<template>

  <!-- toggle user Info -->


  <div>
    <div class="rounded-lg text-light w-85 mx-auto p-10 bg-blue-300 row">
      <div class="w-full inline-block p-auto m-auto">



        <div class="max-w-sm w-full lg:max-w-full lg:flex mb-5">
          <div
            class="lg:mr-5  flex justify-around h-auto flex flex-wrap lg:h-auto lg:w-64 flex-none bg-cover  bg-blue-200 shadow-lg mb-5 rounded text-center overflow-hidden">

            <img :src="getUserMe.profile.avatar" class="ptrl-5 mt-5 h-32 rounded-full " alt="appart image" />
            <div class="text-center font-bold text-xl text-blue-800 my-3">
              Espace Profil de<br>
              {{ getUserMe.profile.username }}<br />
            </div>
          </div>
          <div
            class="inline-block mb-5 p-auto m-auto shadow-lg py-6 ld:px-8 rounded-lg bg-blue-200 bg-white w-full  flex flex-col justify-center leading-normal">

            <div class="mt-6">
              <p class="m-10 font-semibold text-l text-blue-800 mt-3">
                Nom d'utilisateur : {{ getUserMe.profile.username }}
              </p>
              <p class="m-10 font-semibold text-l text-blue-800 mt-3">
                Email : {{ getUserMe.profile.email }}
              </p>
              <p class="m-10 font-semibold text-l text-blue-800 mt-3" v-if="getUserMe.profile.who_is == 'ND'">
                Statut : Compte en attente de validation par le gestionnaire
              </p>
              <p class="m-10 font-semibold text-l text-blue-800 mt-3" v-if="getUserMe.profile.who_is != 'ND'">
                Statut : {{getUserMe.profile.who_is}}
              </p>
            </div>
          </div>



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
    name: "UserInfo",


    data() {
      return {
        user: "",
        success: "",

        //USER
        username: "",
        email: "",
        who_is: "",
        error: "",
        avatar: "",
        lat: "",
        lng: "",
        userToEdit: "",
        successUpdate: null,
      };
    },
    methods: {
      ...mapActions([
        "fetchUserMe",
        "modifyUser",
      ]),
    },

    computed: {
      ...mapGetters([
        "getUserMe",
      ]),

    },

    created() {

      this.fetchUserMe();

    },
  };
</script>

<style>

</style>