<script setup>
import newsComponent from './NewsComponent.vue';
import { ref, onMounted } from 'vue';
import { getItems } from '../../libs/fetchUtils.js'

const newsList = ref([])

onMounted(async () => {
  try {
    const news = await getItems(`${import.meta.env.VITE_APP_URL}/news`)
    newsList.value = Object.values(news)
    newsList.value = newsList.value.slice(0, 3);   
  }
  catch (error) {
    console.log(error)
  }
})
</script>

<template>
<div class="bg-[rgba(157,181,178,0.25)] bg-cover w-screen py-5">
  <div class="m-5 md:m-10">
    <div class="w-full flex flex-col justify-center items-center text-center">
      <h1 class="font-noto-sans-thai text-[#1E555C] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
        ข่าวประชาสัมพันธ์
      </h1>
      <div class="w-24 md:w-[300px] h-1 md:h-[4px] bg-[#E09F3E] mt-2 rounded-md drop-shadow-md"></div>
    </div>

    <RouterLink to="/news">   
    <div class="w-full flex justify-end items-center mt-3 cursor-pointer hover:underline hover:text-[#9db5b2]">
      <p class="font-noto-sans-thai text-[#1E555C] text-sm md:text-base lg:text-lg xl:text-xl">
        ดูทั้งหมด
      </p>
      <img src="../../assets/icon/arrowright.png" class="h-2 md:h-4 ml-2">
    </div>
  </RouterLink>

    <div class="flex flex-col md:flex-row gap-5 mt-5">
      <div class="w-full md:w-9/16  p-5 cursor-pointer  hover:bg-gray-300 rounded-2xl ">
        <img src="../../assets/images/mainNews.png" alt="news" class="pb-3 w-full h-auto max-w-md mx-auto md:max-w-250">

        <div>
          <div class="flex items-center">
            <img src="../../assets/icon/clock.png" alt="clock" class="h-4 md:h-5">
            <p class="font-noto-sans-thai text-[#A3A3A3] font-light text-xs md:text-sm ml-2">10 สิงหาคม 2568</p>
          </div>
          <h2 class="font-noto-sans-thai text-[#404546] text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
            กิจกรรมต้อนรับน้องใหม่ Coming Soon!
          </h2>
          <p class="font-noto-sans-thai text-[#404546] text-sm md:text-base lg:text-lg xl:text-xl">
            เตรียมพบกับกิจกรรมสุดสนุกสำหรับนักศึกษาใหม่ เชื่อมต่อเพื่อนใหม่ก่อนเปิดเทอม
          </p>
        </div>
      </div>

      <div class="w-full md:w-7/16 flex flex-col gap-4 md:pr-10">
        <div v-for="(news, index) in newsList" :key="index" class="rounded-lg  ">
          <newsComponent>
            <template #image>
              <img :src="`/news/${news.img}`" alt="news" class="w-full md:w-100   rounded-md">
            </template>

            <template #header>
              <h3 class="font-noto-sans-thai text-[#404546] text-base md:text-base lg:text-lg xl:text-xl font-bold">
                {{ news.header }}
              </h3>
            </template>

            <template #content>
              <p class="font-noto-sans-thai text-[#404546] text-sm md:text-sm lg:text-sm xl:text-base w-50 truncate">
                {{ news.desc }}
              </p>
            </template>

            <template #date>
              <div class="flex items-center">
                <img src="../../assets/icon/clock.png" alt="clock" class="h-4 md:h-5">
                <p class="font-noto-sans-thai text-[#A3A3A3] font-light text-xs md:text-sm ml-2">
                  {{ news.date }}
                </p>
              </div>
            </template>
          </newsComponent>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<style scoped></style>