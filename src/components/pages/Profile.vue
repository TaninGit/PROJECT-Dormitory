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
            router.push("/login");
        }
    } catch (error) {
        console.log(error)
    }
}
</script>

<template>
  <div class="font-noto-sans-thai">
    <div class="h-15"></div>
    <div
      class="bg-[url('../assets/background/dormBackground.png')] relative flex items-center justify-center min-h-screen bg-cover bg-center pt-10"
    >
      <div
        class="bg-[#1E555C] text-white rounded-[3rem] py-25 px-25 w-full max-w-8/10 shadow-lg flex flex-col items-center relative"
      >
        <div
          class="absolute -top-23 left-25 h-56 w-56 bg-white rounded-full border-10 border-[#E09F3E]"
        ></div>
        <div
          class="w-full flex flex-col md:flex-row items-center justify-between justify-items-start gap-10 top-10"
        >
          <div class="text-center md:text-left mt-[25px]">
            <h2
              class="h-full md:text-xl lg:text-2xl xl:text-3xl font-bold my-10"
            >
              K. {{ userInfo.firstName }} {{ userInfo.lastName }}
            </h2>
            <p class="md:text-base lg:text-lg xl:text-xl text-gray-300 my-5">
              email: {{ userInfo.email }}
            </p>
            <p
              class="md:text-base lg:text-lg xl:text-xl text-xl text-gray-300 my-5"
            >
              phone: {{ userInfo.phone }}
            </p>
            <button
              @click="showDeleteUserConfirm = true"
              class="flex-1 w-50 cursor-pointer border-white border-2 bg-red-500 text-white font-semibold md:text-xl py-4 px-6 rounded-3xl shadow-lg transition-all duration-300 hover:bg-red-600 hover:shadow-xl active:bg-red-700 active:scale-95"
            >
              Delete Account
            </button>
            <div
              v-if="showDeleteUserConfirm"
              class="fixed inset-0 flex items-center justify-center backdrop-blur-xs"
            >
              <div
                class="bg-white p-6 rounded-xl shadow-lg w-96 text-center animate-fade-in"
              >
                <h2 class="text-lg font-semibold text-gray-800">ยืนยันการลบ</h2>
                <p class="text-gray-600 mt-2">
                  คุณแน่ใจหรือไม่ว่าต้องการลบ account นี้?
                </p>

                <div class="mt-4 flex justify-center gap-4">
                  <button
                    @click="deleteUser(currentStudentId)"
                    class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    ยืนยัน
                  </button>
                  <button
                    @click="showDeleteUserConfirm = false"
                    class="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                  >
                    ยกเลิก
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex grow-1 flex-col items-center max-w-175">
            <h3
              class="md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center"
            >
              Service
            </h3>
            <div class="w-full flex gap-4 py-10 justify-around">
              <RouterLink to="/payment">
                <button
                  class="flex-1 min-w-[150px] max-w-[300px] w-55 bg-[#E09F3E] border-2 hover:bg-[#9db5b2] text-white md:text-xl lg:text-2xl xl:text-3xl text-center font-medium py-10 px-6 rounded-3xl shadow-md cursor-pointer whitespace-nowrap"
                >
                  จ่ายบิลหอพัก
                </button>
              </RouterLink>
              <RouterLink to="/repair">
                <button
                  class="flex-1 min-w-[150px] max-w-[300px] w-55 bg-[#E09F3E] border-2 hover:bg-[#9db5b2] text-white md:text-xl lg:text-2xl xl:text-3xl text-center font-medium py-10 px-6 rounded-3xl shadow-md cursor-pointer"
                >
                  แจ้งซ่อม
                </button>
              </RouterLink>
            </div>
            <button
              @click="logout"
              class="flex-1 min-w-[180px] max-w-[300px] w-55 cursor-pointer border-white border-2 bg-red-500 text-white font-semibold text-xl md:text-2xl py-4 px-6 rounded-3xl shadow-lg transition-all duration-300 hover:bg-red-600 hover:shadow-xl active:bg-red-700 active:scale-95"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
