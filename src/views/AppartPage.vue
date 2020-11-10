<template>
  <div class="appartPage">
    <Navbar />
    <div v-if="getUserMe.profile.who_is == 'ND'">
      <div class="mt-20 text-center font-bold text-xl text-blue-800 my-3">Votre compte n'a pas encoré été validé par le
        gestionnaire.</div>
      <div class="my-10 text-center font-bold text-l text-blue-800 my-3">Vous serez informé par mail sur l'adresse
        {{getUserMe.profile.email}} dès que votre compte sera actif.</div>


      <Activation v-if="getUserMe.profile.is_active == 'No'" />


    </div>
    <div v-if="getUserMe.profile.who_is != 'ND'">
      <div class="text-blue-700 body-font overflow-hidden bg-white">
        <div class="container px-5 py-10 mx-auto">
          <!-- MODAL  -->
          <button v-if="getUserMe.profile != null"
            class="  hover:text-red-400  text-xs text-red-600 sm:font-bold lg:w-2/4 mx-auto rounded mb-3 text-center"
            @click="Modal = !Modal">Signaler un problème avec l'appartement
          </button>
          <div class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
            v-if="Modal">
            <div class="relative mx-auto w-1/2 max-w-5xl">

              <div class="bg-blue-500 w-full rounded shadow-2xl flex flex-col">

                <div class="text-2xl font-bold text-center mt-2"> Signalement
                  <button
                    class="rounded bg-red-600 hover:bg-red-400 text-white text-center px-2 py-1 text-sm absolute top-0 right-0 m-2"
                    @click="Modal=false">X</button>
                </div>

                <form @submit.prevent="createWarningSubmit()" class="bg-white shadow-md rounded px-8 pt-6 pb-8 m-2 ">
                  <!-- MESSAGE SIGNALEMENT SUCCESS  -->
                  <div v-if="createSuccess != null"
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
                        <p class="font-bold">Signalement envoyé au gestionnaire</p>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4 ">
                    <label class="block text-blue-700 text-sm font-bold mb-2 text-center" for="warning">
                      Signalement d'un problème avec l'appartement
                    </label>
                    <textarea v-model="content"
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="warning" type="text" required placeholder="Saisir ici le contenu">
                </textarea>
                  </div>

                  <button
                    class="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Envoyer le signalement au gestionnaire
                  </button>

                </form>
              </div>
            </div>
          </div>
          <div v-if="Modal" class="absolute inset-0 z-40  opacity-25 bg-black"></div>
          <!-- MODAL FINISH -->


          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class=" w-1/6">
              <!-- MODAL IMAGE -->
              <div v-for="image in getAppartById.appart.images.slice(1,getAppartById.appart.images.length)"
                :key="image.id">
                <img :src="image" alt="" class=" w-1/2 border mx-auto m-1 " @click="Modalimg = !Modalimg">
              </div>
              <div class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
                v-if="Modalimg">
                <div class="relative mx-auto w-3/4 max-w-full max-h-full">

                  <div class=" bg-opacity-25 bg-blue-900 w-full rounded shadow-2xl flex flex-col">

                    <div class="text-2xl font-bold text-center m-2">
                      <button
                        class="rounded  hover:bg-blue-700 text-white font-bold text-center px-2 py-1 text-sm absolute top-0 right-0 m-2"
                        @click="Modalimg=false">X</button>
                    </div>
                    <div v-for="image in getAppartById.appart.images.slice(1,length)" :key="image.id">
                      <img :src="image" alt="" class=" w-1/2 border mx-auto m-1 ">
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="Modalimg" class="absolute inset-0 z-40  opacity-25 bg-black"></div>
              <!-- MODAL IMAGE -->

            </div>

            <img class=" lg:w-1/3 w-full object-cover object-center rounded border border-blue-200"
              :src="getAppartById.appart.images[0]" />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-4 mt-2 lg:mt-0">


              <div class=" p-1 W-1/3">

                <div class="flex items-center">

                  <button @click="isClickAvis = !isClickAvis, isClick=false">
                    <div class="text-blue-600 ml-3">{{reviewOfAppart.length}} Avis</div>
                  </button>
                </div>

                <!-- STAR REVIEWS FINISH -->

              </div>

              <p class=" m-5 px-2 inline-flex text-l leading-5 font-semibold rounded-full bg-green-300 text-green-800 "
                v-if="getAppartById.appart.available == true">Disponible pour la réservation</p>
              <p class=" m-5 px-2 inline-flex text-l leading-5 font-semibold rounded-full bg-red-300 text-red-800 "
                v-if="getAppartById.appart.available != true">Non disponible à la réservation</p>
              <h1 class="text-blue-900 text-3xl title-font font-medium mb-1">
                {{ getAppartById.appart.name }}
              </h1>
              <div class="flex mb-2">



                <div class="text-blue-600  ">Gestionnaire de l'appartement :</div>
                <div class="font-bold text-orange-500 mx-2">Carol PRAVDA-STAROV</div>

              </div>
              <div v-html="getAppartById.appart.description" class="leading-relaxed"></div>
              <div class="flex mt-2 items-center pb-5 border-b-2 border-blue-200 mb-3"></div>
              <div class="flex content-around items-center">

                <div class="flex-1 title-font font-medium text-md text-blue-900 m-2 border-r-2 border-orange-300">
                  Nb de couchages : {{ getAppartById.appart.nbPlayers }}
                </div>

                <button v-if="getUserMe.profile != null && getAppartById.appart.available == true"
                  @click="isClick = !isClick, isClickAvis =false"
                  class="flex ml-auto text-white font-bold bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 hover:inner-shadow shadow rounded">
                  Réservation
                </button>
                <button @click="isClickAvis = !isClickAvis, isClick=false"
                  class="flex mr-auto text-orange-500 hover:text-white font-bold  border-0 ml-1 py-2 px-6 focus:outline-none hover:bg-orange-400 hover:inner-shadow rounded">
                  Avis
                </button>
              </div>

            </div>
            <!-- MESSAGE CREATE SUCCESS  -->
            <div v-if="getCreateReservationResponse.success"
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
                  <p class="font-bold">Votre demande de reservation vient d'etre transmise au gestionnaire. Celui ci
                    prendra une decision dans les plus brefs delais !</p>
                </div>
              </div>
            </div>

            <!-- MESSAGE APPART ERROR  -->

            <div v-if="getCreateReservationResponse.error" role="alert">
              <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                Erreur
              </div>
              <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <p>Merci de verifier les informations</p>
              </div>
            </div>
            <div v-if="this.error == true" role="alert" class="w-full m-5">
              <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                Erreur
              </div>
              <div class="text-center border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <p>Une demande est en attente pour cette date merci de bien vouloir choisir une autre date. </p>
              </div>
            </div>
            <div v-if="getUserMe.profile != null" v-show="isClick"
              class="w-full  content-between items-center rounded p-2 my-3">
              <div
                class="md:w-2/3 lg:w-1/2 w-full border p-3 bg-blue-200 mx-auto block text-blue-700 text-lg font-bold text-center">

                Tarifs journaliers
              </div>
              <div class="md:w-2/3 lg:w-1/2 w-full mx-auto block border-r border-l border-b rounded-b border-blue-200 shadow">
                <div class="block bg-white text-blue-700 text-sm font-bold text-center">
                <table class="min-w-full ">
                  <thead class="text-center">

                    <tr>
                      <th
                        class="mx-2 py-3 border-b border-blue-200 bg-blue-50 text-xs leading-4 font-medium text-blue-500 tracking-wider text-center">
                        Basse<br>saison
                      </th>
                      <th
                        class="mx-2 py-3 border-b border-blue-200 bg-blue-50 text-xs leading-4 font-medium text-blue-500 tracking-wider text-center">
                        Moyenne<br>saison
                      </th>
                      <th
                        class="mx-2 py-3 border-b border-blue-200 bg-blue-50 text-xs leading-4 font-medium text-blue-500 tracking-wider text-center">
                        Haute<br>saison
                      </th>

                    </tr>
                  </thead>
                  <tbody class="bg-white ">
                    <tr>
                      <td class="py-2 whitespace-no-wrap border-b border-blue-200">
                        <div class="flex items-center justify-around text-xs leading-5 font-medium text-blue-900">
                          30 €/j
                        </div>
                      </td>
                      <td class="py-2 whitespace-no-wrap border-b border-blue-200">
                        <div class="flex items-center justify-around text-xs leading-5 font-medium text-blue-900">
                          65 €/j
                        </div>
                      </td>
                      <td class="py-2 whitespace-no-wrap border-b border-blue-200">
                        <div class="flex items-center justify-around text-xs leading-5 font-medium text-blue-900">
                          75 €/j
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 whitespace-no-wrap border-b border-blue-200 ">
                        <div class="flex items-center justify-around text-xs leading-5 font-medium text-blue-900">
                          01/09 au 30/06
                        </div>
                      </td>
                      <td class="px-2 py-2 whitespace-no-wrap border-b border-blue-200 ">
                        <div class="flex items-center justify-around text-xs leading-5 font-medium text-blue-900">
                          01/07 au 14/07<br>et 16/08 au 31/08
                        </div>
                      </td>
                      <td class="px-2 py-2 whitespace-no-wrap border-b border-blue-200 ">
                        <div class="flex items-center justify-around text-xs leading-5 font-medium text-blue-900">
                          15/07 au 15/08
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
            </div>
            <div v-if="getUserMe.profile != null" v-show="isClick"
              class="w-full flex content-between items-center rounded p-2 my-3">

              <form @submit.prevent="reservationForm()" class="md:w-2/3 lg:w-1/2 w-full border p-3 bg-blue-200 mx-auto">
                <label class="block text-blue-700 text-lg font-bold mb-2 text-center" for="nomdujeu">
                  J'aimerai louer l'appartement : {{getAppartById.appart.name}} </label><label
                  class="block bg-white text-blue-700 text-sm font-bold text-center h-12 mb-2" for="nomdujeu">
                  Mon pseudo: {{ getUserMe.profile.username }} <br />
                  Mon Email: {{ getUserMe.profile.email }}
                </label>

                <label class="block text-blue-700 text-sm font-bold mb-2 text-center" for="">
                  Sélection de la date d'arrivée :
                </label>
                <div class="flex justify-around">
                  <input class="block text-blue-700 text-sm font-bold mb-2 text-center" type="date" id="start"
                    name="date-début" value="2020-07-22" min="2020-01-01" max="" v-model="start"
                    @change.prevent="tarif()" />
                </div>

                <label class="block text-blue-700 text-sm font-bold mb-2 text-center" for="">
                  Sélection de la date de départ :
                </label>
                <div class="flex justify-around">
                  <input class="block text-blue-700 text-sm font-bold mb-2 text-center" type="date" id="start"
                    name="date-début" value="2020-07-22" min="2020-01-01" max="" v-model="end"
                    @change.prevent="tarif()" />
                </div>

                <div class="block text-blue-700 text-sm font-bold mb-2 text-center">Réservation : <br>{{this.diff}}
                  jours | Montant : {{this.montant}} €</div>
                <button
                  class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-2 mt-2 rounded text-center w-full"
                  type="submit">
                  Envoyer
                </button>
              </form>

            </div>
            <!-- AVIS -->

            <div v-show="isClickAvis" class="w-full flex content-between items-center rounded p-2 my-3">
              <div class="flex flex-col w-full bg-blue-200">

                <form @submit.prevent="postReview" v-if="getUserMe.profile != null" class="border p-3 m-4 bg-white"
                  action="">

                  <!-- MESSAGE CREATE SUCCESS  -->
                  <div v-if="createReviewSuccess != null"
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

                  <!-- MESSAGE REVIEW ERROR  -->

                  <div v-if="createReviewError != null" role="alert">
                    <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                      Erreur
                    </div>
                    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                      <p>Merci de verifier les informations</p>
                    </div>
                  </div>

                  <textarea v-model="comment" required name="" id="" cols="30" rows="10" class="border w-full h-20"
                    placeholder="Saisir ici votre commentaire"></textarea>
                  <div class="flex flex-row">

                    <button type="submit"
                      class=" bg-orange-300 hover:bg-orange-500 hover:text-white px-3 my-auto h-8 rounded text-lg focus:outline-none shadow">
                      Donnez votre avis
                    </button>
                  </div>
                </form>

                <!-- COMMENTS  -->
                <div class="text-center ">
                  <h2>Les avis sur l'appartement</h2>
                </div>
                <div v-for="review in reviewOfAppart" :key="review._id" class="border p-3 ">
                  <div class="flex">
                    <div class="w-11/12">
                      <div class="text-m title-font text-gray-600">Commentaire de : {{review.userId.username}}</div>
                      <div class="text-xs title-font text-gray-600">Publié le : {{review.created_at}}</div>

                    </div>
                    <div class="w-1/12 align-content: flex-end;">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-5" v-if="getUserMe.profile._id == review.userId._id"
                        @click="deleteReviewButton(review._id)">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </div>
                  </div>

                  <div class=" mt-1 p-1 rounded bg-white">{{review.comment}}</div>

                </div>
              </div>
            </div>

            <!-- CALENDAR -->

            <div class="Calendar w-full h-full">
              <h1 class="text-center m-5 font-bold "> Calendrier de disponibilité </h1>
              <Fullcalendar :options="calendarOptions" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from "vuex";
  // @ is an alias to /src
  import Footer from "../components/Footer";
  import Fullcalendar from "@fullcalendar/vue";
  import dayGridPlugin from "@fullcalendar/daygrid";
  import emailjs from 'emailjs-com';
  import Activation from "../components/activation/Activation.vue"

  import axios from "axios";
  import Navbar from "../components/Navbar";

  export default {
    name: "AppartPage",
    components: {
      Navbar,
      Footer,
      Fullcalendar,
      Activation
    },
    data() {
      return {
        Modalimg: "",
        Modal: "",
        error: false,
        search: "",
        start: "",
        end: "",
        isClick: false,
        isClickAvis: false,
        like: true,
        liked: false,
        content: "",
        createSuccess: null,
        createReviewSuccess: null,
        createReviewError: null,
        createReservationError: null,
        comment: "",
        montant: 0,
        diff: 0,
        calendarOptions: {
          plugins: [dayGridPlugin],
          initialView: "dayGridMonth",
          events: "",
          eventClick: this.showEvent,
          locale: "fr",
        },
        email_template: {
          demandeReservation: "template_fe688sj",
          message: "template_zdzj1jd",

        }

      };
    },
    methods: {
      ...mapActions([
        "fetchAppartById",
        "fetchUserMe",
        "createReservation",
        "createWarning",
        "fetchAllReservations",
        "fetchAllReviews",
        "createReview",
        "deleteReview"
      ]),

      tarif() {

        var debut = this.start.split("-")
        var fin = this.end.split("-")
        var from = new Date(debut[0], parseInt(debut[1]) - 1, debut[2]).getTime() / 86400000;
        var to = new Date(fin[0], parseInt(fin[1]) - 1, fin[2]).getTime() / 86400000;
        this.diff = parseInt(new Number(to - from).toFixed(0)) + 1;
        this.montant = 0;



        var datefor = "";

        for (var i = 1; i <= this.diff; i++) {

          datefor = new Date(debut[0], parseInt(debut[1]) - 1, parseInt(debut[2]) + i);
          var ladate = datefor.toJSON().substr(0, 10)

          console.log(ladate);

          if (ladate.substr(5, 2) >= 9 || ladate.substr(5, 2) <= 6) {
            console.log("basse saison");
            this.montant = this.montant + 30
          } else if ((ladate.substr(5, 2) == 7 && ladate.substr(8, 2) < 15) || (ladate.substr(5, 2) == 8 && ladate
              .substr(8, 2) > 15)) {
            console.log("moyenne saison");
            this.montant = this.montant + 65
          } else {
            console.log("haute saison");
            this.montant = this.montant + 75
          }
        }

        return this.montant, this.diff;

      },

      reservationForm() {

        this.getAllReservations.Reservation.forEach((element) => {
          if (element.appartId._id == this.$route.params.id) {

            // CHECK START 
            var dateFrom = element.start;
            var dateTo = element.end;
            var dateCheck = this.start;


            // CHECK END 

            var dateFrom2 = element.start;
            var dateTo2 = element.end;
            var dateCheck2 = this.end;

            // CONVERT START 

            var d1 = dateFrom.split("-");
            var d2 = dateTo.split("-");
            var c = dateCheck.split("-");

            //CONVERT END 

            var d1End = dateFrom2.split("-");
            var d2End = dateTo2.split("-");
            var cEnd = dateCheck2.split("-");


            // PARSE INT START

            var from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]);
            var to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
            var check = new Date(c[2], parseInt(c[1]) - 1, c[0]);
            console.log(from);
            console.log(to);
            console.log(check);

            // PARSE IN END 


            var from2 = new Date(d1End[2], parseInt(d1End[1]) - 1, d1End[0]);
            var to2 = new Date(d2End[2], parseInt(d2End[1]) - 1, d2End[0]);
            var check2 = new Date(cEnd[2], parseInt(cEnd[1]) - 1, cEnd[0]);

            // ERROR 
            if (this.start == "" || this.end == "") {
              console.log('yop')
              this.getCreateReservationResponse.error = true;
              setTimeout(function () {
          location.reload();
        }, 1200);
            } else if (check > from && check < to) {
              console.log('ici')
              //this.error = true;
              setTimeout(function () {
          location.reload();
        }, 1200);
            } else if (check2 > from2 && check2 < to2) {
              console.log('la')
              //this.error = true;
              setTimeout(function () {
          location.reload();
        }, 1200);
            }

          }
        })

        if (this.error == false && this.getCreateReservationResponse.error != true) {
          var obj = {
            "ownerId": this.getAppartById.appart.userId._id,
            "borrowerId": this.getUserMe.profile._id,
            "start": this.start,
            "end": this.end,
            "title": this.getUserMe.profile.username,
            "status": "0",
            "appartId": this.getAppartById.appart._id,
            "price": this.montant,
            "nbdays": this.diff
          }
          this.createReservation(obj);
          var locStart = this.start.split("-");
          var locEnd = this.end.split("-");
          var demandeResaParams = {
            from_name: this.getUserMe.profile.username,
            reply_to: this.getUserMe.profile.email,
            message: this.getUserMe.profile.username + " aimerait louer l'appartement " + this.diff + " jours, du " +
              locStart[2] + "/" + locStart[1] + "/" + locEnd[0] + " au " + locEnd[2] + "/" + locEnd[1] + "/" + locEnd[
                0] + ". La location coûte " + this.montant + "€.",
            to_email: process.env.VUE_APP_TO_EMAIL,
          }

          emailjs.send(process.env.VUE_APP_SERVICE_ID, this.email_template.demandeReservation, demandeResaParams,
              process.env.VUE_APP_USER_ID)
            .then((result) => {
              console.log('SUCCESS!', result.status, result.text);
            }, (error) => {
              console.log('FAILED...', error);
            });


          setTimeout(function () {
            window.location.href = "/reservation";
          }, 1200);
        }






      },


      getEvents() {
        const viastoken = window.localStorage.getItem('viastoken');
        axios
          .get("https://vias-e-reservation.herokuapp.com/reservations", {
            headers: {
              Authorization: `Bearer ${viastoken}`
            }
          })
          .then((resp) => {

            this.calendarOptions.events = resp.data.Reservation.filter(
              (reservation) =>
              reservation.appartId._id.includes(this.$route.params.id) &&
              (reservation.status == "2" || reservation.status == "0")
            );


          })
          .catch((err) => console.log(err.response.data));
      },
      resetForm() {
        Object.keys(this.newEvent).forEach((key) => {
          return (this.newEvent[key] = "");
        });
      },
      createWarningSubmit() {
        var obj = {
          userId: this.getUserMe.profile._id,
          targetId: this.getAppartById.appart.userId._id,
          content: this.content,
          subject: "Signalement",

        };

        this.createWarning(obj);
        if (this.getCreateWarningResponse.success) {
          this.createSuccess = this.getCreateWarningResponse.success;

          var warningParams = {
            from_name: this.getUserMe.profile.username,
            reply_to: this.getUserMe.profile.email,
            message: "Signalement : " + this.content,
            to_email: process.env.VUE_APP_TO_EMAIL,
          }

          emailjs.send(process.env.VUE_APP_SERVICE_ID, this.email_template.message, warningParams, process.env
              .VUE_APP_USER_ID)
            .then((result) => {
              console.log('SUCCESS!', result.status, result.text);
            }, (error) => {
              console.log('FAILED...', error);
            });
          setTimeout(function () {
            location.reload();
          }, 1200);
        }
      },
      deleteReviewButton(id) {
        this.fetchAllReviews();
        this.deleteReview(id);
        this.fetchAllReviews();
      },
      postReview() {
        var obj = {
          "comment": this.comment,
          "userId": this.getUserMe.profile._id,
          "appartId": this.$route.params.id,
          "profileId": null
        }
        this.createReview(obj);

        if (this.getCreateReviewResponse.success) {
          this.createReviewError = null;
          this.createReviewSuccess = this.getCreateReviewResponse.success;
          var warningParams = {
            from_name: this.getUserMe.profile.username,
            reply_to: this.getUserMe.profile.email,
            message: "Commentaire posté : " + this.comment,
            to_email: process.env.VUE_APP_TO_EMAIL,
            title: "Commentaire"
          }

          emailjs.send(process.env.VUE_APP_SERVICE_ID, this.email_template.message, warningParams, process.env
              .VUE_APP_USER_ID)
            .then((result) => {
              console.log('SUCCESS!', result.status, result.text);
            }, (error) => {
              console.log('FAILED...', error);
            });
          setTimeout(function () {
            location.reload();
          }, 1200);
        }


      },



    },
    created() {
      this.fetchAllReviews();

      this.fetchAppartById(this.$route.params.id);
      if (window.localStorage.getItem(this.viastoken)) {

        this.fetchUserMe();
      }

      this.fetchAllReservations();
      this.getEvents();
      this.createSuccess = null;
      this.createReviewSuccess = null;
      this.createReviewError = null;
      this.getCreateReservationResponse.success = null;
      this.getCreateReservationResponse.error = null;





    },
    computed: {
      ...mapGetters([
        "getAppartById",
        "getUserMe",
        "getAllReviews",
        "getCreateReservationResponse",
        "getAllReservations",
        "getCreateWarningResponse",
        "getCreateReviewResponse"

      ]),
      reviewOfAppart() {
        //console.log(this.$route.params.id);

        return this.getAllReviews.Review.filter((review) => {
          if (review.profileId == null && review.appartId != null) {
            return review.appartId._id
              .toLowerCase()
              .includes(this.$route.params.id.toLowerCase())
          }
        });


      },
    },
  };
</script>

<style>
  .img {
    border-color: aquamarine;
  }

  .img:hover {
    -ms-transform: scale(1.5);
    /* IE 9 */
    -webkit-transform: scale(1.5);
    /* Safari 3-8 */
    transform: scale(3);

  }
</style>