<script setup>
import ReviewCard from './ReviewCard.vue'
import reviews from '../../../data/reviews.json'
import { ref } from "vue"

const selected = ref(3)
const translate = ref(0)

const prevReview = () => {
    if (selected.value === 1) {
        selected.value = reviews.length
        translate.value = (3 - selected.value) * 20
        return
    }
    selected.value -= 1
    translate.value += 20
}

const nextReview = () => {
    if (selected.value === reviews.length) {
        selected.value = 1
        translate.value = (3 - selected.value) * 20
        return
    }
    selected.value += 1
    translate.value -= 20
}

const selectReview = (index) => {
    selected.value = index
    translate.value = (3 - index) * 20
}

</script>

<template>
<div class="bg-[rgba(157,181,178,0.25)] flex flex-col items-center justify-center py-12 font-noto-sans-thai">
    <div class="flex flex-col items-center">
        <h1 class="text-[#1E555C] font-bold text-5xl p-3">รีวิวจากนักศึกษา</h1>
        <div class="bg-[#E09F3E] p-1 w-[275px] rounded-md drop-shadow-[5px_3px_5px_rgba(0,0,0,0.3)]"></div>    
    </div>
    <div class="flex flex-col items-center">
        <div class="flex flex-row items-center mt-10 w-full relative">
            <button @click="prevReview" class="mr-15">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                	<g fill="none" fill-rule="evenodd">
                		<path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                		<path fill="#1E555C" d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z" />
                	</g>
                </svg>
            </button>
            <div class="overflow-hidden w-screen flex justify-center max-w-[59rem]">
                <div class="flex flex-row items-center duration-1000"
                    :style="`translate: ${translate}rem`">
                    <div v-for="(review, index) in reviews" :key="index" :id="`review${review.ID}`">
                        <ReviewCard :id="review.ID" :selected="selected">
                            <template #image>
                                <img :src="`./reviewImages/${review.img}`" alt="รูปผู้รีวิว" class="">
                            </template>
                            <template #name>
                                {{ review.name }}
                            </template>
                            <template #info>
                                {{ `คณะ${review.faculty} รุ่น ${review.batch}` }}
                            </template>
                            <template #review>
                                " {{ review.reviewText }} "
                            </template>
                        </ReviewCard>
                    </div>
                </div>
            </div>
            <button @click="nextReview" class="ml-15">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                	<g fill="none" fill-rule="evenodd">
                		<path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                		<path fill="#1E555C" d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z" />
                	</g>
                </svg>
            </button>
        </div>
        <ul class="flex flex-row space-x-5 mt-7">
            <li v-for="index in reviews.length" :key="index" :id="`dot${index}`" 
                class=" w-2.5 h-2.5 rounded-3xl" @click="selectReview(index)"
                :class="selected === index ? 'bg-[#1E555C]' : 'bg-[#8FAAAD]' ">
            </li>
        </ul>
    </div>
</div>
</template>
 
<style scoped>

</style>