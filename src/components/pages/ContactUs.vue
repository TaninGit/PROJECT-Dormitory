<script setup>
import ContactBox from '../ContactBox.vue';
</script>
 
<template>
<div class="bg-[url(../assets/background/dormBackground.png)] bg-cover bg-center w-screen h-screen font-noto-sans-thai">
    <div class="flex flex-col justify-center items-center h-full">
        <div class="text-white text-center">
            <h1 class="text-8xl font-noto-sans-thai font-bold drop-shadow-[4px_4px_1px_rgba(0,0,0,0.5)]">ติดต่อเรา</h1>
            <p class="font-noto-sans-thai w-4xl text-[20px] mt-5 mb-12 drop-shadow-[3px_3px_1px_rgba(0,0,0,0.5)]">
                ขอขอบพระคุณที่ท่านให้ความสนใจในบริการของเรา หากท่านต้องการข้อมูลเพิ่มเติม โปรดอย่าลังเลที่จะติดต่อเรา<br>
                เราพร้อมให้บริการและตอบกลับท่านโดยเร็วที่สุด
            </p>
        </div>
        <div class="flex space-x-10 mt-5">
            <ContactBox>
                <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 36 36">
                    	<path fill="#fff" d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-1.54 22H5.66l7-7.24l-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0L32 9.21v17.5l-7.36-7.36l-1.41 1.41ZM5.31 8h25.07L17.84 20.47Z" class="clr-i-outline clr-i-outline-path-1" />
                    	<path fill="none" d="M0 0h36v36H0z" />
                    </svg>
                </template>
                <template #title>อีเมล</template>
                <template #text>
                    <a href="mailto:contact@goosebomb.com" class="hover:text-[#E09F3E]">
                        contact@goosebomb.com
                    </a>
                    <br>
                    <a href="mailto:support@goosebomb.com" class="hover:text-[#E09F3E]">
                        support@goosebomb.com
                    </a>
                </template>
            </ContactBox>
            <ContactBox>
                <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
                    	<path fill="#fff" fill-rule="evenodd" d="M5.733 2.043c1.217-1.21 3.221-.995 4.24.367l1.262 1.684c.83 1.108.756 2.656-.229 3.635l-.238.238a.65.65 0 0 0-.008.306c.063.408.404 1.272 1.832 2.692s2.298 1.76 2.712 1.824a.7.7 0 0 0 .315-.009l.408-.406c.876-.87 2.22-1.033 3.304-.444l1.91 1.04c1.637.888 2.05 3.112.71 4.445l-1.421 1.412c-.448.445-1.05.816-1.784.885c-1.81.169-6.027-.047-10.46-4.454c-4.137-4.114-4.931-7.702-5.032-9.47l.749-.042l-.749.042c-.05-.894.372-1.65.91-2.184zm3.04 1.266c-.507-.677-1.451-.731-1.983-.202l-1.57 1.56c-.33.328-.488.69-.468 1.036c.08 1.405.72 4.642 4.592 8.492c4.062 4.038 7.813 4.159 9.263 4.023c.296-.027.59-.181.865-.454l1.42-1.413c.578-.574.451-1.62-.367-2.064l-1.91-1.039c-.528-.286-1.146-.192-1.53.19l-.455.453l-.53-.532c.53.532.529.533.528.533l-.001.002l-.003.003l-.007.006l-.015.014a1 1 0 0 1-.136.106c-.08.053-.186.112-.319.161c-.27.101-.628.155-1.07.087c-.867-.133-2.016-.724-3.543-2.242c-1.526-1.518-2.122-2.66-2.256-3.526c-.069-.442-.014-.8.088-1.07a1.5 1.5 0 0 1 .238-.42l.032-.035l.014-.015l.006-.006l.003-.003l.002-.002l.53.53l-.53-.531l.288-.285c.428-.427.488-1.134.085-1.673z" clip-rule="evenodd" />
                    </svg>
                </template>
                <template #title>โทรศัพท์</template>
                <template #text>
                    <a href="tel:+66xxxxxxx" class="hover:text-[#E09F3E]">
                        123-456-7890
                    </a>
                    <br>
                    <a href="tel:+66870086030" class="hover:text-[#E09F3E]">
                        02-123-4567
                    </a>
                </template>
            </ContactBox>
            <ContactBox>
                <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
                    	<path fill="#fff" d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5" />
                    </svg>
                </template>
                <template #title>ที่อยู่</template>
                <template #text>
                    <a href="https://maps.app.goo.gl/wZnXp2nmirj6XFXs9" target="_blank" class="hover:text-[#E09F3E]">
                        126 ถนนประชาอุทิศ แขวงบางมด<br>
                        เขตทุ่งครุ กรุงเทพฯ 10140
                    </a>
                </template>
            </ContactBox>
            <ContactBox>
                <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
                    	<g fill="none">
                    		<path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    		<path fill="#fff" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 2a1 1 0 0 1 .993.883L13 7v4.586l2.707 2.707a1 1 0 0 1-1.32 1.497l-.094-.083l-3-3a1 1 0 0 1-.284-.576L11 12V7a1 1 0 0 1 1-1" />
                    	</g>
                    </svg>
                </template>
                <template #title>เวลาทำการ</template>
                <template #text>
                    วันจันทร์ - ศุกร์ : 08:30 - 18:00 น.<br>
                    วันเสาร์ - อาทิตย์ : 10:00 - 16:00 น.
                </template>
            </ContactBox>
        </div>
    </div>
</div>
</template>
 
<style scoped>

</style>