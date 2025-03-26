<script setup>
import news from '../homepage/News.vue';
import { ref, onMounted } from 'vue';
import { getItems } from '../../libs/fetchUtils.js'

const newsList = ref([])

onMounted(async () => {
    try {
        newsList.value = await getItems(`${import.meta.env.VITE_APP_URL}/news`)
    }
    catch (error) {
        console.log(error)
    }
})
</script>

<template>
    <div class="h-15"></div>
    <div
        class="bg-[url('../assets/background/dormBackground.png')] relative flex items-center justify-center bg-cover bg-center pt-10">
        <div class="p-6 w-full">
            <div class="max-w-5xl mx-auto bg-white shadow-lg rounded-3xl relative pb-10 px-10">
                <div class="sticky top-15 bg-white z-50 pt-10 pb-4 px-4 border-b border-b-[#9db5b2] ">
                    <h2 class="font-noto-sans-thai text-3xl font-bold text-[#1E555C] ">
                        ข่าวประชาสัมพันธ์
                    </h2>
                </div>

                <div class="border-b-1 border-b-[#9db5b2] p-5 ">
                    <div class="flex flex-col md:flex-row cursor-pointer hover:bg-gray-300 rounded-2xl p-3 ">
                        <div class=" mr-5">
                        <img src="../../assets/images/mainNewsCrop.png" alt="news" class="w-full md:w-100 rounded-md">
</div>
                        <div class="mt-2 w-full pt-2">
                            <h2
                                class="font-noto-sans-thai text-[#404546] text-base md:text-lg lg:text-xl xl:text-xl font-bold">
                                กิจกรรมต้อนรับน้องใหม่ Coming Soon!
                            </h2>
                            <p class="font-noto-sans-thai text-[#404546] text-sm md:text-base lg:text-lg xl:text-base">
                                เตรียมพบกับกิจกรรมสุดสนุกสำหรับนักศึกษาใหม่ เชื่อมต่อเพื่อนใหม่ก่อนเปิดเทอม
                            </p>

                            <div class="flex items-center">
                                <img src="../../assets/icon/clock.png" alt="clock" class="h-4 md:h-5">
                                <p class="font-noto-sans-thai text-[#A3A3A3] font-light text-xs md:text-sm ml-2">10
                                    สิงหาคม 2568</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-for="(news, index) in newsList" :key="index"
                    class="border-b-1 border-b-[#9db5b2] last:border-none p-5">
                    <news>
                        <template #image>
                            <img :src="`/news/${news.img}`" alt="news" class="w-full md:w-100 rounded-md">
                        </template>

                        <template #header>
                            <h3
                                class="font-noto-sans-thai text-[#404546] text-base md:text-lg lg:text-xl xl:text-xl font-bold">
                                {{ news.header }}
                            </h3>
                        </template>

                        <template #content>
                            <p class="font-noto-sans-thai text-[#404546] text-sm md:text-base lg:text-lg xl:text-base">
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
                    </news>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped></style>