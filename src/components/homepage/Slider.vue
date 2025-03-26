<script setup>

import { ref, onMounted, onBeforeUnmount } from 'vue';
import { getItems } from '../../libs/fetchUtils.js'

const sliders = ref([]);
const imageIndex = ref(0);
const n = ref(0);
const imageLocation = ref('');
const dots = ref([]);
const transitioning = ref(false);
let interval = null;

onMounted(async () => {
  sliders.value = (await getItems(`${import.meta.env.VITE_APP_URL}/sliders`)).map(slider => slider.img);
  imageLocation.value = sliders.value[0];
  for (let i = 0; i < sliders.value.length; i++) {
    dots.value.push(i);
  }
  interval = setInterval(next, 5000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});

function next() {
  n.value++;
  if (n.value >= sliders.value.length) {
    n.value = 0;
  }
  imageIndex.value = n.value;
  imageSlider(imageIndex.value);
}

function prev() {
  n.value--;
  if (n.value < 0) {
    n.value = sliders.value.length - 1;
  }
  imageIndex.value = n.value;
  imageSlider(imageIndex.value);
}

function imageSlider(index) {
  transitioning.value = true;
  setTimeout(() => {
    if (index < sliders.value.length) {
      imageLocation.value = sliders.value[index];
    }
    transitioning.value = false;
  }, 500);
}
</script>

<template>
  <div class="relative w-[95%] max-w-8xl mx-auto flex justify-center items-center py-10 overflow-hidden">
    <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${imageIndex * 100}%)` }">
      <img v-for="(src, index) in sliders" :key="index" :src="src" alt="slider" class="w-full h-auto object-cover flex-shrink-0">
    </div>
    <button @click="prev" class="absolute left-2 top-1/2 -translate-y-1/2 px-4 py-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24" class="drop-shadow-[12px_12px_24px_rgba(0,0,0,1)]">
        <g fill="none" fill-rule="evenodd">
            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
            <path fill="#FFFFFF" d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z" />
        </g>
      </svg>
    </button>
    <button @click="next" class="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2" >
      <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24" class="drop-shadow-[12px_12px_24px_rgba(0,0,0,1)]">
      	<g fill="none" fill-rule="evenodd">
      		<path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
      		<path fill="#FFFFFF" d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z" />
      	</g>
      </svg>
    </button>

    <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-2">
      <span 
        v-for="(dot, index) in dots" 
        :key="index" 
        class="w-3 h-3 rounded-full bg-[#627A7D] shadow-md transition-all duration-300"
        :class="{ 'bg-white': index === n }">
      </span>
    </div>
  </div>
</template>

<style scoped>
</style>
