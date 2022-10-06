import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import store from './store/store.js'

 import BaseCard from './components/BaseCard.vue'
 

//import HomeComp from "./components/HomeComp"
//import OfficeComp from "./components/OfficeComp"

import HomeOne from "./components/HomeOne"
import LoginForm from "./components/LoginForm"

import SignUp from "./components/SignUp"
import FetchUsers from "./components/FetchUsers"
import CartComp from "./components/CartComp"



//let isAuthenticated= true
let router= createRouter ({
    history: createWebHistory(),//to remember the previous pages using browser history
routes:[
    {
        path:"/",
        component:HomeOne
    },
    {
        path:"/login",
        component:LoginForm
    },
    {
        path:"/signup",
        component:SignUp
    },
    {
        path:"/products",
        component:FetchUsers
    },
    {
        path:"/cart",
        component:CartComp
    },

]
})

router.beforeEach((to,from) =>{
    console.log("to",to)
    console.log("from",from)
    if(to.path === "/cart" && store.state.isAuthenticated){
        return true //if Authentication is true
    }else if(to.path === "/cart" && !store.state.isAuthenticated){
        return '/login' //if authentication is false
    }
})

let app=createApp(App)
app.component("base-card",BaseCard)
app.use(store)
app.use(router)
app.mount('#app')
