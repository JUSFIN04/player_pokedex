import { createApp } from 'vue'
import App from './App.vue'
import Home from "./screens/Home.vue"
import Catalougue from "./screens/Catalougue.vue"
import * as VueRouter from "vue-router"

const routes = [
    {path: "/", component: Home, name: "home"},
    {path: "/catalougue", component: Catalougue, name: "catalougue"}
]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  

createApp(App).use(router).mount('#app')
