<template>

  <!-- toggle user update Password -->

  <div>
    <div v-if="success" class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
      role="alert">
      <div class="flex">
        <div class="py-1">
          <svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
        </div>
        <div>
          <p class="font-bold">Votre mot de passe à été mis à Jour !</p>
        </div>
      </div>
    </div>

    <div v-if="error" role="alert">
      <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
        Error
      </div>
      <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
        <p v-if="error">{{ error }}</p>
      </div>
    </div>
    

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
            <div class="mx-5">
              <div class="mb-4 mx-8 border-b-2 border-blue-400">
                <h3 class="text-center text-blue-800 font-bold text-xl">
                  Modifier mon mot de passe
                </h3>
              </div>
              <form @submit.prevent="editPassword()">
                <div class="form-group w-full inline-block p-auto m-auto row">
                  <label for="InputPassword" class="font-semibold text-l text-blue-800 ml-2">Mot de passe :</label>
                  <input type="password" v-model="password"
                    class="form-input block w-full pl-7 pr-12 sm:text-xl sm:leading-5 rounded-lg p-2 mr-8 focus:outline-none focus:bg-white bg-orange-200 transition duration-500 ease-in-out text-blue-700"
                    id="InputPassword" required placeholder="Mot de passe" />
                </div>
                <div class="form-group w-full inline-block p-auto m-auto row">
                  <label for="InputPasswordConfirmation" class="font-semibold text-blue-800 text-l ml-2">Confirmez le
                    mot de passe :</label>
                  <input type="password" v-model="c_password"
                    class="form-input block w-full pl-7 pr-12 sm:text-xl sm:leading-5 rounded-lg p-2 mr-8 focus:outline-none focus:bg-white bg-orange-200 transition duration-500 ease-in-out text-blue-700"
                    id="InputPasswordConfirmation" required placeholder="Confirmez le mot de passe" />
                </div>

                <br />
                <button
                  class="px-5 py-1 m-10 font-semibold transform hover:scale-105 bg-blue-400 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-blue-700 hover:inner-shadow text-blue-800 hover:text-blue-100 rounded text-lg focus:outline-none shadow-md"
                  type="submit">
                  <span>Enregistrer</span>
                </button>
              </form>
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
    name: "EditPassword",


    data() {
      return {
        user: "",
        success: null,
        error: null,


        //USER

        password: "",
        c_password: "",

        successUpdate: null,

      };
    },
    methods: {
      ...mapActions([
        "fetchUserMe",
        "modifyPwd",
      ]),

      editPassword() {
        if (this.password != this.c_password) {
          this.error = "Les mots de passe ne sont pas identique";
        } else {
          // VERIF LONGUEUR MDP 
          if (this.password.length < 5 && this.password.length > 20) {
            this.error = "Le mot de passe doit contenir minimum 5 char maximum 20"
          } else {
            var obj = {
              id: this.getUserMe.profile._id,
              password: this.password,
            };
            this.modifyPwd(obj);

            if (this.getModifyPwdResponse.success) {
              this.error = null;
              this.success = this.getModifyPwdResponse.success;
              setTimeout(function () {
                location.reload();
              }, 1200);
            }

          }
        }

      },
    },

    computed: {
      ...mapGetters([
        "getUserMe",
        "getModifyPwdResponse",
      ]),
    },
    created() {


      this.fetchUserMe();

    },
  }
</script>

<style>

</style>