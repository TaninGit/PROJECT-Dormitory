<script setup>
import { onMounted, ref, watchEffect } from "vue";
import { hashPassword } from '../../libs/hashPassword';
import Button from "../form/Button.vue";
import Input from "../form/Input.vue";
import Dropdown from "../form/Dropdown.vue";
import { getItems, addItem } from "@/libs/fetchUtils";
import { useRouter } from 'vue-router';

const router = useRouter();

const step = ref(1)
const genderList = ['male', 'female']
const roomTypeList = ['2 คน ปรับอากาศ ห้องน้ำในตัว', '2 คน ปรับอากาศ ห้องน้ำรวม', '2 คน พัดลม ห้องน้ำในตัว', '2 คน พัดลม ห้องน้ำรวม', '3 คน ปรับอากาศ ห้องน้ำรวม']
const facultyList = ref([])
const majorList = ref([])
const faculties = ref([])

const confirmPassword = ref('')
const allUsers = ref([])

onMounted(async () => {
    try {
        faculties.value = await getItems(`${import.meta.env.VITE_APP_URL}/faculties`)
        facultyList.value = faculties.value.map(f => f.name)

        allUsers.value = await getItems(`${import.meta.env.VITE_APP_URL}/users`)
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

const message = ref({
    idError: '',
    passwordError: '',
    confirmPasswordError: '',
    firstNameError: '',
    lastNameError: '',
    genderError: '',
    emailError: '',
    phoneError: '',
    facultyError: '',
    majorError: '',
    roomIDError: '',
    roomTypeError: ''
})

const characterRegex = /[a-zA-Zก-ฮ]/

const isNullOrEmpty = (value) => {
    return !value || value.trim() === ''
}

const validateStudentId = (value) => {
    return String(value).length === 11 && !characterRegex.test(String(value))
}

const validateStudentIdExist = (value) => {
    return allUsers.value.find(user => user.id === String(value)) !== undefined;
};

const validateConfirmPasswd = (previous, next) => {
    return String(previous) === String(next) 
}

const validatePhone = (value) => {
    return String(value).length === 10 && !characterRegex.test(String(value))
}

const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(email);
}

const validateRoomID = (value) => {
    return /^[0-9]{4}$/.test(String(value));
};

const validateStep1 = () => {
    if (isNullOrEmpty(user.value.id)) {
        message.value.idError = 'กรุณากรอกรหัสนักศึกษา';
    } else if (!validateStudentId(user.value.id)) {
        message.value.idError = 'รหัสนักศึกษาต้องมี 11 หลัก และเป็นตัวเลขเท่านั้น';
    } else if (validateStudentIdExist(user.value.id)) {
        message.value.idError = 'มีการลงทะเบียนด้วยรหัสนักศึกษานี้แล้ว   ';
    } else {
        message.value.idError = '';
    }
 
    message.value.passwordError = isNullOrEmpty(user.value.password) ? 'กรุณากรอกรหัสผ่าน' : ''
    message.value.confirmPasswordError = isNullOrEmpty(confirmPassword.value) ? 'กรุณายืนยันรหัสผ่าน' : (validateConfirmPasswd(user.value.password, confirmPassword.value) ? '' : 'รหัสผ่านไม่ตรงกัน')
    return Object.values(message.value).slice(0, 3).every(error => error === '')
}

const validateStep2 = () => {
    message.value.firstNameError = isNullOrEmpty(user.value.firstName) ? 'กรุณากรอกชื่อจริง' : ''
    message.value.lastNameError = isNullOrEmpty(user.value.lastName) ? 'กรุณากรอกนามสกุล' : ''
    message.value.genderError = isNullOrEmpty(user.value.gender) ? 'กรุณาเลือกเพศ' : ''
    message.value.emailError = isNullOrEmpty(user.value.email) ? 'กรุณากรอกอีเมล' : (validateEmail(user.value.email) ? '' : 'กรุณากรอกอีเมลที่ถูกต้อง')
    message.value.phoneError = isNullOrEmpty(user.value.phone) ? 'กรุณากรอกเบอร์โทร' : (validatePhone(user.value.phone) ? '' : 'เบอร์โทรต้องเป็นตัวเลข 10 หลัก') 
    message.value.facultyError = isNullOrEmpty(user.value.faculty) ? 'กรุณาเลือกคณะ' : ''
    message.value.majorError = isNullOrEmpty(user.value.major) ? 'กรุณาเลือกสาขา' : ''
    message.value.roomIDError = isNullOrEmpty(user.value.roomID) ? 'กรุณากรอกเลขห้องพัก' : 
        (validateRoomID(user.value.roomID) ? '' : 'เลขห้องพักต้องเป็นตัวเลข 4 หลัก');
    message.value.roomTypeError = isNullOrEmpty(user.value.roomType) ? 'กรุณาเลือกประเภทห้องพัก' : ''
    return Object.values(message.value).slice(3).every(error => error === '')
}

const validateSubmit = () => {
    if(step.value === 1) {
        return validateStep1()
    } else if(step.value === 2) {
        return validateStep2()
    } else {
        return false
    }
}

const nextStep = () => {
    if (validateSubmit()) {
        step.value++
    }
}

const finish = () => {
    if (validateSubmit()) {
        addUser()
        addRepair()
        router.push('/registration-success');
    }
}

const addRepair = async () => {
    if(!validateSubmit()) return;
    try{
        const newRepairData = {
        id: user.value.id.trim(),
        reports: []
    }
        const newRepair = await addItem(`${import.meta.env.VITE_APP_URL}/repairs`, newRepairData)
    }
    catch(error) {
        console.error(error);
    }
}

const addUser = async () => {
    if(!validateSubmit()) return;
    try{
        const newUserData = {
        id: user.value.id.trim(),
        password: await hashPassword(user.value.password.trim()),
        firstName: user.value.firstName.trim(),
        lastName: user.value.lastName.trim(),
        gender: user.value.gender.trim(),
        email: user.value.email.trim(),
        phone: user.value.phone.trim(),
        faculty: user.value.faculty.trim(),
        major: user.value.major.trim(),
        roomID: user.value.roomID.trim(),
        roomType: user.value.roomType.trim()
    }
        const newUser = await addItem(`${import.meta.env.VITE_APP_URL}/users`, newUserData)
        if (newUser) {
            allUsers.value.push(newUser)
        }
    }
    catch(error) {
        console.error(error);
    }
}

</script>
 
<template>
    <div class="bg-[url(../assets/background/dormBackground.png)] bg-cover bg-center bg-fixed w-full font-noto-sans-thai">
        <div class="flex justify-center h-full">
            <button @click="$router.go(-1)" type="button" class="flex items-center justify-center cursor-pointer left-20 absolute bg-[#E09F3E] px-3 py-1 rounded-full top-30">
                <img src="../../assets/icon/arrow-back.png" alt="back-arrow" class="w-14" />
            </button>
            <div class="mt-40 mb-20 flex flex-col gap-10 items-center">
                <div class="bg-white px-20 py-15 rounded-4xl border-2 border-[#9DB5B2]">
                    <h2 class="text-3xl font-bold text-[#404546] mb-4">ลงทะเบียนข้อมูลผู้เข้าพัก</h2>
                    <div class="mt-7">
                        <div v-show="step === 1" class="grid grid-cols-2 gap-x-15 gap-y-5">
                            <div>
                                <div v-if="message.idError" class="text-red-500 text-sm">
                                    {{ message.idError }}
                                </div>
                                <Input v-model="user.id" :input-type="'text'" :label="'รหัสนักศึกษา'" :required="true"/>
                            </div>   
                            
                            <div>
                              <div v-if="message.passwordError" class="text-red-500 text-sm">
                                    {{ message.passwordError }}
                              </div> 
                              <Input v-model="user.password" :input-type="'password'" :label="'รหัสผ่าน'" :required="true"/>  
                            </div>
                            
                            <div>
                               <div v-if="message.confirmPasswordError" class="text-red-500 text-sm">
                                    {{ message.confirmPasswordError }}
                                </div> 
                               <Input v-model="confirmPassword" :input-type="'password'" :label="'ยืนยันรหัสผ่าน'" :required="true"/> 
                            </div>        
                        </div>
                        <div v-show="step === 2" class="grid grid-cols-2 gap-x-15 gap-y-5">
                            
                            <div>
                                <div v-if="message.firstNameError" class="text-red-500 text-sm mt-1">
                                    {{ message.firstNameError}}
                                </div>
                                <Input v-model="user.firstName" :input-type="'text'" :label="'ชื่อจริง'" :required="true"/>
                            </div>
                            
                            <div>
                               <div v-if="message.lastNameError" class="text-red-500 text-sm mt-1">
                                    {{ message.lastNameError }}
                                </div> 
                                <Input v-model="user.lastName" :input-type="'text'" :label="'นามสกุล'" :required="true"/>
                            </div>
                            
                            <div>
                                <div v-if="message.genderError" class="text-red-500 text-sm mt-1">
                                    {{ message.genderError }}
                                </div>
                                <Dropdown v-model="user.gender" :label="'เพศ'" :list="genderList"/>
                            </div>                          
                            
                            <div>
                                <div v-if="message.emailError" class="text-red-500 text-sm mt-1">
                                    {{ message.emailError }}
                                </div>
                                <Input v-model="user.email" :input-type="'email'" :label="'อีเมล'" :required="true"/>
                            </div>                  
                            
                            <div>
                                <div v-if="message.phoneError" class="text-red-500 text-sm mt-1">
                                    {{ message.phoneError }}
                                </div>
                                <Input v-model="user.phone" :input-type="'text'" :label="'เบอร์โทรศัพท์'" :required="true"/>
                            </div>
                            
                            <div>
                                <div v-if="message.facultyError" class="text-red-500 text-sm mt-1">
                                    {{ message.facultyError }}
                                </div>
                                <Dropdown v-model="user.faculty" :label="'คณะ'" :list="facultyList"/>
                            </div>                          
                            
                            <div>
                                <div v-if="message.majorError" class="text-red-500 text-sm mt-1">
                                    {{ message.majorError }}
                                </div>
                                <Dropdown v-model="user.major" :label="'สาขา'" :list="majorList"/>
                            </div>                           
                            
                            <div>
                                <div v-if="message.roomIDError" class="text-red-500 text-sm mt-1">
                                    {{ message.roomIDError }}
                                </div>
                                <Input v-model="user.roomID" :input-type="'text'" :label="'เลขห้องพัก'" :required="true"/>
                            </div>           
                            
                            <div>
                               <div v-if="message.roomTypeError" class="text-red-500 text-sm mt-1">
                                    {{ message.roomTypeError}}
                                </div> 
                                <Dropdown v-model="user.roomType" :label="'ประเภทห้องพัก'" :list="roomTypeList"/>
                            </div>       
                        </div>
                    </div>
                </div>
                <Button :backgroundColor="'#E09F3E'" :hover="'#D18D2D'" :text="'ต่อไป'" @click="nextStep" v-if="step === 1"/>
                <div v-if="step === 2" class="flex space-x-15">
                    <Button :backgroundColor="'#1E555C'" :hover="'#10484F'" :text="'กลับไป'" @click="step--"/>
                    <Button :backgroundColor="'#E09F3E'" :hover="'#D18D2D'" :text="'เสร็จสิ้น'" @click="finish" />
                </div>
            </div>
        </div>
    </div>
</template>
 
<style scoped>

</style>