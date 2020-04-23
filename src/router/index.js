import Vue from 'vue'
import VueRouter from 'vue-router'


/*mob*/
const Home = () => import("@/views/home/Home")
const Features = () => import("@/views/products/Features")
const Software = () => import("@/views/software/Software")
const Contact = () => import("@/views/contact/Contact")
const BodyFence = () => import("@/views/products/BodyFence")
const BodyFenceMatt = () => import("@/views/products/BodyFenceMatt")
const jianbianImg = () => import("@/views/home/layout/jianbianImg")
const zhengwen = () => import("@/views/home/layout/zhengwen")
const homeTest = () => import("@/views/home/homeTest")
Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/Home"
  },
  {
    path: "/test",
    component: BodyFenceMatt
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/features",
    component: Features
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    path: "/software",
    component: Software
  },
  {
    path: "/bodyFence",
    component: BodyFence
  },
  {
    path: "/bodyFenceMatt",
    component: BodyFenceMatt
  },
  {
    path: "/jianbianImg",
    component:jianbianImg,
  },
  {
    path: "/zhengwen",
    component:zhengwen,
  },
  {
    path: "/homeTest",
    component:homeTest
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
