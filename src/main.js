import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import jwt_decode from 'jwt-decode';




router.beforeEach((to, from, next) => {
  const isLogged = localStorage.getItem('viastoken');
   
    if (isLogged ) {
      if((jwt_decode(isLogged).exp-(Math.round(+new Date() / 100)))>=0){
            window.location.href="/login"
            next('/login')
       }
      next()
    }
    else{
      if(to.meta.requiresVisitor) next()
      else next('/login')
    }
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
