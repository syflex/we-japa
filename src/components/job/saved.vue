<template>
  <div>
    <div v-if="this.jobs" class="row q-mb-sm">
      <JobCard v-for="job in jobs" :key="job._id" :job="job.data" class="col-xs-12 col-sm-12 col-md-6 q-mb-sm" />
    </div>
    <div v-else>
      <JobSkeletal v-for="(item, index) in [1, 2, 3, 4]" :key="index" />
    </div>

    <div v-if="!jobs.length">
      No Saved Job
    </div>

  </div>
</template>

<script>
import JobCard from './partials/jobCard';
import JobSkeletal from './partials/JobSkeletal';
export default {
  // name: 'ComponentName',
  data() {
    return {
      jobs: []
    };
  },

  components: {
    JobCard,
    JobSkeletal
  },

  mounted() {
    this.getSavedJobs();
  },

  methods: {
    getSavedJobs() {
      const jobsID = this.$q.localStorage.getItem('wejapa-saved-jobs');
      jobsID.forEach(async jobID => {
        const req = await this.$axios.get(
          process.env.Api + '/api/job/' + jobID
        );
        const data = req.data;
        this.jobs.push(data);
      });
    }
  }
};
</script>
