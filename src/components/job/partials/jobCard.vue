<template>
  <q-card class="jp-radius q-mb-md">
    <q-card-section class="row q-gutter-sm q-pa-sm">
      <div>
        <q-avatar color="black">
          <q-img src="statics/logo.svg" width="35px"/>
        </q-avatar>
      </div>
      <div>
        <h6 class="no-margin">{{ job.title }}</h6>
        <p class="no-margin text-caption text-accent">
          {{ job.location }} -
          <span :class="job.status == 'Open' ? 'text-primary' : 'text-negative'">{{ job.status }}</span>
        </p>
      </div>
      <div>
        <q-icon color="primary" name="monetization_on" />
        <div>$500</div>
      </div>

      <JobDialog :job="job" />

    </q-card-section>
    </q-card>
</template>

<script>
import JobDialog from './JobDialog'
export default {
  props:['job'],

  components:{ JobDialog }
  
}
</script>
