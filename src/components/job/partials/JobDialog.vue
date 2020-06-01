<template>
  <div>
    <q-btn label="view" @click="alert = true"/>
      <q-dialog full-width="" full-height="" v-model="alert">
          <q-card>

          <q-card-section class="column flex-center">
            <q-avatar color="black">
              <q-img src="statics/logo.svg" width="35px"/>
            </q-avatar>
            <div>
              {{job.location}}
            </div>
            <div>
              <q-badge color="red" :label="job.status" />
            </div>
          </q-card-section>

          <q-card-section class="row no-wrap justify-between">
              <div class="column flex-center">
                <q-icon name="style" />
                {{job.hoursPerWeek}}hrs/Wk
              </div>
              <div class="column flex-center">
                 <q-icon name="style" />
                {{job.type}}
              </div>
              <div class="column flex-center">
                 <q-icon name="style" />
                  ${{job.salary}}/Mo
              </div>
          </q-card-section>

          <q-card-section>
            <q-card flat>
              <q-tabs
                v-model="tab"
                dense
                class="text-grey"
                active-color="black"
                indicator-color="primary"
                align="justify"
                narrow-indicator
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
                  <div v-for="benefit in job.benefits" :key="benefit.id" class="column flex-center">
                    <q-icon name="style" />
                    {{benefit}}
                  </div>
                </q-tab-panel>

                <q-tab-panel name="movies">
                  {{job.experience}}
                </q-tab-panel>
              </q-tab-panels>
            </q-card>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn color="primary" no-caps label="Apply Now" />
            <q-btn color="primary" icon="style" @click="saveJob(job._id)" flat no-caps label="Save Job" />
            <q-btn flat no-caps label="Close Modal" color="primary" v-close-popup />
          </q-card-actions>

          </q-card>
    </q-dialog>
  </div>
</template>
<script>
export default {
  props:['job'],
data() {
  return {
    alert: false,
    tab: 'mails'
  }
},

methods: {
  saveJob(jobID){
    let savedJobs = this.$q.localStorage.getItem('wejapa-saved-jobs');
    if (!savedJobs) {
      savedJobs = [];
      this.$q.localStorage.set('wejapa-saved-jobs', []);
    }
    savedJobs.push(jobID);
    this.$q.localStorage.set('wejapa-saved-jobs', savedJobs)
  }
},
}
</script>
