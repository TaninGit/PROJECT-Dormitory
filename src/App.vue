<script setup>
import Homepage from "./components/pages/Homepage.vue"
import Repair from "./components/pages/Repair.vue"
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import AddRepairForm from "./components/repair/AddRepairForm.vue";
import UpdateRepairForm from "./components/repair/UpdateRepairForm.vue";
import RepairList from "./components/repair/RepairList.vue";
import Login from "./components/pages/Login.vue";
import Profile from "./components/pages/Profile.vue";
import Payment from "./components/pages/Payment.vue";
</script>

<template>
    <Navbar />
    <Payment></Payment>
    <!-- <Profile></Profile> -->
    <!-- <Login></Login> -->
    <!-- <Homepage></Homepage> -->
    <!-- <RepairList></RepairList> -->
    <!-- <UpdateRepairForm></UpdateRepairForm> -->
    <!-- <AddRepairForm></AddRepairForm> -->
    <Footer></Footer>
</template>

<style scoped></style>
