<script setup>
</script>

<template>
  <div class="bg-[#1E555C] text-white p-6 rounded-lg drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)] w-[350px] flex flex-col items-center font-noto-sans-thai">
    <div class="w-24 h-24 rounded-full overflow-hidden mb-4">
      <slot name="image">รูปภาพ</slot>
    </div>
    <h3 class="text-2xl font-bold text-[#E09F3E] mb-2">
      <slot name="title">ชื่อห้อง</slot>
    </h3>
    <p class="text-sm text-center mb-6 w-60">
      <slot name="description">คำอธิบายห้อง</slot>
    </p>
    <button class="mt-auto bg-[#E09F3E] hover:bg-[#9db5b2] text-white py-2 px-4 rounded-lg w-full cursor-pointer">
      รายละเอียดห้องพัก
    </button>
  </div>
</template>
