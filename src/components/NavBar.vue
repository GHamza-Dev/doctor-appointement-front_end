<template>
    <div class="max-w-xl flex justify-between items-center p-3 rounded-full bg-white border border-gray-light">
      <h1 class="logo text-2xl text-secondary"><span class="font-bold text-primary">Doc</span>hama</h1>
      <nav class="flex justify-end flex-1">
        <router-link class="mr-3 text-emerald-800" to="/" >Home</router-link>
        <router-link v-if="!$store.state.auth" class="mr-3 text-emerald-800" to="/login" >Login</router-link>
        <button v-if="!$store.state.auth">
          <router-link class="mr-0 bg-secondary hover:bg-secondary text-white py-2 px-4 rounded-3xl" to="/register" >Register</router-link>
        </button>
        <button v-if="$store.state.auth">
          <router-link class="bg-primary text-sm hover:bg-secondary text-white p-3 rounded-3xl" to='/'>New Appoientement</router-link>
        </button>
      </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>