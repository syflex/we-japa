<template>
  <div>

    <!-- <div class="row no-wrap justify-between q-my-md">
      <div class="text-h6">
        New Jobs
      </div>
      <div>
         <q-btn flat color="accent" icon="fas fa-thumbtack" dense :to="{name: 'saved-jobs'}">
           <q-badge color="primary" floating transparent>
            {{ savedJods.length }}
          </q-badge>
         </q-btn>
      </div>
    </div> -->

    <div class="q-my-md">
      <q-input
        v-model="search"
        dense
        debounce="500"
        outlined
        placeholder="Search Jobs"
        @input="filterData"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>

    <div class="q-my-md">

      <div class="row flex-center no-wrap justify-between q-my-md">
        <div class="text-h6">
          Latest Roles
        </div>
        <div class="text-accent">
           <q-btn color="accent" flat no-caps dense :label="(filter ? 'View All' : 'View Latest') + '>>'" @click="filter = !filter" />
        </div>
      </div>

      <div v-if="this.jobs.jobs" class="q-mb-xl">
        <div v-if="search.length" class="row">
          <JobCard  v-for="job in jobsEntry"
          :key="job._id"
          :job="job"
          />
        </div>
        <div v-else class="row q-gutter-sm">
          <JobCard  v-for="job in (search.length ? sortedJobs : sortedJobs)"
          :key="job._id"
          :job="job"
          />
        </div>
      </div>

      <div v-else>
        <JobSkeletal v-for="(item, index) in [1,2,3,4]" :key="index"/>
      </div>

    </div>

  </div>
</template>

<script>
import JobCard from './partials/jobCard'
import JobSkeletal from './partials/JobSkeletal'
export default {
  props:['jobs'],

  data () {
    return {
      search: '',
      filter: true,
      jobsEntry: []
    }
  },

  components:{
    JobCard, JobSkeletal
  },

  computed: {
    savedJods(){
     return this.$q.localStorage.getItem('wejapa-saved-jobs');
    },

    sortedJobs(){

      let result = null;
      this.jobs.jobs ?

        result =  this.filter == false ?
          this.jobs.jobs.sort( function(a, b) { return b.status == 'Open' } )
          :
          this.jobs.jobs.filter(function(job){
            return job.status == 'Open'
          })

      : []

      return result
    },
  },

  methods: {
    filterData(value){
      const result = this.filterByValue(this.jobs.jobs, value)
      this.jobsEntry = result
    },

    filterByValue(array, string) {
        return array.filter( o =>
            Object.keys(o).some(k => o[k].toString().toLowerCase().includes(string.toLowerCase())));
    }
  },

}
</script>
