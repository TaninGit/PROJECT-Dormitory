<script setup>
import reasons from '../../../data/reason.json'
</script>
 
<template>
<div>
    <div class="flex items-center justify-center p-15">
      <img src="../../assets/images/reasonImage.png" class="h-96 w-lg">
      <div class="pl-15">
        <div>
          <h1 class="font-noto-sans-thai text-[#1E555C] font-bold text-5xl p-3">ทำไมต้องเลือกเรา?</h1>
          <div class="bg-[#E09F3E] p-1 w-[300px] rounded-md drop-shadow-[5px_3px_5px_rgba(0,0,0,0.3)] ml-12"></div>    
        </div>

        <p class="font-noto-sans-thai text-[#404546] w-[550px] mt-8 mb-5 text-xl">
          เพราะที่นี่ไม่ใช่แค่ที่พัก…แต่คือพื้นที่ที่ช่วยเติมเต็มชีวิตในรั้วมหาวิทยาลัย! 
          เราออกแบบหอพักให้ตอบโจทย์นักศึกษา สะดวก ปลอดภัย และเหมาะกับ
          การใช้ชีวิตและการเรียน พร้อมสิ่งอำนวยความสะดวกที่ช่วยให้คุณโฟกัส
          กับการเรียนและใช้เวลาว่างได้อย่างมีคุณภาพ
        </p>

        <div v-for="(reason, index) in reasons" :key="index" class="font-noto-sans-thai text-[#404546] text-xl flex mt-1 ml-5">
          <img src="../../assets/images/gooseBullet.png" alt="" class="w-[24px] h-[24px]">
          <p class="ml-2">{{ reason }}</p>
        </div>
      </div>
    </div>
</div>
</template>
 
<style scoped>

</style>