<script setup>
import news from "./News.vue";
// import newsList from "../../../data/news.json"
</script>

<template>
    <div class="m-10">
        
        <div class="w-full flex flex-col justify-center items-center text-center">
    <h1 class="font-noto-sans-thai text-[#1E555C] text-5xl font-bold">ข่าวประชาสัมพันธ์</h1>
    <div class="w-[300px] h-[4px] bg-[#E09F3E] mt-2  p-1  rounded-md drop-shadow-[5px_3px_5px_rgba(0,0,0,0.3)]"></div>
</div>
<div class="w-full flex justify-end items-center mt-3">
    <p class="font-noto-sans-thai text-[#1E555C] text-xl">ดูทั้งหมด</p>
    <img src="../../assets/icon/arrowright.png" class="h-4 ml-2">
</div>

        <div class="flex flex-row  ">
            <div class="w-9/16 m-5 ">
                <img src="../../assets/images/mainNews.png" alt="news" class="pb-3 w-full h-auto max-w-250">
                
                <div>
                    <div class="flex">
                    <img src="../../assets/icon/clock.png" alt="clock" class="h-5">
                    <p class="font-noto-sans-thai text-[#A3A3A3] font-light text-sm">10 สิงหาคม 2568</p>
                </div>
                <h2 class="font-noto-sans-thai text-[#404546] text-3xl font-bold">กิจกรรมต้อนรับน้องใหม่ Coming
                    Soon!</h2>
                <p class="font-noto-sans-thai text-[#404546] text-xl">เตรียมพบกับกิจกรรมสุดสนุกสำหรับนักศึกษาใหม่
                    เชื่อมต่อเพื่อนใหม่ก่อนเปิดเทอม</p>
                </div>
            </div>
            <div class="w-7/16 flex flex-col pr-10 justify-around">
                <div v-for="(news, index) in newsList" :key="index">
                    <news >
                        <template v-slot:image>
                            <img :src="news.img" alt="" class="w-100 aspect-w-1 aspect-h-1">
                        </template>
                        <template v-slot:title>
                            <h3 class="font-noto-sans-thai text-[#404546] text-2xl font-bold">{{ news.header }}</h3>
                        </template>

                        <template v-slot:content>
                            <p class="font-noto-sans-thai text-[#404546] text-lg">{{ news.desc }}</p>
                        </template>

                        <template v-slot:date>
                            <div class="flex">
                                <img src="../../assets/icon/clock.png" alt="clock" class="h-5">
                                <p class="font-noto-sans-thai text-[#A3A3A3] font-light text-sm">{{ news.date }}</p>
                            </div>
                        </template>
                    </news>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>