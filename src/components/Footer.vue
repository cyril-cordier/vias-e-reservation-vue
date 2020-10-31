<template>
    <footer class="flex flex-wrap justify-center px-4 text-gray-700 bg-gray-200">
        <div class="container py-6">
            <h1 class="text-center text-lg font-bold lg:text-2xl">Reçois toutes nos actualités dans ta boite Email, <br> et sois avertis des nouveaux jeux disponibles autour de chez toi !</h1>
            <div class="flex justify-center mt-6">
                <div class="bg-white rounded-lg">
                    <div class="flex flex-wrap justify-between md:flex-row">
                        <input type="email" class="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none"
                            placeholder="Rentre ton Email">
                        <button
                            class="w-full m-1 p-2 text-sm transform hover:scale-105 bg-gray-400 hover:bg-orange-400 hover:text-white rounded-lg font-semibold uppercase lg:w-auto">Souscription</button>
                    </div>
                </div>
            </div>
            <hr class="h-px mt-6 bg-orange-500 border-none">
            <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
                <div>
                <img class="h-16" src="../assets/logoGame_ssfond.png" alt="Logo">
                </div>
                <div class="flex mt-4 md:m-0">
                    <div class="-mx-4">
                        <a href="#" class="px-2 py-1 text-sm hover:bg-orange-400 rounded hover:shadow">A Propos</a>
                        <a href="#" class="px-2 py-1 text-sm hover:bg-orange-400 rounded hover:shadow">Blog</a>
                        <a href="#" class="px-2 py-1 text-sm hover:bg-orange-400 rounded hover:shadow">Actualités</a>
                        <a href="#" class="px-2 py-1 text-sm hover:bg-orange-400 rounded hover:shadow">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</template>

<script>
    export default {
        name: "Footer",
    }
</script>

<style scoped>




</style>