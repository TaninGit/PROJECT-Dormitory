<script setup>
import { ref } from 'vue'

const props = defineProps({
    backgroundColor: String,
    hover: String,
    text: String
})

const isHovered = ref(false);
</script>
 
<template>
<div>
    <div>
        <button
        :style="{ backgroundColor: isHovered ? hover : backgroundColor }"
        class="font-noto-sans-thai font-bold text-white w-88 h-14 rounded-3xl text-[22px]"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false">
            {{ text }}
        </button>
    </div>
</div>
</template>
 
<style scoped>

</style>