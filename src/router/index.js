import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import NavbarView from "@/views/NavbarView.vue"
import Projects from "@/views/Projects.vue"
import ResumeView from "@/views/ResumeView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/navView",
    name: "navView",
    component: NavbarView,
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
  {
    path: '/resume',
    name: 'ResumeView',
    component: ResumeView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
