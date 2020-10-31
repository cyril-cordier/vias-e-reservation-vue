<template>

  <!-- toggle user Info -->
  <div>
    <div class="rounded-lg text-light w-85 mx-auto p-10 bg-gray-300 flex flex-wrap">
      <div class="p-5 w-0.3 rounded-l-lg bg-gray-200 shadow-lg">
        <img class="w-64 rounded-full mx-10" :src="getUserMe.profile.avatar" alt="" />
        <div class="text-center font-bold text-xl text-gray-800 my-3">
          Espace Profil de<br>
          {{ getUserMe.profile.username }}<br />
        </div>
      </div>



      <div class="w-8/12 inline-block p-auto m-auto shadow-lg py-6 px-8 rounded-lg bg-gray-200">
        <div class="mt-6">
          <p class="m-10 font-semibold text-l text-gray-800 mt-3">
            Nom d'utilisateur : {{ getUserMe.profile.username }}
          </p>
          <p class="m-10 font-semibold text-l text-gray-800 mt-3">
            Email : {{ getUserMe.profile.email }}
          </p>
          <p class="m-10 font-semibold text-l text-gray-800 mt-3" v-if="getUserMe.profile.who_is == 'ND'">
            Statut : Compte en attente de validation par le gestionnaire
          </p>
          <p class="m-10 font-semibold text-l text-gray-800 mt-3" v-if="getUserMe.profile.who_is != 'ND'">
            Statut : {{getUserMe.profile.who_is}}
          </p>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import { mapActions, mapGetters } from "vuex";

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
      successUpdate: "",

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