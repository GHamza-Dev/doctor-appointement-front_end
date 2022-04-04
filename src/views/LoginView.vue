<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12 mt-16">
    <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <h2 class="text-gray-dark text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">login</h2>
      <form class="max-w-lg border border-gray-dark rounded-lg mx-auto">
        <div class="flex flex-col gap-4 p-4 md:p-8">
          <Input @on-input="setRef" id="firstName" label="Ref" holder="Ex: rf432uyg54" type="text" />
          <button @click="login" type="button" :disabled="filled ? false : true" :class="[filled ? 'bg-gray-dark' : 'bg-gray']" class="flex justify-center items-cente active:bg-gray border border-gray focus-visible:ring ring-gray text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration gap-2 px-8 py-3">
            login
          </button>
        </div>
        <div class="flex justify-center items-center p-4">
          <p class="text-gray text-sm text-center">Don't have an account? <router-link to="/register" class="text-primary hover:text-secondary active:text-secondary transition duration">Register</router-link></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input.vue'

export default {
  name:'loginView',
  components:{
    Input
  },
  data(){
    return {
      ref:''
    }
  },
  methods:{
    login(){  
        this.$store.dispatch('login',this.ref);
    },
    setRef(ref) {
        this.ref = ref;
    }
  },
  computed:{
    filled(){
      return this.ref;
    }
  }
}
</script>

<style>

</style>