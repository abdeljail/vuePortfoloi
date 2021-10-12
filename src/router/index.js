import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import FrontEnd from "../views/FrontEnd.vue";
import BackEnd from "../views/BackEnd.vue";
import Design from "../views/Design.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/FrontEnd",
    name: "FrontEnd",
    component: FrontEnd,
  },
  {
    path: "/BackEnd",
    name: "BackEnd",
    component: BackEnd,
  },
  {
    path: "/Design",
    name: "Design",
    component: Design,
  },
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
