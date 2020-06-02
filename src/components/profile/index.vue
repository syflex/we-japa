<template>
  <div>
    <div class="text-h6">Profile</div>

    <div class="column q-gutter-sm">
      <q-input standout :value="user.name" placeholder="Name"/>
      <q-input standout :value="user.email" placeholder="Email"/>
      <q-input standout :value="user.phone" placeholder="Phone"/>
      <q-input standout :value="user.github" placeholder="Github"/>
      <q-input standout :value="user.stackOverflow" placeholder="StackOverflow"/>
      <q-input standout :value="user.resume" placeholder="Resume"/>

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
