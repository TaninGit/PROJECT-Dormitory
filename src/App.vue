<script setup>
import Homepage from "./components/pages/Homepage.vue"
import Repair from "./components/pages/Repair.vue"
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import AddRepairForm from "./components/repair/AddRepairForm.vue";
import UpdateRepairForm from "./components/repair/UpdateRepairForm.vue";
import RepairList from "./components/repair/RepairList.vue";
import RoomDetail from "./components/pages/RoomDetail.vue";
import Profile from "./components/pages/Profile.vue";
import Login from "./components/pages/Login.vue";
import Payment from "./components/pages/Payment.vue";
import SignUp from "./components/pages/SignUp.vue";
import RegistrationSuccess from "./components/pages/RegistrationSuccess.vue";
</script>

<template>
    <!-- <Navbar /> -->
    <!-- <RoomDetail></RoomDetail> -->
    <!-- <Payment></Payment> -->
    <!-- <Login></Login> -->
    <!-- <SignUp></SignUp> -->
    <!-- <RegistrationSuccess></RegistrationSuccess> -->
    <!-- <Homepage></Homepage> -->
    <!-- <RepairList></RepairList> -->
    <!-- <UpdateRepairForm></UpdateRepairForm> -->
    <!-- <AddRepairForm></AddRepairForm> -->
    <!-- <Profile></Profile> -->
    <!-- <Footer></Footer> -->
    <Navbar></Navbar>
        <RouterView></RouterView>
    <Footer></Footer>
</template>

<style scoped></style>
