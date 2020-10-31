import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user.js'
import game from './modules/game'
import reservation from './modules/reservations'
import reviews from './modules/reviews'
import contents from './modules/contents'
import warnings from './modules/warnings'


 import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    user,
    game,
    reservation,
    reviews,
    contents,
    warnings

  },
   plugins: [createPersistedState()],
  
})