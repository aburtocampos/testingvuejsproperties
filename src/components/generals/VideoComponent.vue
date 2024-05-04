<script setup>
defineProps(['videoUrl']);

</script>

<template>
        <video :src="videoUrl" muted autoplay loop ></video>
        <h5>{{ videoUrl }}</h5>
</template>

<style scoped>
video{
    width:100%;
    height: 600px;
}
</style>