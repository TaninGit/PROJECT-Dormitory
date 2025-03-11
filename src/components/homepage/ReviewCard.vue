<script setup>
defineProps({
    id: {
        type: Number,
        required: true
    },
    selected: Number
})
</script>
 
<template>
<div class="rounded-md px-12 py-10 flex flex-col items-center" 
    :class="id === selected ? 'bg-[#4B8086] w-96 h-96 z-10' : 'bg-[#BCD0CD] w-80 h-80 z-0'"
    :style="{
        position: 'relative',
        transform: id > selected ? 'translateX(-2.5rem)' : id < selected ? 'translateX(2.5rem)' : ''
    }">
    <div class="rounded-full overflow-hidden"
        :class="id === selected ? 'w-24 h-24' : 'w-20 h-20'">
        <slot name="image" class=" font-bold">รูปภาพ</slot>
    </div>
    <div class="flex flex-col items-center mt-3">
        <p class="font-bold"
            :class="id === selected ? 'text-[#E09F3E] text-3xl' : 'text-[#1E555C] text-2xl' ">
            <slot name="name">ชื่อเล่น</slot>
        </p>
        <p :class="id === selected ? 'text-[#C4D4D2] text-lg' : 'text-[#404546] text-base' ">
            <slot name="info" class="text-red-500">คณะ..... รุ่น...</slot>
        </p>
    </div>
    <div :class="id === selected ? 'mt-7' : 'mt-3'">
        <p :class="id === selected ? 'text-[#FFFFFF] text-sm' : 'text-[#404546] text-xs' ">
            <slot name="review">รีวิว</slot>
        </p>
    </div>
</div>
</template>
 
<style scoped>

</style>