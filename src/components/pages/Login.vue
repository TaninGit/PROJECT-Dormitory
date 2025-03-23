<script setup>
import { ref } from "vue";
import Input from '../form/Input.vue';
import Button from '../form/Button.vue';
import { getItemById } from "../../libs/fetchUtils";
import { hashPassword } from "../../libs/hashPassword";
import { useRouter } from 'vue-router';

const router = useRouter();


const input = ref({
    id: '',
    password: ''
})

const currentUser = ref('')
const invalidInput = ref(false)

const login = async () => {
    validateInput()
    if (showErrorId.value === true || showErrorPassword.value === true) return
    try {
        const user = await getItemById(`${import.meta.env.VITE_APP_URL}/users`, input.value.id)
        const hashInputPassword = await hashPassword(input.value.password)
        if (user.password === hashInputPassword) {
            currentUser.value = input.value.id
            localStorage.setItem('currentUser', input.value.id);
            router.push('/profile');
        } else {
            invalidInput.value = true
        }
    } catch (error) {
        invalidInput.value = true
        console.log(error)
    }
}

const showErrorId = ref(false)
const showErrorPassword = ref(false)

const validateInput = () => {
    if (input.value.id.trim() === '') showErrorId.value = true
    if (input.value.password.trim() === '') showErrorPassword.value = true
}

</script>
 
<template>
<div class="bg-[url(../assets/background/dormBackground.png)] bg-cover bg-center w-screen h-screen font-noto-sans-thai">
    <div class="flex flex-col justify-center items-center space-y-10 h-full">
        <div class="bg-white px-20 py-15 rounded-4xl border-2 border-[#9DB5B2]">
            <div class="pb-7">
                <p class="text-center text-4xl font-bold text-[#404546]">LOG IN</p>
                <p v-if="invalidInput" class="text-center mt-2 text-md text-red-600 font-noto-sans-thai">ข้อมูลไม่ถูกต้อง</p>
            </div>
            <div class="space-y-10">
                <div>
                    <Input v-model="input.id" :label="'รหัสนักศึกษา'" :inputType="'text'" :required="true" :name="'id'"/>
                    <p v-if="showErrorId" class="mt-2 text-md text-red-600 font-noto-sans-thai">กรุณากรอกข้อมูล</p>
                </div>
                <div>
                    <Input v-model="input.password" :label="'รหัสผ่าน'" :inputType="'password'" :required="true" :name="'password'"/>
                    <p v-if="showErrorPassword" class="mt-2 text-md text-red-600 font-noto-sans-thai">กรุณากรอกข้อมูล</p>
                </div>
            </div>
        </div>
        <div >
            <Button :backgroundColor="'#E09F3E'" :hover="'#D18D2D'" :text="'เข้าสู่ระบบ'" @click="login" />
            <p class="text-white mt-3 text-center">ยังไม่มีบัญชี? 
            <RouterLink to="/signup">
                <span class="text-[#FFC773] underline cursor-pointer">สมัครใช้งาน</span>
            </RouterLink>
            </p>
        </div>
    </div>
</div>
</template>
 
<style scoped>

</style>