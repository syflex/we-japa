<template>
  <div>
    <q-card flat>

        <q-card-section class="column flex-center">
          <q-avatar color="black">
            <q-img src="statics/logo.svg" width="35px"/>
          </q-avatar>
            <div>
              <h6 class="no-margin">{{job.title}}</h6>
            </div>
            <div>
              {{job.location}}
            </div>
          <div>
            <q-badge :color="job.status == 'Open' ? 'primary' : 'negative'" :label="job.status" />
          </div>
        </q-card-section>

        <q-card-section class="row no-wrap q-gutter-xs justify-evenly">
            <div class="column flex-center bg-grey-3 q-pa-sm rounded-borders">
              <q-icon color="primary" name="fa fa-stopwatch" />
              {{job.hoursPerWeek}}hrs/Wk
            </div>
            <div class="column flex-center bg-grey-3 q-pa-sm rounded-borders">
              <q-icon color="primary" name="work" />
              {{job.type}}
            </div>
            <div class="column flex-center bg-grey-3 q-pa-sm rounded-borders">
              <q-icon color="primary" name="monetization_on" />
              ${{job.salary}}/Mo
            </div>
        </q-card-section>

        <q-card-section>

          <q-card flat>
            <q-tabs
              v-model="tab"
              dense
              class="text-grey fit"
              active-color="black"
              indicator-color="primary"
              align="justify"
              narrow-indicator
              no-caps
            >
              <q-tab name="mails" label="Description" />
              <q-tab name="alarms" label="Benefits" />
              <q-tab name="movies" label="Experiance" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="mails">
                {{job.description}}
              </q-tab-panel>

              <q-tab-panel name="alarms" class="row q-gutter-sm">
                <div v-for="benefit in job.benefits" :key="benefit.id" class="col-xs-4 col-sm-2 column flex-center">
                  <q-icon name="check_circle" />
                  {{benefit}}
                </div>
              </q-tab-panel>

              <q-tab-panel name="movies">
                {{job.experience}}
              </q-tab-panel>
            </q-tab-panels>

          </q-card>
        </q-card-section>

        <q-card-actions class="column q-gutter-sm">
          <q-btn color="primary" unelevated no-caps label="Apply Now"
          class="jp-radius q-px-lg" :disable=" job.status == 'Closed'? true : false" />

          <q-btn color="primary" icon="fa fa-check-circle"
          @click="saveJob(job._id)" flat no-caps class="jp-radius q-px-lg"
          :label="checkSaved(job._id) == 'true' ? 'Unsave Job' : 'Save Jobe'"
          />

          <q-btn flat no-caps label="Close" color="negative" v-close-popup />
        </q-card-actions>

        </q-card>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      job: null,
      tab: 'mails'
    }
  },

  mounted() {
    this.getJob();
  },

  methods: {
    async getJob(){
      const endPoint = "/api/job/"+this.$route.params.id;
      const data = await this.$axios.get(process.env.Api+endPoint);
      const res = data.data;
      this.job = res.data

    },

    saveJob(jobID){
    let savedJobs = this.$q.localStorage.getItem('wejapa-saved-jobs');
    if (!savedJobs) {
      savedJobs = [];
      this.$q.localStorage.set('wejapa-saved-jobs', []);
    }
    savedJobs.push(jobID);
    this.$q.localStorage.set('wejapa-saved-jobs', savedJobs)
  },

  checkSaved(data){
    const savedJobs = this.$q.localStorage.getItem('wejapa-saved-jobs');
    if (savedJobs) {
      return savedJobs.includes(data) ? 'true' : 'false'
    } else {
      return 'false'
    }

  }
  },
}
</script>
