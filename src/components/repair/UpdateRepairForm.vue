<script setup>
import RepairForm from './RepairForm.vue';
import { getItems } from "../../libs/fetchUtils.js";
import { editItem } from "../../libs/fetchUtils.js";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();

const currentStudentId = localStorage.getItem('currentUser');
const route = useRoute();
const repairId = route.params.repairId;

const studentRepairs = ref(null);
const currentRepair = ref(null); 

onMounted(async () => {
  try {
    const repairsData = await getItems(`${import.meta.env.VITE_APP_URL}/repairs`);
    studentRepairs.value = repairsData.find(r => r.id === currentStudentId);
    
    if (studentRepairs.value) {
      currentRepair.value = studentRepairs.value.reports.find(report => report.repairId === repairId);
    } else {
      console.error("ไม่พบข้อมูลการซ่อมของ studentId นี้");
    }
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการดึงข้อมูลการซ่อม:", error);
  }
});


const updateRepair = async (updatedRepair) => {
  const updatedRepairItem = {
    ...currentRepair.value, 
    repairType: updatedRepair.repairType,
    title: updatedRepair.title,
    appointmentTime: updatedRepair.appointmentTime,
    appointmentDate: updatedRepair.appointmentDate,
  };

  const updatedReports = studentRepairs.value.reports.map(report =>
    report.repairId === repairId ? updatedRepairItem : report
  );

  try {
    const editedItem = await editItem(
      `${import.meta.env.VITE_APP_URL}/repairs`,
      studentRepairs.value.id,
      { ...studentRepairs.value, reports: updatedReports }
    );
    console.log("แก้ไขรายการซ่อมสำเร็จ:", editedItem);
  } catch (error) {
    console.error("ไม่สามารถแก้ไขข้อมูลได้:", error);
  }
};


const handleRepairEdit = async (updatedRepair) => {
  await updateRepair(updatedRepair);
  router.push('/repair');
};
</script>

<template>
  <div class="bg-[url('../assets/background/dormBackground.png')] bg-cover bg-center w-full">
    <div class="pt-22 pr-10 pl-10 pb-10 flex">
      <button @click="$router.go(-1)" type="button" class="flex items-center justify-center cursor-pointer absolute">
        <img src="../../assets/icon/arrow-back.png" alt="back-arrow" class="absolute w-14" />
        <img src="../../assets/icon/button-back.png" alt="back-button" class="w-22" />
      </button>
      <RepairForm :submitAction="handleRepairEdit" :repairData="currentRepair"></RepairForm>
    </div>
  </div>
</template>