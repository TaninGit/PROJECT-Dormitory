import { createWebHistory, createRouter } from "vue-router";
import Homepage from "@/components/pages/Homepage.vue";
import Room from "@/components/pages/Room.vue";
import RoomDetail from "@/components/pages/RoomDetail.vue";
import Rule from "@/components/pages/Rule.vue";
import Login from "@/components/pages/Login.vue";
import SignUp from "@/components/pages/SignUp.vue";
import RegistrationSuccess from "@/components/pages/RegistrationSuccess.vue";
import Profile from "@/components/pages/Profile.vue";
import Repair from "@/components/pages/Repair.vue";
import AddRepairForm from "@/components/repair/AddRepairForm.vue";
import UpdateRepairForm from "@/components/repair/UpdateRepairForm.vue";
import Payment from "@/components/pages/Payment.vue";
import AboutUs from "@/components/pages/AboutUs.vue";
import NewsList from "@/components/pages/NewsList.vue";
const history = createWebHistory()
const routes = [
    {
        path:'/:notMatch(.*)',
        name:'NotFound',
        component:Homepage
    },
    {
        path:'/',
        redirect: {name: 'Homepage'}
    },
    {
        path:'/homepage',
        name:'Homepage',
        component:Homepage
    },
    {
        path:'/aboutus',
        name:'AboutUs',
        component:AboutUs
    },
    {
        path:'/news',
        name:'News',
        component:NewsList
    },
    {
        path:'/rule',
        name:'Rule',
        component:Rule
    },
    {
        path:'/room',
        name:'Room',
        component:Room
    },
    {
        path:'/room-detail/:id',
        name:'RoomDetail',
        component:RoomDetail
    },
    {
        path:'/login',
        name:'Login',
        component:Login
    },
    {
        path:'/signup',
        name:'SignUp',
        component:SignUp
    },
    ,
    {
        path:'/registration-success',
        name:'RegistrationSuccess',
        component:RegistrationSuccess
    },
    {
        path:'/profile',
        name:'Profile',
        component:Profile
    },
    {
        path:'/repair',
        name:'Repair',
        component:Repair
    },
    {
        path: '/add-repair',
        name: 'AddRepair',
        component: AddRepairForm
    },
    {
        path: '/update-repair/:repairId',
        name: 'UpdateRepair',
        component: UpdateRepairForm
    },
    {
        path:'/payment',
        name:'Payment',
        component:Payment
    }
]
const router = createRouter({
    history,
    routes
})
export default router