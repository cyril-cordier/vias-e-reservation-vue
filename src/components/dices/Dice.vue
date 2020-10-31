<template>
  <div class="">
     <div class="h-auto flex Dice justify-center p-5">
        <div class='overlay'></div>
            <div id="app" v-cloak>
                <div id="dice" class="mb-10">
                    <transition name="slide-fade" class=""> 
                    <img v-bind:src="showDiceImage" class="motion-safe:animate-spin" alt="dice">
                    </transition>
                </div>
                <button 
                class="bg-orange-500 hover:bg-orange-400 transition duration-500 ease-in-out focus:outline-none transform hover:scale-105 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded" 
                v-on:click="rollDice">Roll Dice
                </button>  
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Dice',
   data(){
      return{
          dice: 0,
      }
  },
  computed: {
    showDiceImage: function() {
      if ( this.dice === 1) {
        return "http://i.imgur.com/6knk862.png";
      }
      
      if ( this.dice === 2) {
        return "http://i.imgur.com/ik7dK9D.png";
      }
      
      if ( this.dice === 3) {
        return "http://i.imgur.com/sh0H0td.png";
      }
      
      if ( this.dice === 4) {
        return "http://i.imgur.com/1GPkhq3.png";
      }
      
      if ( this.dice === 5) {
        return "http://i.imgur.com/bINitmy.png";
      }
      
      if ( this.dice === 6) {
        return "http://i.imgur.com/6qXMSrt.png";
      }
      return "http://i.imgur.com/6knk862.png";
    }
  },
  methods: {
    rollDice: function() {
      let dice = Math.floor(Math.random() * 6) + 1;
      this.dice = dice;
    },
}
}
</script>
<style scoped>

#dice img {
   width: 100px;
}

</style>
