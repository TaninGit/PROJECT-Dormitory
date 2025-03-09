<script setup>
</script>
 
<template>
<div class="bg-[#4B8086] rounded-md max-w-96 px-12 py-15 flex flex-col items-center w-96 h-96">
    <div class="w-24 h-24 rounded-full overflow-hidden">
        <slot name="image" class=" font-bold">รูปภาพ</slot>
    </div>
    <div class="flex flex-col items-center mt-3">
        <p class="font-bold text-[#E09F3E] text-3xl">
            <slot name="name">ชื่อเล่น</slot>
        </p>
        <p class="text-[#C4D4D2] text-lg">
            <slot name="info" class="text-red-500">คณะ..... รุ่น...</slot>
        </p>
    </div>
    <div class="mt-3">
        <p class="text-[#FFFFFF] text-sm">
            <slot name="review">รีวิว</slot>
        </p>
    </div>
</div>
</template>
 
<style scoped>

</style>