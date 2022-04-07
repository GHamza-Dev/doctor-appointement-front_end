git <template>
  <h2 class="mt-24 max-w-xl sm:mx-auto mx-2 text-xl font-semibold text-violet-900">Take Appointement</h2>
  <div class="max-w-xl mt-4 rounded-md m-auto h-96 bg-indigo-300 sm:mx-auto mx-2">
    <form>
      <div class="flex flex-col pl-3 pt-3">
        <label class="text-violet-900" for="date">Select Date</label>
        <input @change="$store.dispatch('getSchedule',selectedDate)" v-model="selectedDate" class="p-1 mt-1 text-cyan-600 w-56 rounded text-lg outline outline-indigo-400 focus:outline-primary cursor-pointer" id="date" type="date" :min="minDate">
      </div>
    </form>
    <hr class="mt-3 text-emerald-100">
    <div class="grid grid-cols-4 grid-rows-4 justify-items-stretch items-stretch gap-4 px-3 pt-3">
      <div v-for="sc in $store.state.schedule" :key="sc.scheduleId" @click="selectScheduel(sc.scheduleId,sc.label)" :data-id="sc.scheduleId" class="h-24  border text-center pt-2 relative border-emerald-100 rounded cursor-pointer bg-white bg-opacity-30">
        <p class="text-gray-dark text-lg underline">{{sc.label}}</p>
        <div class="w-6 h-6 bg-primary rounded-full absolute bottom-1 right-1"></div>
      </div>
    </div>
  </div>
  <h2 class="mt-4 max-w-xl sm:mx-auto mx-2 text-xl font-semibold text-violet-900">Your Appointements</h2>
  <div class="mt-2 max-w-xl sm:mx-auto mx-2">
    <div v-for="(appt,index) in $store.state.appts" :key="appt.aptId" class="my-2 flex justify-between items-center border border-purple p-2 rounded">
      <span>#{{index}}</span>
      <span>{{appt.date}}</span>
      <span>{{appt.label}}</span>
      <span>{{appt.aptId}}</span>
      <button @click="selectAppt(appt.aptId)" class="border bg-red-400 text-white p-1 rounded">Cancel</button>
    </div>
  </div>
  <Modal @on-confirm="book" :msg="`Confirm the date: ${selectedDate} | ${selectedLable}`" @on-cancel="toggelModal" :show="showModal" />
  <Modal @on-confirm="cancelAppt" msg="Are you sure you want to cancel this appoientement?" @on-cancel="toggelCancelModal" :show="showCancelModal" />
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  components:{
    Modal
  },
  data(){
    return{
      minDate:'',
      selectedDate:'',
      showModal:false,
      showCancelModal:false,
      selectedId:0, // id of scheduel to be booked
      selectedLable:0, // lable of scheduel to be booked
      idToCancel:0 // id of appt to be cancled
    }
  },
  methods:{
    toggelModal(){
      this.showModal = !this.showModal
    },
    toggelCancelModal(){
      this.showCancelModal = !this.showCancelModal
    },
    selectScheduel(id,label){
      this.selectedId = id;
      this.selectedLable = label;
      this.toggelModal();
    },
    book(){
      let params = {
        scid:this.selectedId,
        date:this.selectedDate
      }
      this.$store.dispatch('book',params);
      this.toggelModal();
    },
    selectAppt(id){
      this.idToCancel = id;
      this.toggelCancelModal();
    },
    cancelAppt(){
      this.$store.dispatch('cancel',this.idToCancel);
      this.toggelCancelModal();
    }
  },
  created(){
    let d = new Date();

    let year = d.getFullYear();
    let month = d.getMonth();

    month = parseInt(month)+1;
    month =month > 9 ? month : `0${month}`;

    let day = d.getDate() > 9 ? d.getDate() : `0${d.getDate()}`;
    let dateOfToday = `${year}-${month}-${day}`;

    this.minDate = dateOfToday;
    this.selectedDate = dateOfToday;
    this.$store.dispatch('getSchedule',this.selectedDate);

    this.$store.dispatch('getAppts');
  }
}
</script>

<style>

</style>   