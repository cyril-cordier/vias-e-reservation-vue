<template>
  <!-- toggle user update info -->

  <div>
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
          <p class="font-bold">Votre profil à été mis à Jour !</p>
        </div>
      </div>
    </div>

    <div v-if="error" role="alert">
      <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
        Error
      </div>
      <div
        class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
      >
        <p v-if="error">{{ error }}</p>
      </div>
    </div>


    <div class="rounded-lg text-light w-85 mx-auto p-10 bg-blue-300 flex flex-wrap">
            <div class="p-5 w-1/4 rounded-lg bg-blue-200 shadow-lg text-center ">
      <div class="flex justify-around">

      <img class="w-1/2  rounded-full mx-10" :src="userToEdit.avatar" alt="" />
      </div>
      <div class="mt-5 font-semibold text-blue-700">
      Modifier mon avatar
      </div>
      <select
        class="px-5 py-1 mt-10 font-semibold transform hover:scale-105 bg-blue-400 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-blue-700 hover:inner-shadow text-blue-800 hover:text-blue-100 px-2 py-1 rounded text-lg focus:outline-none shadow-lg"
        v-model="userToEdit.avatar"
        required
        id="avatar"
      >
        <option value="null" disabled>Modifier mon avatar</option>
        <option value="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1604356551/vias-e-reservation/avatars/Brutos_d2cxjy.png">Brutos</option>
        <option value="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1604356551/vias-e-reservation/avatars/Footy_xbo8ym.png">Footy</option>
        <option value="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1604356551/vias-e-reservation/avatars/Froggy_qtx0no.png">Froggy</option>
        <option value="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1604356551/vias-e-reservation/avatars/Glassos_xsctlx.png">Glassos</option>
        <option value="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1604356551/vias-e-reservation/avatars/Halloween_btinm7.png">Halloween</option>
        <option value="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1604356551/vias-e-reservation/avatars/Mask_zx8vs5.png">Mask</option>
        <option value="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1604356551/vias-e-reservation/avatars/Monstro_xawghs.png">Monstro</option>
        <option value="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1604356552/vias-e-reservation/avatars/Piranha_weiqnn.png">Piranha</option>
        <option value="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1604356552/vias-e-reservation/avatars/Porky_dymi0r.png">Porky</option>
        <option value="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1604356552/vias-e-reservation/avatars/Speedy_smvmc4.png">Speedy</option>
        <option value="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1604356552/vias-e-reservation/avatars/Sporty_q828pp.png">Sporty</option>
        <option value="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1604356552/vias-e-reservation/avatars/Tiger_yvhufc.png">Tiger</option>
      </select>
</div>
      

      <div class="w-8/12 inline-block p-auto m-auto shadow-lg py-6 px-8 rounded-lg bg-blue-200">
        <div class="mb-4 mx-8 border-b-2 border-blue-400">
          <h3 class="text-center text-blue-800 font-bold text-xl">
            Modifier mes Informations
          </h3>
        </div>

        <form @submit.prevent="editUser">
          <div class="form-group w-6/12 inline-block p-auto m-auto row">
            <label for="InputUsername" class="font-semibold text-blue-800 text-l ml-2"
              >Nom d'utilisateur :
            </label>
            <input
              type="text"
              v-model="userToEdit.username"
              class="form-input block w-full pl-7 pr-12 sm:text-xl sm:leading-5 rounded-lg p-2 mr-8 focus:outline-none focus:bg-white bg-orange-200 transition duration-500 ease-in-out text-blue-700"
              id="InputUsername"
              placeholder="Nom d'utilisateur"
              required
            />
          </div>
          <div class="form-group w-6/12 inline-block p-auto m-auto row">
            <label for="InputEmail" class="font-semibold text-blue-800 text-l ml-2"
              >Email :</label
            >
            <input
              type="email"
              v-model="userToEdit.email"
              class="form-input block w-full pl-7 pr-12 sm:text-xl sm:leading-5 rounded-lg m-2 p-2 focus:outline-none focus:bg-white bg-orange-200 transition duration-500 ease-in-out text-blue-700"
              id="InputEmail"
              aria-describedby="emailHelp"
              placeholder="Email"
              required
            />
          </div>
          <p class="m-10 font-semibold text-l text-blue-800 mt-3" v-if="getUserMe.profile.who_is == 'ND'">
            Statut : Compte en attente de validation par le gestionnaire
          </p>
          <p class="m-10 font-semibold text-l text-blue-800 mt-3" v-if="getUserMe.profile.who_is != 'ND'">
            Statut : {{getUserMe.profile.who_is}}
          </p>
         

          <br />
          <button
            class="px-5 py-1 m-10 font-semibold transform hover:scale-105 bg-blue-400 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-blue-700 hover:inner-shadow text-blue-800 hover:text-blue-100 rounded text-lg focus:outline-none shadow-md"
            type="submit"
          >
            <span>Enregistrer</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "EditUser",

  data() {
    return {
      user: "",
      modifySuccess: null,

      //USER

      error: "",
      lat: "",
      lng: "",
      userToEdit: "",
      successUpdate: null,
    };
  },
  methods: {
    ...mapActions(["fetchUserMe", "modifyUser"]),
    //EDIT D'UN USER

    editUser() {
      var emailActive = this.userToEdit.is_active
      if(this.userToEdit.email != this.userToEdit.is_active){
        emailActive = "No";
      }

          var obj = {
            email: this.userToEdit.email,
            username: this.userToEdit.username,
            who_is: this.userToEdit.who_is,
            id: this.userToEdit._id,
            avatar: this.userToEdit.avatar,
            is_admin: this.userToEdit.is_admin,
            is_active: emailActive
          };

          this.modifyUser(obj);
          console.log(this.getModifyResponse.success);
          if (this.getModifyResponse.success) {
            this.modifySuccess = this.getModifyResponse.success;
            this.fetchUserMe();
          this.userToEdit = this.getUserMe.profile;
              setTimeout(function () {
      location.reload();
    }, 1200);
        }
        
  },
  },

  mounted() {
    this.fetchUserMe();
    this.userToEdit = this.getUserMe.profile;
  },
  computed: {
    ...mapGetters(["getUserMe", "getModifyResponse"]),
  },

  created() {
    this.fetchUserMe();
    this.userToEdit = this.getUserMe.profile;
    this.modifySuccess = null;
  },
}
</script>

<style>
</style>