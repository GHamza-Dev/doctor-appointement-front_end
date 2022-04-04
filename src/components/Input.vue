<template>
    <div>
        <label :for="id" class="inline-block text-gray text-sm sm:text-base mb-2">{{label}}</label>
        <input :id="id" @input="$emit('on-input',value)" v-model="value" :type="type" :placeholder="holder" class="w-full bg-gray-50 text-gray border focus:ring ring-pritext-primary rounded outline-none transition duration px-3 py-2" />
    </div>
</template>

<script>
export default {
    data(){
        return{
            value:''
        }
    },
    props:{
        label:String,
        type:String,
        id:String,
        holder:{
            type:String,
            default:''
        }
    }
}
</script>

<style>

</style>