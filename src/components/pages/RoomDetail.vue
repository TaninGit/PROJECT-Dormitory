<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getItems } from '../../libs/fetchUtils.js'

const route = useRoute()
const roomDetail = ref([])
const room = ref(null)

onMounted(async () => {
    try {
        roomDetail.value = await getItems(`${import.meta.env.VITE_APP_URL}/roomdetails`)
        const roomId = String(route.params.id);
        room.value = roomDetail.value.find((r) => r.id === roomId)

        if (!room.value) {
            console.error("Room not found:", roomId)
        } else {
            console.log("Loaded Room:", room.value)
        }
    }
    catch (error) {
        console.log(error)
    }
})
</script>

<template>
    <div v-if="room">
        <div class="h-15"></div>
        <div
            class="font-noto-sans-thai relative flex items-center justify-center min-h-screen bg-[url('../assets/background/dormBackground.png')] bg-cover bg-center">
            <button type="button"
                class="absolute top-15 left-4 lg:left-8 z-10 flex items-center justify-center cursor-pointer"
                @click="$router.go(-1)">
                <img src="../../assets/icon/arrow-back.png" alt="back-arrow" class="absolute w-8 lg:w-15" />
                <img src="../../assets/icon/button-back.png" alt="back-button" class="w-10 lg:w-20" />
            </button>
            <div class="bg-white rounded-[3rem] px-5 lg:px-25 w-full max-w-8/10 shadow-lg relative py-15">
                <div class="flex flex-col lg:flex-row justify-between items-start mb-10">
                    <div class="w-full lg:w-1/2 max-w-md mx-auto mb-6 lg:mb-0">
                        <img :src="`/roomtypes/${room.image}`" alt="รูปห้องพัก" class="w-full h-auto rounded-2xl">
                    </div>
                    <div class="w-full lg:w-1/2">
                        <div class="text-center lg:text-left px-4 lg:px-0">
                            <h2 class="text-xl lg:text-2xl xl:text-3xl text-[#1E555C] font-bold ">{{ room.title }}</h2>
                            <p class="text-lg lg:text-xl xl:text-2xl text-[#1E555C] font-bold mb-5">{{ room.subtitle }}</p>
                            <div v-for="(roomDetail, index) in room.detail" :key="index"
                                class="text-sm lg:text-base xl:text-lg text-[#404546] my-2">
                                <ul class="list-disc pl-5">
                                    <li>{{ roomDetail }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="table-auto w-full text-left border-collapse border border-gray-200">
                        <thead>
                            <tr class="bg-[#9db5b2]">
                                <th class="border border-[#9db5b2] px-4 py-2 text-center text-[#1E555C]">ประเภทห้องพัก</th>
                                <th class="border border-[#9db5b2] px-4 py-2 text-center text-[#1E555C]">พักประจำรายเดือน</th>
                                <th class="border border-[#9db5b2] px-4 py-2 text-center text-[#1E555C]">รายวัน</th>
                                <th class="border border-[#9db5b2] px-4 py-2 text-center text-[#1E555C]">รายสัปดาห์</th>
                                <th class="border border-[#9db5b2] px-4 py-2 text-center text-[#1E555C]">ราย 15 วัน</th>
                                <th class="border border-[#9db5b2] px-4 py-2 text-center text-[#1E555C]">รายเดือน</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in room.table" :key="index"
                                class="hover:bg-gray-50 text-[#404546]">
                                <td class="border border-[#9db5b2] px-4 py-2">{{ item.type }}</td>
                                <td class="border border-[#9db5b2] px-4 py-2">{{ item.monthly }}</td>
                                <td class="border border-[#9db5b2] px-4 py-2">{{ item.daily }}</td>
                                <td class="border border-[#9db5b2] px-4 py-2">{{ item.weekly }}</td>
                                <td class="border border-[#9db5b2] px-4 py-2">{{ item.halfMonth }}</td>
                                <td class="border border-[#9db5b2] px-4 py-2">{{ item.monthRent }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped></style>