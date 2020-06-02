<template>
  <div>
    <div class="text-h6">Profile</div>

    <div class="column q-gutter-sm">
      <q-input standout :value="user.name" />
      <q-input standout :value="user.email" />
      <q-input standout :value="user.phone" />
      <q-input standout :value="user.github" />
      <q-input standout :value="user.stackOverflow" />
      <q-input standout :value="user.resume" />

      <q-btn color="primary" no-caps size="lg" unelevated label="Update Profile" class="jp-radius"/>

      <q-btn color="grey-7" no-caps size="lg" unelevated label="Sign Out" @click="logOut" class="jp-radius"/>
    </div>

  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      form: {
        name:  '',
        email: '',
        phone: '',
        github: '',
        stack: '',
        drive: ''
      }
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
