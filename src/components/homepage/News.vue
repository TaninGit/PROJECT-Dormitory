<script setup></script>

<template>
 <div class="flex ">
     <div class="m-5">
        <slot name="image" >
            <img src="" alt="" class="w-full h-auto"/>
        </slot>
    </div>
    
    <div class="mt-2 w-full pt-2">

      <slot name="title">
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
