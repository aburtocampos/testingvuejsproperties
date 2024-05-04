<script setup>
import Navbar from '../components/generals/Navbar.vue'
import Hero from '../components/uniques/Hero.vue'
import Cards from '../components/uniques/Cards.vue'
import VideoComponent  from '@/components/generals/VideoComponent.vue'

const videoPath = '@/assets/videos/axel.mp4'

</script>

<template>
    <Navbar/>
    <Hero/>
    <Cards/>
   
    <VideoComponent :videoSrc="videoPath"  />
    <img src="@/assets/images/alltruismo.png" class="img-fluid"/>
    <video src="@/assets/videos/axel.mp4" muted autoplay loop type="video/mp4" ></video>
</template>

<style scoped>

</style>
