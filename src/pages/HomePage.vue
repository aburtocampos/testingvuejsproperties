<script setup>
import Navbar from '../components/generals/Navbar.vue'
import Hero from '../components/uniques/Hero.vue'
import Cards from '../components/uniques/Cards.vue'
import MVideo from '../components/generals/MVideo.vue'
const myvideo = '/src/assets/videos/axel.mp4';
</script>

<template>
    <Navbar/>
    <Hero/>
    <Cards/>
    <MVideo urlvideo="/src/assets/videos/axel.mp4" />
</template>

<style scoped>

</style>
