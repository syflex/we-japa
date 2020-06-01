<template>
  <div>
    <JobCard v-for="job in jobs"
          :key="job._id"
          :job="job.data" />
  </div>
</template>

<script>
import JobCard from './partials/jobCard'
export default {
  // name: 'ComponentName',
  data () {
    return {
      jobs: []
    }
  },

  components:{JobCard},

  mounted() {
    this.getSavedJobs();
  },

  methods: {
    getSavedJobs(){
      const jobsID = this.$q.localStorage.getItem('wejapa-saved-jobs');
      jobsID.forEach(async jobID => {
        const req = await this.$axios.get(process.env.Api+'/api/job/'+jobID);
        const data = req.data
        this.jobs.push(data)
      });
    }
  },
}
</script>
