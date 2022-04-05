import router from '@/router';
import { createStore } from 'vuex'
import {apiBase} from '@/config/config';

export default createStore({
  state: {
    auth: false,
    user: {},
    schedule:[],
  },
  getters: {
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setSchedule(state,schedule){
      state.schedule = schedule;
    },
    authToggle(state,auth){
      state.auth = auth;
    }
  },
  actions: {
    async getSchedule({commit},date){
      let $headers = new Headers();
        let $raw = {};
        $headers.append("Access-Control-Allow-Origin", "*");
        $headers.append("Content-Type", "application/json");
        $headers.append("Authorization", "Bearer 5e2f230c03754848cb2a9beb1e1b8b41");
        $raw = JSON.stringify({
          date: date
        });
        let $options = {
          method: 'POST',
          headers: $headers,
          body: $raw,
      }
      const res = await fetch(`${apiBase}/schedule/av_schedule`, $options);
      const schedule = await res.json();
      
      if (schedule['code'] === 401) {
        router.replace('/login');
        return;
      }

      commit('setSchedule',schedule['data']);

    },
    // ==> login
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
