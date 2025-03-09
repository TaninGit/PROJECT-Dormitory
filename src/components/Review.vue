<script setup>
import ReviewCard from './ReviewCard.vue'
import reviews from '../../data/reviews.json'

console.log(reviews.length);

</script>
 
<template>
<div class="bg-[rgba(157,181,178,0.25)] flex flex-col items-center justify-center py-12 font-noto-sans-thai">
    <div class="flex flex-col items-center">
        <h1 class="text-[#1E555C] font-bold text-5xl p-3">รีวิวจากนักศึกษา</h1>
        <div class="bg-[#E09F3E] p-1 w-[275px] rounded-md drop-shadow-[5px_3px_5px_rgba(0,0,0,0.3)]"></div>    
    </div>
    <div>
        
    </div>
    <div class="flex flex-col items-center">
        <div>

        </div>
        <div class="flex flex-row mt-10">
            <div v-for="(review, index) in reviews" :key="index" :id="`review${review.ID}`">
                <ReviewCard>
                    <template #image>
                        <img :src="`./reviewImages/${review.img}`" alt="รูปผู้รีวิว" class="">
                    </template>
                    <template #name>
                        {{ review.name }}
                    </template>
                    <template #info>
                        {{ `คณะ${review.faculty} รุ่น${review.batch}` }}
                    </template>
                    <template #review>
                        " {{ review.reviewText }} "
                    </template>
                </ReviewCard>
            </div>
        </div>
        <ul class="flex flex-row space-x-5 mt-7">
            <li v-for="index in reviews.length" :key="index" class=" w-2.5 h-2.5 rounded-3xl bg-[#8FAAAD]"></li>
        </ul>
    </div>
</div>
</template>
 
<style scoped>

</style>