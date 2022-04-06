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
    async book(context,{selectedId,selectedDate}){
      let userId = context.state.user.userId;
      let token = context.state.user.token;
      let $headers = new Headers();
      let $raw = {};
      $headers.append("Access-Control-Allow-Origin", "*");
      $headers.append("Content-Type", "application/json");
      $headers.append("Authorization", `Bearer ${token}`);
      $raw = JSON.stringify({
        uid: userId,
        scid: selectedId,
        date: selectedDate
      });
      let $options = {
        method: 'POST',
        headers: $headers,
        body: $raw,
      }
      const res = await fetch(`${apiBase}/appointement/create`, $options);
      const appt = await res.json();

      if (appt['code'] === 401) {
        alert('Ops it seems like your token has been expired');
        router.replace('/login');
        localStorage.removeItem('userxyz');
        return;
      }
      console.log(appt);
    },
    // ==> get available schedule
    async getSchedule({commit,state},date){
      let token = state.user.token;
      let $headers = new Headers();
      let $raw = {};
      $headers.append("Access-Control-Allow-Origin", "*");
      $headers.append("Content-Type", "application/json");
      $headers.append("Authorization", `Bearer ${token}`);
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
        alert('Ops it seems like your token has been expired');
        router.replace('/login');
        localStorage.removeItem('userxyz');
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
