<template>
  <div>
    <div>Profile</div>{{user}}
    <q-input square outlined v-model="text" />
    <q-input square outlined v-model="text" />
    <q-input square outlined v-model="text" />
    <q-input square outlined v-model="text" />
    <q-input square outlined v-model="text" />
    <q-input square outlined v-model="text" />

    <q-btn label="Update Profile" />
    <q-btn label="Sign Out" @click="logOut" />
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      text: ''
    }
  },
  computed: {
    user() {
      return this.$store.getters["auth/user"];
    },
  },

  methods: {
    logOut(){
      this.$q.localStorage.set('wejapa-token', '');
      this.$router.push({ name: "index" });
    }
  },
}
</script>
