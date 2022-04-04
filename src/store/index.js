import router from '@/router';
import { createStore } from 'vuex'
import {apiBase} from '@/config/config';

export default createStore({
  state: {
    auth: false,
    user: {}
  },
  getters: {
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    authToggle(state,auth){
      state.auth = auth;
    }
  },
  actions: {
    login({commit},ref) {
        let $headers = new Headers();
        let $raw = {};
        $headers.append("Access-Control-Allow-Origin", "*");
        $headers.append("Content-Type", "application/json");
        $raw = JSON.stringify({
          id: ref
        });
        let $options = {
          method: 'POST',
          headers: $headers,
          body: $raw,
        }
        fetch(`${apiBase}/user/login`, $options)
          .then(res => res.json())
          .then(res => {
            if (res['data']) {
              commit('setUser',res['data']);
              commit('authToggle',true);
              localStorage.setItem('userxyz',JSON.stringify(res['data']));
              router.replace('/');
            }else alert('Please enter a valid user id');
          })
      }
    },
  modules: {
  }
})
