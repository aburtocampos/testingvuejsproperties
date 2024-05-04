<script setup>
const props = defineProps({
    urlvideo:{
        type:String,
        required:true
    }
})
console.log('-',props.urlvideo)
</script>

<template>
        <video :src="props.urlvideo" muted autoplay loop ></video>
</template>

<style scoped>
video{
    width:100%;
    height: 600px;
}
</style>