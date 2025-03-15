<script setup>
import Homepage from "./components/pages/Homepage.vue"
import Repair from "./components/pages/Repair.vue"
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import AddRepairForm from "./components/repair/AddRepairForm.vue";
import UpdateRepairForm from "./components/repair/UpdateRepairForm.vue";
import RepairList from "./components/repair/RepairList.vue";
</script>

<template>
    <Navbar />
    <RepairList></RepairList>
    <!-- <UpdateRepairForm></UpdateRepairForm> -->
    <Footer></Footer>
</template>

<style scoped></style>
