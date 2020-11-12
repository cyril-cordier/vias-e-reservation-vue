<template>
    <footer class="flex flex-wrap justify-center px-4 text-blue-700 bg-blue-200">
        <div class="container py-6">
            
            <hr class="h-px mt-6 bg-orange-500 border-none">
            <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
                <div>
                <router-link to="/"><img class="h-16" src="../assets/logo_vias-e-reservation.png" alt="Logo"></router-link>
                </div>
                <div>
                <small class="d-block mb-3 text-muted">© 2020 - Cyril CORDIER - Dernière mise à jour : 12/11/2020</small>
                </div>
                <div class="flex mt-4 md:m-0">
                    <div class="-mx-4">
                        <!-- <a href="#" class="px-2 py-1 text-sm hover:bg-orange-400 rounded hover:shadow">A Propos</a>
                        <a href="#" class="px-2 py-1 text-sm hover:bg-orange-400 rounded hover:shadow">Blog</a>
                        <a href="#" class="px-2 py-1 text-sm hover:bg-orange-400 rounded hover:shadow">Actualités</a>
                        <a href="#" class="px-2 py-1 text-sm hover:bg-orange-400 rounded hover:shadow">Contact</a> -->
                        
                        <a href="mailto:cyril.cordier@gmail.com" class="px-2 py-1 text-sm hover:bg-orange-400 rounded hover:shadow">Contact</a>
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