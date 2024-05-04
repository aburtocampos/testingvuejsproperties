<script setup>
const props = defineProps({
    videoSrc: {
      type: String,
      required: true
    }
})


</script>

<template>
        <video :src="videoSrc" muted autoplay loop type="video/mp4" ></video>
        <h5>{{ videoSrc }}</h5>
</template>

<style scoped>
video{
    width:100%;
    height: 600px;
}
</style>