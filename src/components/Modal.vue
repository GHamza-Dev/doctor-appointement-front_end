<template>
  <div v-if="show" class="absolute w-screen h-screen z-10 top-0 bg-gray-dark bg-opacity-60">
      <div class="box flex flex-col justify-evenly h-28 rounded max-w-xl w-11/12 m-auto bg-white">
        <p class="text-lg text-center">{{msg}}</p>
        <div class="flex justify-evenly items-center">
            <button class="border-2 border-gray rounded p-1 text-gray font-semibold">{{no}}</button>
            <button class="border-2 border-primary rounded p-1 text-white font-semibold bg-primary">{{yes}}</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        msg:{
            type:String,
            default:'Confirm this action'
        },
        yes:{
            type:String,
            default:'Confirm'
        },
        no:{
            type:String,
            default:'Cancel'
        },
        show:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style scoped>
.box{
    animation: animateBox .5s cubic-bezier(0.18, 0.91, 0.32, 1.28) forwards;
}
@keyframes animateBox {
    to{
        transform: translateY(9rem);
    }
}
</style>
