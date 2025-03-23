<script setup>
import { getItems } from '../../libs/fetchUtils';
import { ref, onMounted } from 'vue';
const currentStudentId = "66130500018"; // studentId
const userList = ref([])
const userInfo = ref(null)

const paymentList = ref([])
const paymentInfo = ref(null)

    onMounted(async()=>{
        try{
            userList.value = await getItems(`${import.meta.env.VITE_APP_URL}/users`)
            const user = userList.value.find((user) => user.id === currentStudentId)
            userInfo.value = user

            paymentList.value = await getItems(`${import.meta.env.VITE_APP_URL}/payments`)
            const payment = paymentList.value.find((payment) => payment.id === currentStudentId)
            paymentInfo.value = payment

        }catch(error){
            console.log(error)
        }
    })

    function costFormat(cost) {
        return new Intl.NumberFormat('th-TH').format(cost)
    }

</script>
<template>
    <div v-if="userInfo && paymentInfo" class="font-noto-sans-thai bg-[url('../assets/background/dormBackground.png')] bg-cover bg-center w-full h-310">
        <div class="h-20"></div>
        <div class="relative flex items-center p-10">
            <RouterLink to="/profile">
                <button type="button" class="absolute bottom-10 left-10 flex items-center justify-center cursor-pointer">
                    <img src="../../assets/icon/arrow-back.png" alt="back-arrow" class="absolute w-14" />
                    <img src="../../assets/icon/button-back.png" alt="back-button" class="w-22" />
                </button>
            </RouterLink>
            <div class="w-full flex justify-center">
                <h1 class="text-white text-7xl font-noto-sans-thai font-bold text-center drop-shadow-[4px_4px_2px_rgba(0,0,0,0.5)]">
                    จ่ายบิลหอพัก
                </h1>
            </div>
        </div>
        <div class="flex justify-center items-center text-center space-x-15">
            <div class="rounded-3xl p-10 h-230 w-130 bg-[#1E555C] flex flex-col space-y-8 text-[#ffffff] text-3xl text-left font-semibold">
                <div class="flex items-center justify-center">
                    <div class="absolute border-5 border-[#E09F3E] w-15 h-15 bg-[#ffffff] rounded-full flex items-center justify-center mb-20 shadow-md shadow-gray-800">
                        <img :src="`./payments/goose.png`" alt="goose" class="w-10">
                    </div>
                </div>
                <div class="w-130">K. {{ userInfo.firstName }} {{  userInfo.lastName }}</div>
                <div>
                    <p class="text-2xl font-extralight pb-2">รหัสนักศึกษา</p>
                    <h1>{{ userInfo.id }}</h1>    
                </div>
                <div>
                    <p class="text-2xl font-extralight pb-2">คณะ</p>
                    <h1>{{ userInfo.faculty }}</h1>
                </div>
                <div>
                    <p class="text-2xl font-extralight pb-2">สาขา</p>
                    <h1>{{ userInfo.major }}</h1>
                </div>
                <div>
                    <p class="text-2xl font-extralight pb-2">ประเภทห้อง</p>
                    <h1>{{ userInfo.roomType }}</h1>
                </div>
                <div class="flex items-center justify-center pt-15">
                    <div class="border w-50 h-50 bg-[#ffffff] rounded-full flex items-center justify-center">
                        <img :src="`./payments/goose.png`" alt="goose" class="w-40">
                    </div>
                </div>
            </div>
            <div class="rounded-3xl p-10 h-245 w-140 bg-[url('./payments/bill2.png')] bg-cover flex flex-col justify-center items-center space-y-5">
                <div class="flex items-center justify-center">
                    <div class="absolute w-15 h-15 bg-[#ffffff] rounded-full flex items-center justify-center mb-25 shadow-md shadow-gray-400">
                        <img :src="`./payments/card.png`" alt="card" class="w-10">
                    </div>
                </div>
                <div class="font-bold text-3xl">ใบเรียกเก็บเงิน</div>
                <div>ชำระค่าห้องพัก-ค่าสาธารณูปโภค ภายในหอพัก</div>
                <div class="border w-100 border-gray-300"></div>
                <div>Total Payment</div>
                <div class="text-3xl font-bold">{{ costFormat((paymentInfo.report.electricity) + (paymentInfo.report.rent)) + ".00" }} ฿</div>
                <div>
                    <img :src="`./payments/qrcode.png`" alt="qrcode" class="w-40">
                </div>
                <div>หมายเหตุ : การชำระเงินผ่านทาง QR Code <br> จะใช้เวลาในการอัปเดตข้อมูลการชำระเงินประมาณ 1-2 วัน</div>
                <div class="h-60 w-130 flex justify-center items-center text-left space-x-5">
                    <div class="flex flex-col space-y-5">
                        <div class=" border-gray-300 border-2 rounded-lg w-53 h-20 p-2">
                            <div>ค่าเช่าห้องพัก</div>
                            <div>{{ costFormat(paymentInfo.report.rent )}} ฿</div>
                        </div>
                        <div class=" border-gray-300 border-2 rounded-lg w-53 h-20 p-2">
                            <div>Ref Number 1</div>
                            <div>{{ paymentInfo.report.refNumber1 }}</div>
                        </div>
                    </div>
                    <div class="flex flex-col space-y-5">
                        <div class=" border-gray-300 border-2 rounded-lg w-53 h-20 p-2">
                            <div>ค่าไฟฟ้า</div>
                            <div>{{ costFormat(paymentInfo.report.electricity) }} ฿</div>
                        </div>
                        <div class=" border-gray-300 border-2 rounded-lg w-53 h-20 p-2">
                            <div>Ref Number 2</div>
                            <div>{{ paymentInfo.report.refNumber2 }}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <button class="w-100 h-16 border-gray-300 border-2 rounded-lg flex justify-center items-center cursor-pointer hover:bg-gray-200 transition-all duration-500 ease-in-out">
                        <img :src="`./payments/import.png`" alt="import" class="w-7 h-7 mr-3 ">
                        <div>Download Receipt</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
 
<style scoped>

</style>