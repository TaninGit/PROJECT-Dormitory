<script setup>
import { ref } from "vue";
import Input from '../form/Input.vue';
import Button from '../form/Button.vue';
import { getItemById } from "../../libs/fetchUtils";

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
            // go to profile page
        } else {
            invalidInput.value = true
        }
    } catch (error) {
        invalidInput.value = true
        console.log(error)
    }
}

const hashPassword = async (passwd) => {
    const buffer = new TextEncoder().encode(passwd)
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('')
    return hashHex
}

const showErrorId = ref(false)
const showErrorPassword = ref(false)

const validateInput = () => {
    if (input.value.id.trim() === '') showErrorId.value = true
    if (input.value.password.trim() === '') showErrorPassword.value = true
}

</script>
 
<template>
<div class="bg-[url(../assets/background/dormBackground.png)] bg-cover bg-center w-screen h-screen">
    <div class="flex flex-col justify-center items-center space-y-10 h-full">
        <button type="button" class="flex items-center justify-center cursor-pointer left-20 absolute bg-[#E09F3E] px-3 py-1 rounded-full top-30">
            <img src="../../assets/icon/arrow-back.png" alt="back-arrow" class="w-14" />
        </button>
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
        <Button :backgroundColor="'#E09F3E'" :hover="'#E09F3E'" :text="'เข้าสู่ระบบ'" @click="login" />
    </div>
    <div>
        
    </div>
</div>
</template>
 
<style scoped>

</style>