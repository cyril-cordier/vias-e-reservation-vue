<template>
  <!-- toggle reservations -->

      

        <div class="rounded-lg text-light w-85 mx-auto p-10 bg-gray-300 row">


          <div class="w-12/12 inline-block p-auto m-auto">
            <div class="mb-4">
              <h3 class="text-center font-bold text-xl">Mes réservations</h3>
            </div>
            <router-link to="/recherchejeux"><button
              class="px-5 py-1 m-10  font-semibold transform hover:scale-105 bg-gray-200 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-gray-700 hover:inner-shadow text-gray-800 hover:text-gray-100 px-2 py-1 rounded text-lg focus:outline-none shadow"
              type="submit" ><span>Chercher un jeu</span></button></router-link>

            

              <div class="max-w-sm w-full lg:max-w-full lg:flex mb-5">
                <div
                  class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  style="background-image: url('https://images.fr.shopping.rakuten.com/photo/monopoly-standard-en-euro-1039599030_L.jpg')"
                  title="">
                </div>
                <div
                  class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div class="mb-8">

                    <div class="text-gray-900 font-bold text-xl mb-2">Monopoly</div>
                    <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                  </div>
                  <div class="flex items-center">

                    <div class="text-sm">
                      <p class="text-gray-900 leading-none">Catégorie : Hasard et parcours</p>
                      <p class="text-gray-600">Statut : Disponible</p>
                    </div>
                  </div>
                  <div class="row">
                    <button
                      class="px-5 py-1 m-10 w-1/6 font-semibold transform hover:scale-105 bg-gray-200 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-gray-700 hover:inner-shadow text-gray-800 hover:text-gray-100 px-2 py-1 rounded text-lg focus:outline-none shadow"
                      type="submit" @click="EditGame_modal = !EditGame_modal"><span>Modifier</span></button>
                    <button
                      class="px-5 py-1 m-10 w-1/6 font-semibold transform hover:scale-105 bg-gray-200 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-gray-700 hover:inner-shadow text-gray-800 hover:text-gray-100 px-2 py-1 rounded text-lg focus:outline-none shadow"
                      type="submit"><span>Supprimer</span></button>
                  </div>
                </div>
              </div>

              <div class="max-w-sm w-full lg:max-w-full lg:flex mb-5">
                <div
                  class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  style="background-image: url('https://images.fr.shopping.rakuten.com/photo/monopoly-standard-en-euro-1039599030_L.jpg')"
                  title="">
                </div>
                <div
                  class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div class="mb-8">

                    <div class="text-gray-900 font-bold text-xl mb-2">Monopoly</div>
                    <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                  </div>
                  <div class="flex items-center">

                    <div class="text-sm">
                      <p class="text-gray-900 leading-none">Catégorie : Hasard et parcours</p>
                      <p class="text-gray-600">Statut : En prêt</p>
                    </div>
                  </div>
                  <div class="row">
                    <button
                      class="px-5 py-1 m-10 w-1/6 font-semibold transform hover:scale-105 bg-gray-200 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-gray-700 hover:inner-shadow text-gray-800 hover:text-gray-100 px-2 py-1 rounded text-lg focus:outline-none shadow"
                      type="submit" @click="EditGame_modal = !EditGame_modal"><span>Modifier</span></button>
                    <button
                      class="px-5 py-1 m-10 w-1/6 font-semibold transform hover:scale-105 bg-gray-200 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-gray-700 hover:inner-shadow text-gray-800 hover:text-gray-100 px-2 py-1 rounded text-lg focus:outline-none shadow"
                      type="submit"><span>Supprimer</span></button>
                  </div>
                </div>
              </div>

              <div class="max-w-sm w-full lg:max-w-full lg:flex mb-5">
                <div
                  class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  style="background-image: url('https://images.fr.shopping.rakuten.com/photo/monopoly-standard-en-euro-1039599030_L.jpg')"
                  title="">
                </div>
                <div
                  class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div class="mb-8">

                    <div class="text-gray-900 font-bold text-xl mb-2">Monopoly</div>
                    <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                  </div>
                  <div class="flex items-center">

                    <div class="text-sm">
                      <p class="text-gray-900 leading-none">Catégorie : Hasard et parcours</p>
                      <p class="text-gray-600">Statut : Disponible</p>
                    </div>
                  </div>
                  <div class="row">
                    <button
                      class="px-5 py-1 m-10 w-1/6 font-semibold transform hover:scale-105 bg-gray-200 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-gray-700 hover:inner-shadow text-gray-800 hover:text-gray-100 px-2 py-1 rounded text-lg focus:outline-none shadow"
                      type="submit" @click="EditGame_modal = !EditGame_modal"><span>Modifier</span></button>
                    <button
                      class="px-5 py-1 m-10 w-1/6 font-semibold transform hover:scale-105 bg-gray-200 hover:bg-orange-400 focus:scale-105 focus:bg-orange-400 focus:text-gray-700 hover:inner-shadow text-gray-800 hover:text-gray-100 px-2 py-1 rounded text-lg focus:outline-none shadow"
                      type="submit"><span>Supprimer</span></button>
                  </div>
                </div>
              </div>

           
          </div>

        </div>






</template>

<script>
export default {

}
</script>

<style>

</style>