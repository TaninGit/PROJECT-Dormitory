<script setup>
import { ref, onMounted, watch } from 'vue';
import Button from '../form/Button.vue';
import Input from '../form/Input.vue';
import Dropdown from '../form/Dropdown.vue';
import { getItems } from "../../libs/fetchUtils.js";



const props = defineProps({
  submitAction: Function,
  repairData: Object
});

const currentStudentId = localStorage.getItem('currentUser');
const userProfile = ref([]);
const userInfo = ref([]);

onMounted(async () => {
  try {
    userInfo.value = await getItems(`${import.meta.env.VITE_APP_URL}/users`);
    userProfile.value = userInfo.value.find(
      (user) => user.id === currentStudentId
    );
    
  } catch (error) {
    console.log(error);
  }
});

const emits = defineEmits(["addNewRepair"]);

const newRepair = ref({
  studentId: currentStudentId,
  repairType: props.repairData?.repairType || '',
  title: props.repairData?.title || '',
  appointmentDate: props.repairData?.appointmentDate || '',
  appointmentTime: props.repairData?.appointmentTime || ''
}
);

watch(() => props.repairData, (newData) => {
  if (newData) {
    newRepair.value = {
      studentId: currentStudentId,
      repairType: newData?.repairType || '',
      title: newData?.title || '',
      appointmentDate: newData?.appointmentDate || '',
      appointmentTime: newData?.appointmentTime || ''
    };
  }
}, { immediate: true });

console.log(newRepair.value.appointmentDate) 

const repairTypeOptions = ['งานไฟฟ้า', 'งานประปา', 'อื่นๆ'];
const timeOptions = ['09:00-10:00', '10:00-11:00', '11:00-12:00', '13:00-14:00', '14:00-15:00', '15:00-16:00'];

const validateSubmit = () => {
  newRepair.value.repairTypeError = newRepair.value.repairType ? '' : 'กรุณาเลือกประเภทงาน';
  newRepair.value.titleError = newRepair.value.title.trim() ? '' : 'กรุณากรอกรายละเอียด';
  newRepair.value.appointmentDateError = newRepair.value.appointmentDate ? '' : 'กรุณากรอกวันนัดหมาย';
  newRepair.value.appointmentTimeError = newRepair.value.appointmentTime ? '' : 'กรุณาเลือกเวลานัดหมาย';
  const isValid = newRepair.value.repairType && newRepair.value.title.trim() && newRepair.value.appointmentDate && newRepair.value.appointmentTime;
  if (!isValid) {
    return;
  }
  props.submitAction(newRepair.value); 
};

</script>

<template>
  <div class="p-10 w-[900px] mx-auto bg-white rounded-3xl border-[#9DB5B2] border-2 shadow-md font-noto-sans-thai flex flex-col">
    <h2 class="text-3xl font-bold text-[#404546] mb-4">แจ้งซ่อมแซม</h2>
    <div class="flex flex-wrap justify-between items-center gap-2">
    <div>
        <label class="block text-[#1E555C] text-lg font-noto-sans-thai">หอพักนักศึกษา</label>
        <div 
          class="block w-[390px] appearance-none text-lg font-noto-sans-thai text-[#404546] border-[#404546] border rounded-full pl-4 pr-10 py-2 bg-[rgba(98,102,103,0.5)] stroke-[1.5px]"
          v-if="userProfile.gender === 'female'">
            หอพักหญิง
        </div>
        <div 
          class="block w-[390px] appearance-none text-lg font-noto-sans-thai text-[#404546] border-[#404546] border rounded-full pl-4 pr-10 py-2 bg-[rgba(98,102,103,0.5)] stroke-[1.5px]"
          v-if="userProfile.gender === 'male'">
            หอพักชาย
        </div>
    </div>
    <div>
        <label class="block text-[#1E555C] text-lg font-noto-sans-thai">ห้องเลขที่</label>
        <div 
          class="block w-[390px] appearance-none text-lg font-noto-sans-thai text-[#404546] border-[#404546] border rounded-full pl-4 pr-10 py-2 bg-[rgba(98,102,103,0.5)] stroke-[1.5px]"
        >
            {{ userProfile.roomID }} 
        </div>
    </div>
    <div>
        <label class="block text-[#1E555C] text-lg font-noto-sans-thai">เบอร์โทรศัพท์</label>
        <div 
          class="block w-[390px] appearance-none text-lg font-noto-sans-thai text-[#404546] border-[#404546] border rounded-full pl-4 pr-10 py-2 bg-[rgba(98,102,103,0.5)] stroke-[1.5px]"
        >
            {{ userProfile.phone }}
        </div>
    </div>

    <div class="mt-4">
      <div v-if="newRepair.repairTypeError" class="text-red-500 text-sm mt-1">
        {{ newRepair.repairTypeError }}
      </div>
      <Dropdown 
        label="ประเภทงาน" 
        :list="repairTypeOptions"
        :placeholder= "newRepair.repairType ? newRepair.repairType : 'โปรดเลือกประเภทงาน'"
        v-model="newRepair.repairType"
      />
    </div>

    <div>
      <div v-if="newRepair.titleError" class="text-red-500 text-sm mt-1">
        {{ newRepair.titleError }}
      </div>
      <div>
        <label class="block text-[#1E555C] text-lg font-noto-sans-thai">รายละเอียด การชำรุดเสียหาย<span class="text-[#E09F3E]">*</span></label>
        <textarea type="longtext" v-model="newRepair.title"
          class="block w-[818px] h-[100px] appearance-none text-lg font-noto-sans-thai text-[#404546] bg-white border border-[#404546] rounded-3xl pl-4 pr-10 py-2">
        </textarea>
        
      </div>
    </div>

    <div>
      <div v-if="newRepair.appointmentDateError" class="text-red-500 text-sm mt-1">
        {{ newRepair.appointmentDateError }}
      </div>
      <Input 
        label="วันนัดหมาย (mm/dd/yyyy)" 
        inputType="date" 
        v-model="newRepair.appointmentDate"
        :required="true"
      />
    </div>

    <div>
      <div v-if="newRepair.appointmentTimeError" class="text-red-500 text-sm mt-1">
        {{ newRepair.appointmentTimeError }}
      </div>
      <Dropdown 
        label="เวลานัดหมาย" 
        :list="timeOptions"
        :placeholder= "newRepair.appointmentTime ? newRepair.appointmentTime : 'โปรดเลือกเวลานัดหมาย'"
        v-model="newRepair.appointmentTime" 
        :required="true"
      />
    </div>

    </div>

    <div class="mt-4 mx-auto">
      <Button 
        text="เสร็จสิ้น" 
        backgroundColor="#E09F3E" 
        hover="#D18D2D"
        @click="validateSubmit"
        ></Button>
    </div>
  </div>
</template>