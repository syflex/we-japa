<template>
  <q-page padding>
    <JobPage :jobs="jobs"/>
  </q-page>
</template>

<script>
import JobPage from 'components/job/index'
export default {
  name: 'JobHome',

  data() {
    return {
      jobs: []
    }
  },

  components:{
    JobPage
  },

  mounted() {
    this.getJobs();
  },

  methods: {
    async getJobs(){
      const req = await this.$axios.get('https://wejapabackend.herokuapp.com/api/job/all');
      const data = req.data
      this.jobs = data.data

    }
  },

}
</script>
