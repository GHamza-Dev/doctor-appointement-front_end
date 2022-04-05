import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import AppointementView from '../views/AppointementView.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/appointement',
    name: 'appointement',
    component: AppointementView,
    meta:{requiresAuth:true}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  
  if(!to.meta?.requiresAuth){
    console.log(to.meta?.requiresAuth);
    next();return;
  }

  if (!localStorage.getItem('userxyz') && to.name != 'login') {
    store.commit('setUser',[]);
    store.commit('authToggle',false);
    next({name:'login'});return;
  }

  if (!store.state.auth || !store.state.user) {
    let user = JSON.parse(localStorage.getItem('userxyz'));
    store.commit('setUser',user);
    store.commit('authToggle',true);
  }

  next();
})

export default router
