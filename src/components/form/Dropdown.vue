<script setup>
import { ref } from 'vue'

const props = defineProps({
    label: String,
    list: Array,
    placeholder: {
        type: String,
        default: "โปรดเลือก"
    }
})
const selectedValue = ref("") 
const showError = ref(false)

const validateInput = () => {
  if (selectedValue.value === "") {
    showError.value = true 
  } else {
    showError.value = false
  }
}
</script>
 
<template>
<div>
  <div class="mb-4">
    <label class="block text-[#1E555C] text-lg font-noto-sans-thai">{{ label }}<span class="text-[#E09F3E]">*</span></label>
    <div class="relative w-[390px]">
        <select
            v-model="selectedValue"
            class="block w-[390px] appearance-none text-lg text-[#404546] bg-white border border-[#404546] rounded-full pl-4 pr-10 py-2"
            @change="validateInput">
            <option value="" disabled selected
            class="text-[#404546] font-noto-sans-thai">
            {{ placeholder }}</option>
            <option class="text-[#404546] font-noto-sans-thai" v-for="(item, index) in list" :key="index" :value="item">{{ item }}</option>
        </select> 
        <div class="mr-[0.8px] absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none bg-[#E09F3E] w-13 h-11 flex items-center justify-center rounded-r-full">
            <img src="../../assets/icon/arrow.png" alt="dropdown arrow" class="w-4 h-3" />
        </div>  
    </div>   
    <p v-if="showError" class="mt-2 text-md text-red-600 font-noto-sans-thai">กรุณาใส่ข้อมูล</p>
  </div>
</div>
</template>
 
<style scoped>

</style>