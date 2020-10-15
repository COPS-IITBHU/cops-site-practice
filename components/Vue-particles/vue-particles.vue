<template>
<div>
    <div class="bg">
        <canvas id="background"></canvas>
   </div>
</div>
    
</template>

<script>
import Thpace from 'thpace';
export default {
    name:'vue-particles',
    mounted(){
        const canvas = document.getElementById('background');
        const settings = {
            colors: ['#984998', '#332a41', '#000000'],
            triangleSize: 80,
            particleSettings:{
                count:5,
                radius:1
            }
        };

        Thpace.create(canvas, settings);
    }
    
}
</script>

<style scoped>
html,
body {
    margin: 0; 
}
.bg {
    height: 50vh;
}
</style>