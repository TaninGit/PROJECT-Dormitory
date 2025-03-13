<script setup>
import { getItems } from "../../libs/fetchUtils.js";
import { ref, onMounted } from "vue";
const userRepair = ref([]);
const repairInfo = ref([]);
const currentStudentId = "66130500054"; // studentId
const userProfile = ref([]);
const userInfo = ref([]);

onMounted(async () => {
  try {
    userRepair.value = await getItems(
      `${import.meta.env.VITE_APP_URL}/repairs`
    );
    const user = userRepair.value.find(
      (user) => user.studentId === currentStudentId
    );
    if (user) {
      repairInfo.value = user;
    }
    console.log(repairInfo.value);
  } catch (error) {
    console.log(error);
  }
});

onMounted(async () => {
  try {
    userInfo.value = await getItems(`${import.meta.env.VITE_APP_URL}/users`);
    userProfile.value = userInfo.value.find(
      (user) => user.studentID === currentStudentId
    );
  } catch (error) {
    console.log(error);
  }
});

const expended = ref(null);

const getStatusColor = (status) => {
  if (status === "กำลังดำเนินการ") {
    return "text-[#007BFF] ";
  } else if (status === "ดำเนินการเรียบร้อย") {
    return "text-[#28A745]";
  } else if (status === "รอดำเนินการ") {
    return "text-[#E09F3E]";
  }
  return "";
};

const getProgressIcon = (status) => {
  if (status === "รอดำเนินการ") {
    return "/src/assets/icon/waitIcon.png";
  } else if (status === "กำลังดำเนินการ") {
    return "/src/assets/icon/inProgressIcon.png";
  } else if (status === "ดำเนินการเรียบร้อย") {
    return "/src/assets/icon/finishProgressIcon.png";
  }
  return "";
};

const toggleDetails = (index) => {
  expended.value = expended.value === index ? null : index;
};

const handleEdit = (reportId) => {
  alert(`แก้ไขรายการแจ้งซ่อม ID: ${reportId}`);
  console.log(`Edit reportId: ${reportId}`);
};

const handleCancel = (reportId) => {
  alert(`ยกเลิกรายการแจ้งซ่อม ID: ${reportId}`);
  console.log(`Cancle reportId: ${reportId}`);
};
</script>

<template>
  <div class="font-noto-sans-thai">
    <div
      class="w-screen h-screen flex item-center justify-center"
      style="background-image: url('src/assets/background/dormBackground.png')">
      <div class="pt-25 flex flex-col item-center justify-center items-center">
        <div class="w-350 h-25 flex gap-5">
          <button
            type="button"
            class="flex items-center justify-center cursor-pointer">
            <img
              src="../../assets/icon/arrow-back.png"
              alt="back-arrow"
              class="absolute w-14"/>
            <img
              src="../../assets/icon/button-back.png"
              alt="back-button"
              class="w-22"/>
          </button>
          <h1
            class="bg-[#ffffff] border-3 border-[#E09F3E] rounded-3xl mt-2 mb-2 px-15 text-4xl text-center flex items-center justify-center font-noto-sans-thai font-medium">
            บริการแจ้งซ่อมออนไลน์
          </h1>
          <button
            class="bg-[#404546] hover:bg-[#313637] text-white font-light mt-4 mb-4 px-10 rounded-xl font-noto-sans-thai ml-113 cursor-pointer transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <img
              src="/src/assets/icon/externalLinkIcon.png"
              alt="externalLinkIcon"
              class="inline w-5 h-5 mr-1"/>
            <span>กรอกฟอร์มแจ้งซ่อมแซม</span>
          </button>
        </div>
        <div
          class="bg-[#ffffff] border-3 border-[#E09F3E] rounded-3xl w-300 h-120 overflow-y-auto [&::-webkit-scrollbar]:w-2 dark:[&::-webkit-scrollbar-track]:bg-[#ffffff] dark:[&::-webkit-scrollbar-track]:hidden dark:[&::-webkit-scrollbar-thumb]:bg-[#D49029] [&::-webkit-scrollbar-thumb]:rounded-full">
          <div class="bg-[#E09F3E] p-4">
            <div
              class="grid grid-cols-4 text-center text-[#ffffff] font-noto-sans-thai font-bold">
              <div>เวลา</div>
              <div>สถานะ</div>
              <div>รายละเอียดการซ่อมแซม</div>
              <div>ประเภทงานซ่อม</div>
            </div>
          </div>
          <div
            v-for="(report, index) in repairInfo?.reports"
            :key="index"
            class="flex flex-col justify-center items-center text-center"
          >
            <div class="pt-4 pb-4">
              <div
                :class="[
                  'cursor-pointer hover:bg-[#FFF4E3] border-[#E09F3E] font-noto-sans-thai grid grid-cols-4 gap-4 items-center border-3 rounded-2xl w-285 h-20 transition delay-20 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100',
                  { 'bg-[#FFF4E3]': expended === index },
                ]"
                @click="toggleDetails(index)"
              >
                <div>{{ report.reportTime }}</div>
                <div :class="getStatusColor(report.status)" class="font-medium">
                  <img
                    v-if="report.status === 'รอดำเนินการ'"
                    :src="getProgressIcon(report.status)"
                    alt="icon"
                    class="inline w-4 h-4 mr-2"
                  />
                  <img
                    v-else-if="report.status === 'กำลังดำเนินการ'"
                    :src="getProgressIcon(report.status)"
                    alt="icon"
                    class="inline w-4 h-4 mr-2"
                  />
                  <img
                    v-else-if="report.status === 'ดำเนินการเรียบร้อย'"
                    :src="getProgressIcon(report.status)"
                    alt="icon"
                    class="inline w-4 h-4 mr-2"
                  />
                  {{ report.status }}
                </div>
                <div class="truncate">{{ report.title }}</div>
                <div>{{ report.repairType }}</div>
              </div>
              <transition name="drop">
                <div
                  v-if="expended === index"
                  class="bg-[#ffffff] border-4 border-[#E09F3E] rounded-2xl w-285 p-4 text-left flex flex-col"
                >
                  <div>
                    <p>
                      <strong>รายละเอียดเพิ่มเติม:</strong> {{ report.title }}
                    </p>
                  </div>
                  <div class="flex space-x-42">
                    <div>
                      <p>
                        <strong>ผู้แจ้ง:</strong> {{ userProfile.firstName }}
                        {{ userProfile.lastName }}
                      </p>
                      <p>
                        <strong>หอพัก:</strong>
                        <span v-if="userProfile?.gender === 'female'">
                          หญิง</span
                        >
                        <span v-else-if="userProfile?.gender === 'male'">
                          ชาย</span
                        >
                      </p>
                      <p><strong>ห้อง:</strong> {{ userProfile.roomID }}</p>
                    </div>
                    <div>
                      <p>
                        <strong>เบอร์โทรศัพท์:</strong> {{ userProfile.phone }}
                      </p>
                      <p><strong>อีเมล:</strong> {{ userProfile.email }}</p>
                      <p>
                        <strong>วันและเวลานัดหมาย:</strong>
                        {{ report.appointmentDate }} เวลา
                        {{ report.appointmentTime }}
                      </p>
                    </div>
                    <div>
                      <div
                        v-if="report?.status === 'รอดำเนินการ'"
                        class="flex flex-col gap-1"
                      >
                        <button
                          class="bg-[#ffffff] hover:bg-[#EDEDED] border-3 border-[#404546] px-4 py-2 rounded-md cursor-pointer"
                          @click="handleEdit(report.repairId)"
                        >
                          แก้ไข
                        </button>
                        <button
                          class="bg-[#ffffff] hover:bg-[#EDEDED] border-3 border-[#F1402C] px-4 py-2 rounded-md cursor-pointer"
                          @click="handleCancel(report.repairId)"
                        >
                          ยกเลิก
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}

.drop-enter-active, .drop-leave-active {
  transition: all 0.3s ease-in-out;
}

.drop-enter-from, .drop-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.drop-enter-to, .drop-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
