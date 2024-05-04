<script setup>
import Navbar from '../components/generals/Navbar.vue'
import Hero from '../components/uniques/Hero.vue'
import Cards from '../components/uniques/Cards.vue'
import VideoComponent  from '../components/generals/VideoComponent.vue'

const videoUrl = '/assets/pexels.mp4';


</script>

<template>
    <Navbar/>
    <Hero/>
    <Cards/>
    <VideoComponent  videoUrl="/src/assets/pexels.mp4" />
</template>

<style scoped>

</style>
