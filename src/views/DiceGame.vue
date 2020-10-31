<template>
  <div>
  <!-- https://play.google.com/store/apps/details?id=fr.sevenpixels.dice&hl=fr -->
  <!-- https://apps.apple.com/fr/app/d%C3%A9/id620453835 -->

    <Navbar />

  <h1 class="font-bold text-xl text-center m-2">Notre simulateur de dés</h1> 

   <div class="flex flex-col justify-center bg-gray-200 m-3 rounded-sm"> 
      <select v-model="nb_dice"
          class="mx-auto border border-orange-200 text-gray-700 bg-orange-400 my-6 rounded focus:outline-none focus:bg-orange-400 focus:border-orange-200"
                        
                                
          id="nb">
          <option :value="null" class="text-white" disabled>Sélectionner le nombre de dés</option>
          <option value=1>1</option>
          <option value=2>2</option>
          <option value=3>3</option>
          <option value=4>4</option>
          <option value=5>5</option>
          <option value=6>6</option>                                
      </select>
<div class="flex flex-wrap justify-center">
          <img src="../assets/gifchuck.gif" alt="Chuck Norris can roll all dices with his foot" title="Chuck Norris can roll all dices with his foot" class="w-32 h-32"/>
          <Dice v-show="nb_dice >=1" />
          <Dice v-show="nb_dice >=2" />
          <Dice v-show="nb_dice >=3" />
          <Dice v-show="nb_dice >=4" />
          <Dice v-show="nb_dice >=5" />
          <Dice v-show="nb_dice >=6" />
          
     </div> 
     <div class="flex lg:flex-wrap justify-center">
          <div class="font-bold lg:text-xl text-center m-3 w-1/4   border bg-white shadow">
              <p class="m-2">Application de dés pour Android</p> 
         <a href="https://play.google.com/store/apps/details?id=fr.sevenpixels.dice&hl=fr"> <img src="../assets/diceandroid.png" alt="" class="w-1/3 m-3 mx-auto rounded-sm"></a>
          </div> 
        <div class="font-bold lg:text-xl text-center m-3 w-1/4 border bg-white shadow">
              <p class="m-2">Application de dés pour Apple</p>  
         <a href="https://apps.apple.com/fr/app/d%C3%A9/id620453835"> <img src="../assets/diceapple.png" alt="" class="w-1/3 m-3 mx-auto rounded-sm "></a> 
          </div>    
    </div>
  </div>
    <Footer/>
  
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Dice from "../components/dices/Dice"


export default {
  name: 'DiceGame',
  components: {
    Navbar,
    Footer,
    Dice
    
  },
  data(){
      return{
        nb_dice:1,
      }
  },
  methods:{
    
  }
  
}
</script>

<style scoped>

</style>

