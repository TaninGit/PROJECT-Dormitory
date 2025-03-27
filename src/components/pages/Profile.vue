<script setup>
import { ref, onMounted } from "vue";
import { getItems, deleteItemById } from "../../libs/fetchUtils.js";
import { useRouter } from "vue-router";

const router = useRouter();

const currentStudentId = localStorage.getItem("currentUser");
const users = ref([]);
const userInfo = ref([]);
const showDeleteUserConfirm = ref(false);

onMounted(async () => {
  try {
    users.value = await getItems(`${import.meta.env.VITE_APP_URL}/users`);
    userInfo.value = users.value.find((user) => user.id === currentStudentId);
  } catch (error) {
    console.log(error);
  }
});

const logout = () => {
  localStorage.removeItem("currentUser");
  router.push("/login");
};

const deleteUser = async (deleteUserId) => {
  try {
    const status = await deleteItemById(`${import.meta.env.VITE_APP_URL}/users`, deleteUserId)
    if (status === 200) {
      deleteRepair(deleteUserId);
      localStorage.removeItem("currentUser");
      router.push("/login");
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteRepair = async (deleteRepairUserId) => {
  try {
    await deleteItemById(`${import.meta.env.VITE_APP_URL}/repairs`, deleteRepairUserId)
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="font-noto-sans-thai min-h-screen">
    <div
      class="bg-[url('../assets/background/dormBackground.png')] bg-cover bg-center bg-fixed min-h-screen flex items-center justify-center py-16 px-4">
      <div
        class="bg-[#1E555C] bg-opacity-95 backdrop-blur-sm text-white rounded-3xl w-full max-w-5xl shadow-2xl overflow-hidden transform transition-all duration-300 relative">
        <div class="w-full pt-24 md:pt-16 p-8 md:p-12">
          <div class="flex flex-col md:flex-row gap-10 md:gap-16">
            <div class="w-[80%]">
              <div
                class="mb-5 h-28 md:h-36 md:w-36 bg-white rounded-full border-8 border-[#E09F3E] shadow-lg overflow-hidden mx-auto flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1E555C" class="w-full h-full">
                  <path fill-rule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <div class="w-[100%]">
                <h2 class="text-2xl md:text-3xl font-bold mb-6 text-white">
                  K. {{ userInfo.firstName }} {{ userInfo.lastName }}
                </h2>
                <div class="space-y-4 mb-8">
                  <div class="flex items-center gap-3 group transition-all">
                    <div class="w-10 h-10 rounded-full bg-[#E09F3E] bg-opacity-20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-sm text-gray-300">Email</p>
                      <p class="text-lg">{{ userInfo.email }}</p>
                    </div>
                  </div>

                  <div class="flex items-center gap-3 group transition-all">
                    <div class="w-10 h-10 rounded-full bg-[#E09F3E] bg-opacity-20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-sm text-gray-300">Phone</p>
                      <p class="text-lg">{{ userInfo.phone }}</p>
                    </div>
                  </div>
                </div>

                <button @click="showDeleteUserConfirm = true"
                  class="w-full md:w-auto px-6 py-3 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Delete Account
                </button>
              </div>
            </div>

            <div class="w-[100%]">
              <div class="w-[100%] border-t md:border-t-0 md:border-l border-gray-600 md:pl-16 pt-8 md:pt-0">
                <h3 class="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
                  Services
                </h3>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  <RouterLink to="/payment" class="block">
                    <button
                      class="w-full h-32 bg-[#E09F3E] hover:bg-[#d8973a] active:bg-[#c78a35] text-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-4 group">
                      <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 mb-2 group-hover:scale-110 transition-transform" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <span class="text-xl font-medium">จ่ายบิลหอพัก</span>
                    </button>
                  </RouterLink>

                  <RouterLink to="/repair" class="block">
                    <button
                      class="w-full h-32 bg-[#E09F3E] hover:bg-[#d8973a] active:bg-[#c78a35] text-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-4 group">
                      <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 mb-2 group-hover:scale-110 transition-transform" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                      </svg>
                      <span class="text-xl font-medium">แจ้งซ่อม</span>
                    </button>
                  </RouterLink>
                </div>

                <button @click="logout"
                  class="w-full bg-red-500 hover:bg-red-600 active:bg-red-700 text-white rounded-xl font-medium py-4 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showDeleteUserConfirm" class="fixed inset-0 flex items-center justify-center backdrop-blur-xs">
      <div class="bg-white p-6 rounded-xl shadow-lg w-96 text-center animate-fade-in">
        <h2 class="text-lg font-semibold text-gray-800">ยืนยันการลบ</h2>
        <p class="text-gray-600 mt-2">
          คุณแน่ใจหรือไม่ว่าต้องการลบ account นี้?
        </p>

        <div class="mt-4 flex justify-center gap-4">
          <button @click="deleteUser(currentStudentId)"
            class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            ยืนยัน
          </button>
          <button @click="showDeleteUserConfirm = false"
            class="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400">
            ยกเลิก
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
