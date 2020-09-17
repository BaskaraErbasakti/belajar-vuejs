import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from "./views/home/home"
import history from "./views/history/history"

const mainRouter = new VueRouter({
    routes: [
        {
            path: "/",
            name: "home",
            component: home,
        },
        {
            path: "/history",
            name: "history",
            component: history,
        },
    ],
})


export default mainRouter