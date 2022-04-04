<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12 mt-16">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <h2 class="text-gray-dark text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">Register</h2>
      <form class="max-w-lg border border-gray-dark rounded-lg mx-auto">
        <div class="flex flex-col gap-4 p-4 md:p-8">
          <Input @on-input="setFname" id="firstName" label="First Name" holder="Enter your first name" type="text" />
          <Input @on-input="setLname" id="lastName" label="Last Name" holder="Enter your last name" type="text" />
          <Input @on-input="setPhone" id="phone" label="Phone" holder="Enter your phone number" type="tel" />
          <button @click="register" type="button" :disabled="filled ? false : true" :class="[filled ? 'bg-gray-dark' : 'bg-gray']" class="flex justify-center items-cente active:bg-gray border border-gray focus-visible:ring ring-gray text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration gap-2 px-8 py-3">
            Register
          </button>
        </div>
        <div class="flex justify-center items-center p-4">
          <p class="text-gray text-sm text-center">Already have an account? <router-link to="/login" class="text-primary hover:text-secondary active:text-secondary transition duration">Login</router-link></p>
        </div>
      </form>
    </div>
  </div>
  <!-- Modal -->
  <div v-if="uuid" class="text-center modal w-screen h-screen bg-gray-dark bg-opacity-95 absolute top-0 z-20">
    <div class="w-11/12 -translate-y-1/2 top-1/3 absolute bg-primary left-1/2 -translate-x-1/2 p-4 rounded">
      <p class="text-white">This is your registration code, it will be used to login into your account</p>
      <div class="flex items-center justify-center my-3">
        <p class="bg-slate-300 rounded py-1 px-4 w-max"><code>{{uuid}}</code></p>
        <i class="fa-solid fa-clipboard text-3xl text-slate-300 cursor-pointer ml-2"></i>
      </div>
      <router-link class="border border-slate-800 text-slate-50" to="/login">Go to login</router-link>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input.vue'

export default {
  name:'RegisterView',
  components:{
    Input
  },
  data(){
    return {
      fname:'',
      lname:'',
      phone:'',
      uuid:''
    }
  },
  methods:{
    register(){
      let $headers = new Headers();
      let $raw = {};
      $headers.append("Access-Control-Allow-Origin", "*");
      $headers.append("Content-Type", "application/json");
      $headers.append("Authorization", "Bearer 2b69a92c6bf759fc701740b2f58d0295");
      $raw = JSON.stringify({
        fname:this.fname,
        lname:this.lname,
        phone:this.phone
      });
      let $options = {
        method:'POST',
        headers:$headers,
        body:$raw,
      }
      fetch('http://localhost/doc/user/register', $options)
      .then(res => res.json())
      .then(res => {
        this.uuid = res.uuid;
      })
    },
    setFname(fname){
      this.fname = fname;
    },
    setLname(lname){
      this.lname = lname;
    },
    setPhone(phone){
      this.phone = phone;
    }
  },
  computed:{
    filled(){
      return this.fname && this.lname && this.phone;
    }
  }
}
</script>

<style>

</style>