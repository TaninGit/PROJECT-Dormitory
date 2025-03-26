<script setup>
import { ref, onMounted } from 'vue';
import roomTypes from '../../../data/roomtypes.json';
import Roomtype from '../Roomtype.vue';

const rooms = ref([]);

onMounted(() => {
  rooms.value = roomTypes;
});
</script>

<template>
  <div class="relative bg-cover bg-center py-25 w-full bg-[url('../assets/background/roomcomponentBackground.png')]">
    <div class="absolute inset-0 bg-black opacity-20"></div>
    <div class="relative z-10 flex flex-wrap justify-center gap-12 mt-12">
      <div class="relative z-10 w-64 flex flex-col justify-center items-center text-white font-noto-sans-thai drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)]">
        <h1 class="font-bold text-6xl">ห้องพัก</h1>
        <div class="bg-[#E09F3E] h-1 w-40 mx-auto mt-2"></div>
      </div>
      <Roomtype v-for="room in rooms" :key="room.id" :room-id="room.id">
        <template #image>
          <img :src="`/roomtypes/${room.image}`" alt="รูปห้องพัก" class="w-full h-full object-cover">
        </template>
        <template #title>
          {{ room.title }}
        </template>
        <template #description>
          {{ room.description }}
        </template>
      </Roomtype>
    </div>
  </div>
</template>
