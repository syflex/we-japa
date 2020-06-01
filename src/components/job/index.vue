<template>
  <div>

    <div class="row no-wrap justify-between q-my-md">
      <div class="text-h4">
        New Jobs
      </div>
      <div>
        <q-icon size="25px" name="style" />
      </div>
    </div>

    <div class="q-my-md">
      <q-input type="search" outlined v-model="text" placeholder="Search Jobs" />
    </div>

    <div class="q-my-md">

      <div class="row no-wrap justify-between q-my-md">
        <div class="text-h4">
          New Jobs
        </div>
        <div>
          View All>>
        </div>
      </div>

      <JobCard v-for="job in jobs.jobs"
          :key="job._id"
          :job="job" />
    </div>

  </div>
</template>

<script>
import JobCard from './partials/jobCard'
export default {
  props:['jobs'],

  data () {
    return {
      text: '',
    }
  },

  components:{JobCard}
}
</script>
