<template>
  <div class="q-pa-xs">
    <q-card class="jp-radius cursor-pointer no-shadow" @click="viewJob(job._id)">
    <q-card-section class="no-wrap q-gutter-sm q-pa-sm flex flex-center">
      <div class="">
        <q-avatar color="black">
          <q-img src="statics/logo.svg" width="35px"/>
        </q-avatar>
      </div>
      <div>
        <div class="no-margin no-wrap ellipsis text-bold" style="max-width: 200px">
          {{ job.title }}
        </div>
        <p class="no-margin text-caption text-accent">
          {{ job.location }} -
          <span :class="job.status == 'Open' ? 'text-primary' : 'text-negative'">{{ job.status }}</span>
        </p>
      </div>
      <q-space />
      <div class="column flex-center">
        <q-icon color="primary" name="fa fa-briefcase" />
        <div>$500</div>
      </div>
      </q-card-section>

       <q-dialog full-width="" full-height="" position="bottom" v-model="alert">
          <JobDialog :job="job" />
       </q-dialog>

    </q-card>
  </div>
</template>

<script>
import JobDialog from './JobDialog'
export default {
  props:['job'],

  data() {
    return {
      alert: false
    }
  },

  components:{
    JobDialog
  },

  methods: {
    viewJob(id){
      if (this.$q.screen.lt.md) {
        this.alert = true
      }else{
        this.$router.push({ name: "job", params:{id: id} });
      }

    }
  },
}
</script>
