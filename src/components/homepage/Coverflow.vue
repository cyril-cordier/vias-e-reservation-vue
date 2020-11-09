
<template>
<!-- attention des bugs sur firefox a cause des shadows box -->
<div class="pb-10 m-4 ">
    <div class="lg:flex justify-center mt-20 border-black hidden">
        <router-link to="/rechercheappart">
        <ul id="menu">
        <li> <img style="background-size:cover" src= '../../assets/loginPlage.jpg'> </li>
        <li class="highlighted"> <img style="background-size:cover" src= '../../assets/logo_vias-e-reservation.jpg'> </li>
        <li> <img style="background-size:cover" src= '../../assets/registerPlage.jpg'> </li>
        </ul>
        </router-link>
    </div>
    <div class="lg:hidden flex w-full mt-20 justify-center border-black">
        <router-link to="/rechercheappart">
      
        
        <img style="background-size:cover " src= '../../assets/Home/LogoHome.png'> 
        
       
        </router-link>
    </div>
</div>
</template>

<script>
export default {
    name: "Coverflow"
}
</script>

<style  scoped>

ul#menu {
  padding: 0;
  margin: 0;
  -moz-perspective: 780px;
  -webkit-perspective: 780px;
  perspective: 780px;
  background-color: transparent;
}

ul#menu li a {
  display: block;
  width: 100%;
  height: 100%;
}

ul#menu li {
  text-indent: -9999px;
  position: relative;
  display: inline-block;
  width: 15rem;
  height: 14rem;
  margin-right: -70px;
  -moz-background-size: contain;
  -webkit-background-size: contain;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0 0;
  z-index: 50;
  -moz-transform: rotateY(45deg);
  -webkit-transform: rotateY(45deg);
  transform: rotateY(45deg);
  -moz-transition: all .45s;
  -webkit-transition: all .45s;
  transition: all .45s;
  opacity: .8;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.4), 0 0 30px rgba(0,0,0,0.2);
}

ul#menu li:last-child,
ul#menu li:first-child { z-index: 45; }

ul#menu li:nth-child(2),
ul#menu li:nth-child(5) { z-index: 46; }

ul#menu li:nth-child(3) { z-index: 51; }

ul#menu li.highlighted {
  -moz-transform: rotateY(0deg) scale(1.2);
  -webkit-transform: rotateY(0deg) scale(1.2);
  transform: rotateY(0deg) scale(1.2);
  z-index: 55!important;
}

ul#menu .highlighted ~ li {
  -moz-transform: rotateY(-45deg);
  -webkit-transform: rotateY(-45deg);
  transform: rotateY(-45deg);
}

ul#menu li:hover,
ul#menu li:first-child:hover,
ul#menu li.highlighted ~ li:hover { z-index: 60!important; }

ul#menu li:hover {
  -moz-transform: rotateY(0deg) scale(1.2);
  -webkit-transform: rotateY(0deg) scale(1.2);
  transform: rotateY(0deg) scale(1.2);
  opacity: 1;
}

ul#menu li:hover ~ li {
  -moz-transform: rotateY(-45deg);
  -webkit-transform: rotateY(-45deg);
  transform: rotateY(-45deg);
}

ul#menu:hover li:not(:hover) {
  -moz-transform: rotateY(45deg);
  -webkit-transform: rotateY(45deg);
  transform: rotateY(45deg);
}

ul#menu:hover li:hover ~ li {
  -moz-transform: rotateY(-45deg);
  -webkit-transform: rotateY(-45deg);
  transform: rotateY(-45deg);
}

ul#menu:not(:hover) li.highlighted { opacity: 1; }

ul#menu li:after {
  content: "";
  width: 200px;
  height: 20px;
  background: rgba(255,255,255,.5);
  position: absolute;
  bottom: -20px;
  left: 0;
  -webkit-mask-image: -webkit-gradient(linear, left 10%, left bottom, from(rgba(0,0,0,.5)), to(rgba(0,0,0,0)));
}


</style>