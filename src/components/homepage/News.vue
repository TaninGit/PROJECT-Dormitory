<script setup>
</script>

<template>
  <div class="flex flex-col md:flex-row cursor-pointer hover:bg-gray-300 rounded-2xl p-3">
    <div class="mr-5">
      <slot name="image">
        <img src="" alt="" class="w-full h-auto" />
      </slot>
    </div>
    <div class="mt-2 pt-2 w-full ">
      <slot name="header">
        <h3 class="font-noto-sans-thai text-[#404546] text-2xl font-bold">Header</h3>
      </slot>
      <slot name="content">
        <p>Content</p>
      </slot>
      <slot name="date">
        <p>Date</p>
      </slot>
    </div>
  </div>
</template>

<style scoped></style>
