<template>
  <div class="max-w-xl mt-24 rounded-md m-auto h-96 bg-indigo-300 sm:mx-auto mx-2">
    <form>
      <div class="flex flex-col pl-3 pt-3">
        <label class="text-gray-dark" for="date">Select Date</label>
        <input @change="$store.dispatch('getSchedule',selectedDate)" :v-model="selectedDate" class="p-1 mt-1 text-cyan-600 w-56 rounded text-lg" id="date" type="date" :min="minDate">
      </div>
    </form>
    <hr class="mt-3 text-emerald-100">
    <div class="grid grid-cols-4 grid-rows-4 justify-items-stretch items-stretch gap-4 px-3 pt-3">
      <div v-for="sc in $store.state.schedule" :key="sc.scheduleId" class="h-24  border text-center pt-2 relative border-emerald-100 rounded cursor-pointer bg-white bg-opacity-30">
        <p class="text-gray-dark text-lg underline">{{sc.label}}</p>
        <div class="w-6 h-6 bg-primary rounded-full absolute bottom-1 right-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      minDate:'',
      selectedDate:''
    }
  },
  created(){
    let d = new Date();
    let dateOfToday = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
    this.minDate = dateOfToday;
    this.selectedDate = dateOfToday;
    this.$store.dispatch('getSchedule',this.selectedDate);
  }
}
</script>

<style>

</style>