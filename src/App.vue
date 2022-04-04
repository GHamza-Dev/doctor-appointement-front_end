<template>
  <header>
    <NavBar class="absolute top-4 z-10 w-screen abs-center" />
  </header>
  
  <router-view/>
</template>
<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components:{
    NavBar
  }
}
</script>


<style lang="scss">
#app {
  font-family: poppins;

  .bg-img{
    background-image: url('./assets/doctor.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .bg-img::after{
      content: "";
      width: 100%;
      height: 100%;
      background: rgba(255,255,255,.3);
      position: absolute;
      top:0;
      z-index: 1;
  }
  .abs-center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}



nav {

  a {

    &.router-link-exact-active {
      text-decoration: none;
    }
  }
}
</style>
