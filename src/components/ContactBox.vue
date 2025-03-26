<script setup>

</script>
 
<template>
<div class="bg-white h-55 w-75 rounded-md flex flex-col justify-center items-center text-center shadow-2xl">
    <div class="bg-[#9DB5B2] w-fit p-3 rounded-full">
        <slot name="icon">icon</slot>
    </div>
    <p class="font-bold text-[#1E555C] text-xl mt-3">
        <slot name="title">Title</slot>
    </p>
    <p class="text-sm text-[#1E555C] px-10 mt-4">
        <slot name="text">description</slot>
    </p>
</div>
</template>
 
<style scoped>

</style>