
<template>
<!-- attention des bugs sur firefox a cause des shadows box -->
<div class="pb-20 m-4 ">
    <div class="lg:flex justify-center mt-20 border-black hidden">
        <ul id="menu">
        <li> <a href="/recherchejeux" style="background-size:cover;background-image: url('https://www.espritjeu.com/upload/image/rush-hour-p-image-64205-grande.jpg');">Item 1</a> </li>
        <li> <a href="/recherchejeux" style="background-size:cover;background-image: url('https://www.cdiscount.com/pdt2/3/1/9/1/700x700/edu8412668185319/rw/educa-jeux-de-societe-le-lynx-70-images.jpg');">Item 2</a> </li>
        <li class="highlighted"> <a href="/recherchejeux" style="background-size:cover;background-image: url('https://www.carrefour.fr/media/1500x1500/Photosite/BAZAR/JOUET_SPORT/5010993414277_PHOTOSITE_20191019_163922_0.jpg?placeholder=1');">Item 3</a> </li>
        <li> <a href="/recherchejeux" style="background-size:cover;background-image: url('https://www.carrefour.fr/media/1500x1500/Photosite/BAZAR/JOUET_SPORT/3181860750247_PHOTOSITE_20191024_123658_1.jpg?placeholder=1');">Item 4</a> </li>
        <li> <a href="/recherchejeux" style="background-size:cover;background-image: url('https://www.espritjeu.com/upload/image/dixit-p-image-53777-grande.jpg');">Item 5</a> </li>
        <li> <a href="/recherchejeux" style="background-size:cover;background-image: url('https://lagranderecre-lagranderecre-fr-storage.omn.proximis.com/Imagestorage/images/0/0/5d2c6b284c1a7_230269.jpg');">Item 6</a> </li>
        </ul>
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