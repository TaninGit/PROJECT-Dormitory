<script setup>
import { ref, onMounted } from 'vue'
import { getItems } from '../../libs/fetchUtils.js'

const currentStudentId = "66130500018"
const users = ref([])
const userInfo = ref([])

onMounted(async () => {
  try {
    users.value = await getItems(`${import.meta.env.VITE_APP_URL}/users`)
    userInfo.value = users.value.find(
      (user) => user.id === currentStudentId
    );
  }
  catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div class="font-noto-sans-thai bg-[url('../assets/background/dormBackground.png')] bg-cover bg-center w-full">
    <div class="h-15"></div>
    <div class="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style="background-image: url('/path-to-your-image.jpg');">
      <div
        class="bg-[#1E555C] text-white rounded-[3rem] py-35 px-25 w-full max-w-8/10 shadow-lg flex flex-col items-center relative">


        <div class="absolute -top-35 left-25 w-70 h-70 bg-white rounded-full border-10 border-[#E09F3E]"></div>


        <div class="w-full flex flex-col md:flex-row items-center justify-between  justify-items-start">

          <div class="text-center md:text-left ">
            <h2 class="h-full md:text-2xl lg:text-3xl xl:text-4xl  font-bold my-10 ">K. {{ userInfo.firstName }} {{ userInfo.lastName }}</h2>
            <p class=" md:text-base lg:text-lg xl:text-xl text-gray-300 my-5">email: {{ userInfo.email }}</p>
            <p class=" md:text-base lg:text-lg xl:text-xl text-xl text-gray-300 my-5">phone: {{ userInfo.phone }}</p>
          </div>


          <div class="flex grow-1 flex-col items-center max-w-175">
            <h3 class="md:text-2xl lg:text-3xl xl:text-4xl font-bold  text-center">Service</h3>
            <div class="w-full flex gap-4 py-10 justify-around">
              <button
                class="flex-1  min-w-[150px] max-w-[300px] bg-[#E09F3E] border-2 hover:bg-[#9db5b2] text-white md:text-xl lg:text-2xl xl:text-3xl text-center font-medium  py-10 px-6  rounded-3xl shadow-md cursor-pointer whitespace-nowrap">
                จ่ายบิลหอพัก
              </button>
              <button
                class="flex-1 min-w-[150px] max-w-[300px] bg-[#E09F3E] border-2 hover:bg-[#9db5b2] text-white md:text-xl lg:text-2xl xl:text-3xl text-center font-medium py-10 px-6  rounded-3xl shadow-md cursor-pointer">
                แจ้งซ่อม
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>




<style scoped></style>