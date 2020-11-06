<template>
  <div >
    
    <!-- modal create-user -->
    <button
      class="text-white rounded bg-orange-500 px-20 font-bold py-1 m-2 sahdow-lg hover:bg-orange-400"
      @click="toggleModal = !toggleModal"
    >
      Création nouveau utilisateur
    </button>
    <div
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
      v-if="toggleModal"
    >
      <div class="relative mx-auto w-auto max-w-2xl">
       

        <div class="bg-blue-500 w-full rounded shadow-2xl flex flex-col">
          <div class="text-2xl font-bold text-center mt-2" >
            Création utilisateur
            <button
              class="rounded bg-red-500 text-white text-center px-2 py-1 text-sm absolute top-0 right-0 m-3"
              @click="toggleModal = false"
            >
              X
            </button>
          </div>

          <form
            @submit.prevent="registerSubmit()"
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 m-2"
          >
            <!-- MESSAGE CREATE SUCCESS  -->
                    <div
                      v-if="getRegisterResponse.success"
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
                          <p class="font-bold">Utilisateur créé avec succès</p>
                        </div>
                      </div>
                    </div>



            <!-- MESSAGE REGISTER ERROR  -->

            <div v-if="getRegisterResponse.error" role="alert">
              <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                Error
              </div>
              <div
                class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
              >
                <p v-if="getRegisterResponse.error.badEmail">
                  Utilisateur déjà enregistré !
                </p>
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

            
            <div class="mb-4">
              <label
                class="block text-blue-700 text-sm font-bold mb-2"
                for="username"
              >
                Nom utilisateur
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Nom utilisateur"
                required
                v-model="username"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-blue-700 text-sm font-bold mb-2"
                for="username"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                required
                v-model="email"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-blue-700 text-sm font-bold mb-2"
                for="pasword"
              >
                Mot de passe
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Mot de passe"
                required
                v-model="password"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-blue-700 text-sm font-bold mb-2"
                for="pasword"
              >
                Confirmez le Mot de passe
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                id="c_password"
                type="password"
                placeholder="Mot de passe"
                required
                v-model="c_password"
              />
            </div>
            
            <button
              class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Création
            </button>
          </form>
        </div>
      </div>
    </div>
    <div
      v-if="toggleModal"
      class="absolute inset-0 z-40 opacity-25 bg-black"
    ></div>

    <!-- Button trigger modal -->

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
                  Nom utilisateur
                </th>
                <th
                  class="px-6 py-3 border-b border-blue-200 bg-blue-50 text-xs leading-4 font-medium text-blue-500 uppercase tracking-wider text-center"
                >
                  Email
                </th>
                <th
                  class="px-6 py-3 border-b border-blue-200 bg-blue-50 text-xs leading-4 font-medium text-blue-500 uppercase tracking-wider text-center"
                >
                  Statut
                </th>
                <th
                  class="px-6 py-3 border-b border-blue-200 bg-blue-50 text-xs leading-4 font-medium text-blue-500 uppercase tracking-wider text-center"
                >
                  Droits Admin
                </th>
                <th class="px-6 py-3 border-b border-blue-200 bg-blue-50"></th>
                <th class="px-6 py-3 border-b border-blue-200 bg-blue-50"></th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="user in getAllUsers.users" :key="user._id">
                
                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-blue-200"
                >
                  <div class="text-sm leading-5 text-blue-900">
                    {{ user.username }}
                  </div>
                </td>
                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-blue-200"
                >
                  <div class="text-sm leading-5 text-blue-900">
                    {{ user.email }}
                  </div>
                </td>

                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-blue-200"
                >
                  <div 
                  v-if="user.who_is == 'Administrateur'"
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-300 text-green-800">
                    {{ user.who_is }}
                  </div>
                  <div 
                  v-if="user.who_is == 'Gestionnaire'"
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-300 text-blue-800">
                    {{ user.who_is }}
                  </div>
                  <div 
                  v-if="user.who_is == 'Famille'"
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-300 text-yellow-800">
                    {{ user.who_is }}
                  </div>
                  <div 
                  v-if="user.who_is == 'Amis'"
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-300 text-orange-800">
                    {{ user.who_is }}
                  </div>
                  <div 
                  v-if="user.who_is == 'ND'"
                  class="px-2 inline-flex text-xs leading-5 font-semibold">
                    Compte Non Activé
                  </div>
                </td>
                <td
                  v-if="user.is_admin == true"
                  class="px-6 py-4 whitespace-no-wrap border-b border-blue-200 text-center"
                >
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-300 text-green-800"
                    >Admin</span
                  >
                </td>
                <td
                  v-if="user.is_admin == false"
                  class="px-6 py-4 whitespace-no-wrap border-b border-blue-200 text-center"
                >
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-pink-300 text-pink-800"
                    >Utilisateur</span
                  >
                </td>
<!-- début du modal edit -->
                <td
                  class="px-6 py-4 whitespace-no-wrap text-right border-b border-blue-200 text-sm leading-5 font-medium"
                >
                  <!-- début du modal edit -->
                </td>

                <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-blue-200 text-sm leading-5 font-medium"
                >
                  <button
                    class="bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-2 rounded-full text-center"
                    @click="(editModal = !editModal), (userToEdit = user)"
                    v-if="getUserMe.profile.who_is == 'Administrateur' || (getUserMe.profile.who_is == 'Gestionnaire' && user.is_admin == false) || (getUserMe.profile._id == user._id)"
                  >

                    Modification

                  </button>
                  <div
                    class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
                    v-if="editModal"
                  >
                    <div class="relative mx-auto w-auto max-w-2xl">
                      <div
                        class="bg-blue-500 w-full rounded shadow-2xl flex flex-col"
                      >
                        <div class="text-2xl font-bold text-center mt-2">

                          Modification utilisateur

                          <button
                            class="rounded bg-red-500 text-white text-center px-2 py-1 text-sm absolute top-0 right-0 m-1"
                            @click="editModal = false"
                          >
                            X
                          </button>
                        </div>

                        <form
                          @submit.prevent="editUserSubmit"
                          class="bg-white shadow-md rounded px-8 pt-6 pb-8 m-2"
                        >

                        <!-- MESSAGE CREATE SUCCESS  -->
                    <div
                      v-if="getModifyResponse.success"
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
                          <p class="font-bold">Utilisateur modifié avec succès</p>
                        </div>
                      </div>
                    </div>
                          
                          <div class="mb-4">
                            <label
                              class="block text-blue-700 text-sm font-bold mb-2"
                              for="username"
                            >
                              Nom utilisateur
                            </label>
                            <input
                              v-model="userToEdit.username"
                              class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="username"
                              type="text"
                              required
                              placeholder="Nom utilisateur"
                            />
                          </div>
                          <div class="mb-4">
                            <label
                              class="block text-blue-700 text-sm font-bold mb-2"
                              for="username"
                            >
                              Email
                            </label>
                            <input
                              v-model="userToEdit.email"
                              class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="Email"
                              type="text"
                              required
                              placeholder="Email"
                            />
                          </div>
                        
                          <div class="mb-4">
                            <label
                              class="block text-blue-700 text-sm font-bold mb-2"
                              for="password"
                            >
                              Mot de passe
                            </label>
                            <input
                              v-model="userToEdit.password"
                              class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="password"
                              type="password"
                              placeholder="Modifier le mot de passe"
                            />
                          </div>
                          
                            
                          
                          <div class="mb-4">
                            <label
                              class="block text-blue-700 text-sm font-bold mb-2"
                              for="admin"
                            >
                              Statut
                            </label>
                            <select
                                v-model="userToEdit.who_is"
                                required
                                class="block appearance-none w-full bg-blue-200 border border-blue-200 text-blue-700  py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                id="who_is"
                            >
                                <option value="null" disabled>Choisir une option</option>
                                <option value= "ND">Non Activé</option>
                                <option value= "Famille">Famille</option>
                                <option value= "Amis">Amis</option>
                                <option v-if="getUserMe.profile.who_is == 'Administrateur'" value= "Gestionnaire">Gestionnaire</option>
                                <option v-if="getUserMe.profile.who_is == 'Administrateur'" value= "Administrateur">Administrateur</option>
                            </select>
                            <div v-if="getUserMe.profile.who_is == 'Administrateur'">

                            <label
                              class="block text-blue-700 text-sm font-bold mb-2"
                              for="who_is"
                            >
                              Admin
                            </label>
                            <select
                                v-model="userToEdit.is_admin"
                                required
                                class="block appearance-none w-full bg-blue-200 border border-blue-200 text-blue-700  py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                id="admin"
                            >
                                <option value="null" disabled>Choisir une option</option>
                                <option value= true>Droits admin</option>
                                <option value= false>Visiteur</option>
                            </select>
                            </div>
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
                  class="px-6 py-4 whitespace-no-wrap text-right border-b border-blue-200 text-sm leading-5 font-medium"
                >
                  <div
                    class="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-2 rounded-full text-center"
                    style="cursor: pointer"
                    @click="deleteUserButton(user._id)"
                    v-if="getUserMe.profile.who_is == 'Administrateur' || user.is_admin == false"
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
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      email: "",
      password: "",
      c_password: "",
      username: "",
      who_is: "",
      error: null,
      success: null,
      avatar: "",
      toggleModal: false,
      editModal: false,
      userToEdit: "",
      email_template: {
          informUser:"template_4jsuuic",
      }
    };
  },
  methods: {
    ...mapActions(["fetchUserMe", "fetchAllUsers", "deleteUser", "register","modifyUser"]),
    deleteUserButton(id) {
      this.fetchAllUsers();
      this.deleteUser(id);
      this.fetchAllUsers();
    },

    // CREATION D'UN USER 
    registerSubmit() {
      // VERIF CONFIRMATION DU MOT DE PASSE
      if (this.password != this.c_password) {
        this.error = "Les mots de passe ne sont pas identique";
      } else {
        // VERIF LONGUEUR MDP
        if (this.password.length < 5 && this.password.length > 20) {
          this.error =
            "Le mot de passe doit contenir minimum 5 char maximum 20";
          // VERIF ZIP
        }
                var obj = {
                  email: this.email,
                  password: this.password,
                  username: this.username,
                };

                this.register(obj);
                this.fetchAllUsers();
       
                if (this.getRegisterResponse.success == null) {
                  setTimeout(function () {
                    window.location.href = "/admin";
                  }, 2000);
                }
              }
            
        
         if (this.getRegisterResponse.success) {
                  setTimeout(function () {
                    window.location.href = "/admin";
                  }, 2000);
                }
      
    },

    //EDIT D'UN USER 

    editUserSubmit(){

    
                var obj = {
                  email: this.userToEdit.email,
                  password: this.userToEdit.password,
                  username: this.userToEdit.username,
                  is_admin: this.userToEdit.is_admin,
                  who_is: this.userToEdit.who_is,
                  id:this.userToEdit._id,
                  avatar:this.userToEdit.avatar,
                };

                this.modifyUser(obj);
                this.fetchAllUsers();
            if(this.userToEdit.who_is != "ND"){
              var activeParams = {
        from_name : this.userToEdit.username,
        reply_to : process.env.VUE_APP_TO_EMAIL,
        message : "Votre compte a été validé, vous pouvez accéder à l'espace de réservation : "+process.env.VUE_APP_URL+"/appartements/5fa066cbdb3ee70017fa88ed",
        to_email : this.userToEdit.email
      }

       emailjs.send(process.env.VUE_APP_SERVICE_ID_RESPONSE, this.email_template.informUser, activeParams, process.env.VUE_APP_USER_ID_RESPONSE)
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
            }
           /* if (this.getModifyResponse.success) { */
                    setTimeout(function () {
                      window.location.href = "/admin";
                    }, 1200);
                  //}
        }
      

    
  },

  created() {
    this.fetchAllUsers();
    this.getRegisterResponse.success = null;
    this.getModifyResponse.success = null;
    this.getRegisterResponse.error = null;
    this.getModifyResponse.error = null;
  },
  computed: mapGetters(["getUserMe", "getAllUsers", "getRegisterResponse","getModifyResponse"]),
};
</script>

<style scoped>
</style>
