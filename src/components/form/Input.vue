<script setup>

const props = defineProps({
  label: String,
  inputType: String,
  required: Boolean
});

const inputValue = defineModel()

</script>
<template>
  <div>
  <div>
    <div>
      <label class="block text-[#1E555C] text-lg font-noto-sans-thai">{{ label }}<span v-if="required === true"
          class="text-[#E09F3E]">*</span></label>
      <input :type="inputType" :required="required" v-model="inputValue"
        class="block w-[390px] appearance-none text-lg font-noto-sans-thai text-[#404546] bg-white border border-[#404546] rounded-full pl-4 pr-10 py-2" />
    </div>
  </div>
  </div>
</template>
<style scoped></style>
<style scoped></style>