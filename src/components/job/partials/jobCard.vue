<template>
  <q-card class="jp-radius q-mb-md cursor-pointer no-shadow " @click="alert = true">
    <q-card-section class="no-wrap q-gutter-sm q-pa-sm row">
      <div class="">
        <q-avatar color="black">
          <q-img src="statics/logo.svg" width="35px"/>
        </q-avatar>
      </div>
      <div>
        <h6 class="no-margin no-wrap ellipsis">{{ job.title }}</h6>
        <p class="no-margin text-caption text-accent text-center">
          {{ job.location }} -
          <span :class="job.status == 'Open' ? 'text-primary' : 'text-negative'">{{ job.status }}</span>
        </p>
      </div>
      <q-space />
      <div class="column flex-center">
        <!-- <q-icon color="primary" name="fa fa-dollar-sign" /> -->
        <div>$500</div>
      </div>
      </q-card-section>

       <q-dialog full-width="" full-height="" position="bottom" v-model="alert">
          <JobDialog :job="job" />
       </q-dialog>

    </q-card>
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

  components:{ JobDialog }
}
</script>
