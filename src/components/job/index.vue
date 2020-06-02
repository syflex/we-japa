<template>
  <div class="row">
    <div class="col-xs-12 col-sm-9 q-px-sm">
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
            <q-btn
              color="accent"
              flat
              no-caps
              dense
              :label="(filter ? 'View All' : 'View Latest') + '>>'"
              @click="filter = !filter"
            />
          </div>
        </div>

        <div v-if="this.jobs.jobs">
          <div v-if="search.length" class="row">
            <JobCard
              v-for="job in jobsEntry"
              :key="job._id"
              :job="job"
              class="col-xs-12 col-sm-12 col-md-6 q-mb-sm"
            />
          </div>
          <div v-else class="row q-mb-sm">
            <JobCard
              v-for="job in search.length ? sortedJobs : sortedJobs"
              :key="job._id"
              :job="job"
              class="col-xs-12 col-sm-12 col-md-6 q-mb-sm"
            />
          </div>
        </div>

        <div v-else>
          <JobSkeletal v-for="(item, index) in [1, 2, 3, 4]" :key="index" />
        </div>
      </div>
    </div>

    <div class="col-xs-12 col-sm-3 q-px-sm">
      <div class="row flex-center no-wrap justify-between q-my-md">
        <div class="text-h6">
          Companies
        </div>
        <div class="text-accent">
          <q-btn color="accent" flat no-caps dense label="View All" />
        </div>
      </div>

      <q-card class="q-mb-sm">
        <q-card-section class="column flex-center">
          <div class="">
            <q-avatar color="black">
              <q-img src="statics/logo.svg" width="35px" />
            </q-avatar>
          </div>
          <div>
            <h5 class="no-margin no-wrap ellipsis">WeJapa</h5>
            <p class="text-accent">0 Open Roles</p>
          </div>
          <div>
            <q-btn
              color="primary"
              no-caps
              flat
              dense
              label="View Open Roles"
              disable=""
            />
          </div>
        </q-card-section>
      </q-card>

      <q-card>
        <q-card-section class="column flex-center">
          <div class="">
            <q-avatar color="black">
              <q-img src="statics/logo.svg" width="35px" />
            </q-avatar>
          </div>
          <div>
            <h5 class="no-margin no-wrap ellipsis">WeJapa</h5>
            <p class="text-accent">0 Open Roles</p>
          </div>
          <div>
            <q-btn
              color="primary"
              no-caps
              flat
              dense
              label="View Open Roles"
              disable=""
            />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import JobCard from './partials/jobCard';
import JobSkeletal from './partials/JobSkeletal';
export default {
  props: ['jobs'],

  data() {
    return {
      search: '',
      filter: true,
      jobsEntry: []
    };
  },

  components: {
    JobCard,
    JobSkeletal
  },

  computed: {
    savedJods() {
      return this.$q.localStorage.getItem('wejapa-saved-jobs');
    },

    sortedJobs() {
      let result = null;
      const data = this.jobs.jobs;

      this.jobs.jobs
        ? (result =
            this.filter == false
              ? data.sort(function(a, b) {
                  return b.status == 'Open';
                })
              : this.jobs.jobs.filter(function(job) {
                  return job.status == 'Open';
                }))
        : [];

      return result;
    }
  },

  methods: {
    filterData(value) {
      const result = this.filterByValue(this.jobs.jobs, value);
      this.jobsEntry = result;
    },

    filterByValue(array, string) {
      return array.filter(o =>
        Object.keys(o).some(k =>
          o[k]
            .toString()
            .toLowerCase()
            .includes(string.toLowerCase())
        )
      );
    }
  }
};
</script>
