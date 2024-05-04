<script setup>
defineProps(['urlvideo']);
</script>

<template>
        <video :src="urlvideo" muted autoplay loop ></video>
        <h5>{{ urlvideo }}</h5>
</template>

<style scoped>
video{
    width:100%;
    height: 600px;
}
</style>