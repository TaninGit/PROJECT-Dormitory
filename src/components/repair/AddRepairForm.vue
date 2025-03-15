<script setup>
import RepairForm from './RepairForm.vue';
import { getItems } from "../../libs/fetchUtils.js";
import { editItem } from "../../libs/fetchUtils.js";
import { ref, onMounted } from "vue";

const currentStudentId = "66130500054";
const studentRepairs = ref(null);

onMounted(async () => {
    try {
        const repairsData = await getItems(`${import.meta.env.VITE_APP_URL}/repairs`);
        studentRepairs.value = repairsData.find(r => r.id === currentStudentId);
    } catch (error) {
        console.error("Error fetching repairs:", error);
    }
});

const addNewRepair = async (newRepair) => {
    if (!studentRepairs.value) {
        console.error("ไม่พบข้อมูลของ studentId นี้");
        return;
    }

    let maxRepairId = 0;
    const allRepairs = await getItems(`${import.meta.env.VITE_APP_URL}/repairs`);
    allRepairs.forEach(student => {
        student.reports.forEach(report => {
            const repairNumber = parseInt(report.repairId.slice(1));
            if (repairNumber > maxRepairId) {
                maxRepairId = repairNumber;
            }
        });
    });

    const newRepairItem = {
        repairId: `R${(maxRepairId + 1).toString().padStart(3, '0')}`,
        repairType: newRepair.repairType,
        reportTime: new Date().toISOString().split('T')[0],
        title: newRepair.title,
        status: "รอดำเนินการ",
        appointmentTime: newRepair.appointmentTime,
        appointmentDate: newRepair.appointmentDate
    };

    const updatedRepairs = [...studentRepairs.value.reports, newRepairItem];

    try {
        const editedItem = await editItem(
            `${import.meta.env.VITE_APP_URL}/repairs`,
            studentRepairs.value.id,
            { ...studentRepairs.value, reports: updatedRepairs }
        );
        console.log("อัปเดตรายการซ่อมสำเร็จ:", editedItem);
    } catch (error) {
        console.error("ไม่สามารถอัปเดตข้อมูลได้:", error);
    }
};

const handleNewRepair = (newRepair) => {
  addNewRepair(newRepair);
};

</script>

<template>
    <div class="bg-[url('../assets/background/dormBackground.png')] bg-cover bg-center w-full">
        <div class="pt-22 pr-10 pl-10 pb-10 flex">
            <button type="button" class="flex items-center justify-center cursor-pointer absolute">
                <img src="../../assets/icon/arrow-back.png" alt="back-arrow" class="absolute w-14" />
                <img src="../../assets/icon/button-back.png" alt="back-button" class="w-22" />
            </button>
            <RepairForm :submitAction="handleNewRepair"></RepairForm>
        </div>

    </div>
</template>
