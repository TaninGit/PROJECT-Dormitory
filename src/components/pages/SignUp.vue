<script setup>
import { onMounted, ref, watchEffect } from "vue";
import { hashPassword } from '../../libs/hashPassword';
import Button from "../form/Button.vue";
import Input from "../form/Input.vue";
import Dropdown from "../form/Dropdown.vue";
import { getItems } from "@/libs/fetchUtils";

const step = ref(1)
const genderList = ['male', 'female']
const roomTypeList = ['2 คน ปรับอากาศ ห้องน้ำในตัว', '2 คน ปรับอากาศ ห้องน้ำรวม', '2 คน พัดลม ห้องน้ำในตัว', '2 คน พัดลม ห้องน้ำรวม', '3 คน ปรับอากาศ ห้องน้ำรวม']
const facultyList = ref([])
const majorList = ref([])
const faculties = ref([])

onMounted(async () => {
    try {
        faculties.value = await getItems(`${import.meta.env.VITE_APP_URL}/faculties`)
        facultyList.value = faculties.value.map(f => f.name)
    } catch (error) {
        console.log(error);
    }
})

const user = ref({
    id: '',
    password: '',
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    phone: '',
    faculty: '',
    major: '',
    roomID: '',
    roomType: ''
})

watchEffect(() => {
    const selectedFaculty = faculties.value.find(f => f.name === user.value.faculty);
    majorList.value = selectedFaculty ? selectedFaculty.majors.map(m => m.name) : [];
});

</script>
 
<template>
    <div class="bg-[url(../assets/background/dormBackground.png)] bg-cover bg-center bg-fixed w-full font-noto-sans-thai">
        <div class="flex justify-center h-full">
            <button type="button" class="flex items-center justify-center cursor-pointer left-20 absolute bg-[#E09F3E] px-3 py-1 rounded-full top-30">
                <img src="../../assets/icon/arrow-back.png" alt="back-arrow" class="w-14" />
            </button>
            <div class="mt-40 mb-20 flex flex-col gap-10 items-center">
                <div class="bg-white px-20 py-15 rounded-4xl border-2 border-[#9DB5B2]">
                    <h2 class="text-3xl font-bold text-[#404546] mb-4">ลงทะเบียนข้อมูลผู้เข้าพัก</h2>
                    <div class="mt-7">
                        <div v-show="step === 1" class="grid grid-cols-2 gap-x-15 gap-y-5">
                            <Input :input-type="'text'" :label="'รหัสนักศึกษา'" :required="true"/>
                            <Input :input-type="'password'" :label="'รหัสผ่าน'" :required="true"/>
                            <Input :input-type="'password'" :label="'ยืนยันรหัสผ่าน'" :required="true"/>
                        </div>
                        <div v-show="step === 2" class="grid grid-cols-2 gap-x-15 gap-y-5">
                            <Input :input-type="'text'" :label="'ชื่อจริง'" :required="true"/>
                            <Input :input-type="'password'" :label="'นามสกุล'" :required="true"/>
                            <Dropdown :label="'เพศ'" :list="genderList"/>
                            <Input :input-type="'password'" :label="'อีเมล'" :required="true"/>
                            <Input :input-type="'password'" :label="'เบอร์โทรศัพท์'" :required="true"/>
                            <Dropdown v-model="user.faculty" :label="'คณะ'" :list="facultyList"/>
                            <Dropdown :label="'สาขา'" :list="majorList"/>
                            <Input :input-type="'password'" :label="'เลขห้องพัก'" :required="true"/>
                            <Dropdown :label="'ประเภทห้องพัก'" :list="roomTypeList"/>
                        </div>
                    </div>
                </div>
                <Button :backgroundColor="'#E09F3E'" :hover="'#D18D2D'" :text="'ต่อไป'" @click="step++" v-if="step === 1"/>
                <div v-if="step === 2" class="flex space-x-15">
                    <Button :backgroundColor="'#1E555C'" :hover="'#10484F'" :text="'กลับไป'" @click="step--"/>
                    <Button :backgroundColor="'#E09F3E'" :hover="'#D18D2D'" :text="'เสร็จสิ้น'" @click=""/>
                </div>
            </div>
        </div>
    </div>
</template>
 
<style scoped>

</style>