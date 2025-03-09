<script setup>
import sliders from '/data/slider.json';
import { ref, onMounted } from 'vue';

const imageIndex = ref(0);
const n = ref(0);
const imageLocation = ref(sliders[0]);
const dots = ref([]);
for (let i = 0; i < sliders.length; i++) {
  dots.value.push(i);
}
const transitioning = ref(false);
let interval = null;

function next() {
  n.value++;
  if (n.value >= sliders.length) {
    n.value = 0;
  }
  imageIndex.value = n.value;
  imageSlider(imageIndex.value);
}

function prev() {
  n.value--;
  if (n.value < 0) {
    n.value = sliders.length - 1;
  }
  imageIndex.value = n.value;
  imageSlider(imageIndex.value);
}

function imageSlider(index) {
  transitioning.value = true;
  setTimeout(() => {
    if (index < sliders.length) {
      imageLocation.value = sliders[index];
    }
    transitioning.value = false;
  }, 500);
}

onMounted(() => {
    interval = setInterval(next, 5000);
});

</script>

<template>
    <div class="relative w-[95%] max-w-8xl mx-auto flex justify-center items-center py-10 overflow-hidden">
        <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${imageIndex * 100}%)` }">
        <img v-for="(src, index) in sliders" :key="index" :src="src" alt="slider" class="w-full h-auto object-cover flex-shrink-0">
      </div>
  
      <button @click="prev" class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full shadow-md hover:bg-black/70">
        <
      </button>
      <button @click="next" class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full shadow-md hover:bg-black/70">
        >
      </button>
  
      <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-2">
        <span 
          v-for="(dot, index) in dots" 
          :key="index" 
          class="w-3 h-3 rounded-full bg-gray-600 shadow-md transition-all duration-300"
          :class="{ 'bg-white': index === n }">
        </span>
      </div>
    </div>
  </template>

<style scoped>
</style>