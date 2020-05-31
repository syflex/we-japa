<template>
  <div>
    <q-input square type="search" outlined v-model="text" label="Search" />
    <div>
      <q-card>
        <q-card-section class="row q-gutter-sm q-pa-sm">
          <div>
            <q-avatar >
              <q-img src="statics/logo.svg" width="35px"/>
            </q-avatar>
          </div>
          <div>
            <h6 class="no-margin">Mobile Developer</h6>
            <p class="no-margin">Google: Kigali Rowanda</p>
          </div>
          <div>
            <q-icon name="style" />
            <div>$500</div>
          </div>


          <q-dialog square full-width="" full-height="" v-model="alert">
          <q-card>
          <q-card-section>
          <div class="text-h6">Alert</div>
          </q-card-section>
          <q-card-section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
          </q-card-section>
          <q-card-section>
          <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">
          <q-tab-panel name="mails">
          <div class="text-h6">Mails</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="alarms">
          <div class="text-h6">Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="movies">
          <div class="text-h6">Movies</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          </q-tab-panels>

          </q-card-section>
          <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
          </q-card-actions>
          </q-card>
          </q-dialog>



           <q-btn label="view" @click="alert = true"/>

        </q-card-section>
      </q-card>

      <q-card>
        <q-card-section class="row q-pa-sm">
          <div class="col-2">
            <q-skeleton type="QAvatar" />
          </div>
          <div class="col-8 q-pr-sm">
            <q-skeleton type="text" />
            <q-skeleton type="text" />
          </div>
          <div class="col-2">
            <q-skeleton type="QToggle" />
          </div>
        </q-card-section>
      </q-card>

    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      text: '',
      alert: false,
      panel: ''
    }
  },

  mounted() {
    this.getJobs();
  },

  methods: {
    async getJobs(){
      const req = await this.$axios.get('https://wejapabackend.herokuapp.com/api/job/all');
    }
  },
}
</script>
