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
const openDropdown = ref(false);

const toggleDropdown = () => {
  openDropdown.value = !openDropdown.value;
};
const selectItem = (item) => {
  selectedValue.value = item
  openDropdown.value = false
}

</script>

<template>
  <div>
    <div class="mb-4">
      <label class="block text-[#1E555C] text-lg font-noto-sans-thai">{{ label }}<span
          class="text-[#E09F3E]">*</span></label>
      <div class="relative w-[390px]">
        <div @click="toggleDropdown"
          class="block w-[390px] appearance-none text-lg text-[#404546] bg-white border-1 border-[#404546] rounded-full pl-4 pr-10 py-[7.5px] cursor-pointer">
          <span class="font-noto-sans-thai">{{
            selectedValue || placeholder
          }}</span>
          <div
            class="mr-[0.8px] absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none bg-[#E09F3E] w-13 h-[45px] flex items-center justify-center rounded-r-full">
            <img src="../../assets/icon/arrow.png" alt="dropdown arrow" class="w-4 h-3" />
          </div>
        </div>
      </div>

      <ul v-if="openDropdown"
        class=" mt-1 bg-white border border-[#404546] rounded-2xl shadow-lg max-h-60 w-[390px] absolute z-10">
        <li v-for="(item, index) in list" :key="index" @click="selectItem(item)"
          class="px-4 py-2 cursor-pointer text-black font-noto-sans-thai rounded-2xl hover:bg-[#9DB5B2]/50">
          {{ item }}
          <hr v-if="index !== list.length - 1" class="text-[#9DB5B2] mt-1">
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped></style>