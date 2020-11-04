<template>
  <div>
    <!-- Button trigger modal -->
    <!-- modal create-galme -->
    <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-8 m-2 rounded"
      @click="createModal = !createModal">
      Création nouveau contenu
    </button>
    <div class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
      v-if="createModal">
      <div class="relative mx-auto w-auto max-w-2xl">
        <div class="bg-blue-500 w-full rounded shadow-2xl flex flex-col">
          <div class="text-2xl font-bold text-center mt-2">
            Création nouveau contenu
            <button class="rounded bg-red-500 text-white text-center px-2 py-1 text-sm absolute top-0 right-0 m-3"
              @click="createModal = false">
              X
            </button>
          </div>

          <form @submit.prevent="createContentSubmit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 m-2">
            <!-- MESSAGE CREATE SUCCESS  -->
            <div v-if="createSuccess != null"
              class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
              <div class="flex">
                <div class="py-1">
                  <svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path
                      d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
                </div>
                <div>
                  <p class="font-bold">Contenu créé avec succès</p>
                </div>
              </div>
            </div>

            <!-- MESSAGE CONTENT ERROR  -->

            <div v-if="createError != null" role="alert">
              <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                Error
              </div>
              <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <p>Merci de verifier les informations</p>
              </div>
            </div>
            <div class="mb-3">
              <label class="block text-blue-700 text-sm font-bold mb-2" for="title">
                Titre
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title" type="text" placeholder="Titre" required v-model="title" />
            </div>
            <div class="mb-2">
              <label class="block text-blue-700 text-sm font-bold mb-2" for="content">
                Contenu
              </label>
              <vue-editor v-model="content"
                class="shadow appearance-none border rounded w-full py-1 px-2 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                id="content" type="text" required placeholder="Contenu"></vue-editor>

            </div>
            <div class="mb-3">
              <label class="block text-blue-700 text-sm font-bold mb-2" for="visible">
                Visible
              </label>
              <select v-model="visible" required
                class="bg-white block shadow appearance-none w-full border border-blue-200 text-blue-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                id="visible">

                <option value=true>Oui</option>
                <option value=false>Non</option>

              </select>
            </div>
            <button
              class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Créer
            </button>
          </form>
        </div>
      </div>
    </div>
    <div v-if="createModal" class="absolute inset-0 z-40 opacity-25 bg-black"></div>

    <div class="flex flex-col m-2 shadow-lg">
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-blue-200">
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 border-b border-blue-200 bg-blue-50 text-xs leading-4 font-medium text-blue-500 uppercase tracking-wider text-center">
                  Titre
                </th>
                

                <th
                  class="px-6 py-3 border-b border-blue-200 bg-blue-50 text-xs leading-4 font-medium text-blue-500 uppercase tracking-wider text-center">
                  Visible
                </th>

                <th class="px-6 py-3 border-b border-blue-200 bg-blue-50"></th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="content in getAllContents.Content" :key="content._id">
                <td class="px-6 py-4 whitespace-no-wrap border-b border-blue-200">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">

                    </div>
                    <div class="ml-4">
                      <div class="text-sm leading-5 font-medium text-blue-900">
                        {{ content.title }}
                      </div>
                    </div>
                  </div>
                </td>

                

                <td v-if="content.visible == true"
                  class="px-6 py-4 whitespace-no-wrap border-b border-blue-200 text-center">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-300 text-green-800">Visible</span>
                </td>

                <td v-if="content.visible == false"
                  class="px-6 py-4 whitespace-no-wrap border-b border-blue-200 text-center">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-300 text-red-800">Masqué</span>
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-blue-200">
                  <div class="text-sm leading-5 text-blue-900 text-center"></div>
                </td>

                <td class="px-1 py-4 whitespace-no-wrap border-b border-blue-200 text-sm leading-5 font-medium">
                  <button
                    class="bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-2 rounded-full text-center"
                    @click="toggleModal = !toggleModal, contentToEdit = content ">

                    Modification

                  </button>
                  <div class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
                    v-if="toggleModal">
                    <div class="relative mx-auto w-auto max-w-2xl">
                      <div class="bg-blue-500 w-full rounded shadow-2xl flex flex-col ">
                        <div class="text-2xl font-bold text-center mt-2 m-1">

                          Modifier un contenu

                          <button
                            class="rounded bg-red-500 text-white text-center px-2 py-1 text-sm absolute top-0 right-0 m-2"
                            @click="toggleModal = false">
                            X
                          </button>
                        </div>
                        <form @submit.prevent="modifyContentSubmit"
                          class="bg-white shadow-md rounded px-8 pt-6 pb-8 m-2">
                          <!-- MESSAGE CONTENT SUCCESS  -->
                          <div v-if="modifySuccess != null"
                            class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
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
                                <p class="font-bold">Contenu Modifié avec succès</p>
                              </div>
                            </div>
                          </div>

                          <!-- MESSAGE CONTENT ERROR  -->

                          <div v-if="modifyError != null" role="alert">
                            <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                              Erreur
                            </div>
                            <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                              <p>Merci de verifier les informations</p>
                            </div>
                          </div>
                          <div class="mb-3 mt-3">
                            <label class="block text-blue-700 text-sm font-bold mb-2" for="title">
                              Titre
                            </label>
                            <input
                              class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="title" type="text" placeholder="Titre" required v-model="contentToEdit.title" />
                          </div>
                          <div class="mb-3">
                            <label class="block text-blue-700 text-sm font-bold mb-2" for="content">
                              Contenu
                            </label>
                            <vue-editor
                              class="shadow appearance-none border rounded w-full py-1 px-2 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="content" type="text" placeholder="Contenu" required v-model="contentToEdit.content">
                            </vue-editor>
                          </div>


                          <div class="mb-4">
                            <label class="block text-blue-700 text-sm font-bold mb-2" for="visible">
                              Visible
                            </label>
                            <select v-model="contentToEdit.visible" required
                              class="block appearance-none w-full bg-blue-200 border border-blue-200 text-blue-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                              id="visible">
                              <option :value="null" disabled>Contenu visible ?</option>
                              <option value="true">Oui</option>
                              <option value="false">Non</option>
                            </select>
                          </div>

                          <button
                            class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            Modifier
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div v-if="toggleModal" class="absolute inset-0 z-40 opacity-25 bg-black"></div>
                </td>
                <td
                  class="px-6 py-4 whitespace-no-wrap text-right border-b border-blue-200 text-sm leading-5 font-medium">
                  <div class="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-1 rounded-full text-center w-20"
                    style="cursor: pointer" @click="deleteContentButton(content._id)">
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
  import {
    VueEditor
  } from "vue2-editor";

  export default {
    components: {
      VueEditor,
    },
    data() {
      return {

        showModal: false,
        toggleModal: false,
        editModal: false,
        contentToEdit: "",
        title: "",
        content: "",
        visible: "",
        createModal: false,
        createSuccess: null,
        createError: null,
        modifySuccess: null,
        modifyError: null,
      };
    },
    methods: {
      ...mapActions([
        "fetchAllContents",
        "deleteContent",
        "createContent",
        "modifyContent",

      ]),
      deleteContentButton(id) {
        this.fetchAllContents();
        this.deleteContent(id);
        this.fetchAllContents();
      },

      // CREATION D'UN CONTENU
      createContentSubmit() {
        var obj = {
          title: this.title,
          content: this.content,
          visible: this.visible,
        };
        console.log(obj);
        this.createContent(obj);
        this.fetchAllContents();

        if (this.getCreateContentResponse.success) {
          this.createError = null;
          this.createSuccess = this.getCreateContentResponse.success;
          setTimeout(function () {
            window.location.href = "/admin";
          }, 2000);
        } else {
          this.createError = this.getCreateContentResponse.error;
        }

      },
      modifyContentSubmit() {
        var obj = {
          title: this.contentToEdit.title,
          content: this.contentToEdit.content,
          visible: this.contentToEdit.visible,
          id: this.contentToEdit._id
        };

        this.modifyContent(obj);
        if (this.getModifyContentResponse.success) {
          this.modifyError = null;
          this.modifySuccess = this.getModifyContentResponse.success;
          setTimeout(function () {
            window.location.href = "/admin";
          }, 2000);
        } else {
          this.modifyError = this.getModifyContentResponse.error;
        }
        this.fetchAllContents();


      },
    },



    created() {
      this.fetchAllContents();
      this.createSuccess = null;
      this.modifySuccess = null;
      this.createError = null;
      this.modifyError = null;

    },
    computed: mapGetters([
      "getAllContents",
      "getCreateContentResponse",
      "getModifyContentResponse",
    ]),
  };
</script>

<style scoped>
</style>