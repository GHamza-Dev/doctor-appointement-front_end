<template>
  <footer class="text-center bg-gray-dark text-white p-4 text-sm relative bottom-0 w-screen">
      <p>&copy; {{year}} Docchama, All Rights Reserved</p>
  </footer>
</template>

<script>
export default {
    computed:{
        year(){
            let date = new Date();
            return date.getFullYear();
        }
    }
    // max-w-xl m-auto
}
</script>

<style>

</style>