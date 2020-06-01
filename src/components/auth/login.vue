<template>
  <q-card square flat class="column flex-center">
      <q-card-section class="text-center text-h2">
          We<span class="text-bold">japa</span>
      </q-card-section>
      <q-card-section class="q-gutter-md">

          <q-input standout="bg-accent text-black" v-model="form.email" placeholder="Your Email"  class="full-width" style="border-radius: 15px"/>
          <q-input standout="bg-accent text-black" v-model="form.password" type="password" placeholder="Password" class="full-width">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <div class="text-right">
            <q-btn flat no-caps dense color="accent" label="Forgot password?" class="text-caption"/>
          </div>

          <q-btn color="secondary" text-color="black" unelevated size="lg" no-caps label="Sign In" @click="login()" class="full-width jp-radius text-caption" />

          <div class="full-width text-center">
            Dont have an account?
            <q-btn color="primary" :to="{name: 'signup'}" flat dense no-caps label="Sign up" />
          </div>
      </q-card-section>
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      isPwd: true,
      form:{
        email: '',
        password: ''
      }
    }
  },

  methods: {
    async login(){
      const endPoint = "/api/developer/login";
      const data = await this.$axios.post(process.env.Api+endPoint, this.form);
      const res = data.data;
      await this.$store.commit("auth/login", {
        data: res.data.developer,
        token: res.data.token
      });

      this.$axios.defaults.headers.common["Authorization"] = "Bearer " + res.data.token;

      this.$router.push({ name: "jobs" });
    }
  },
}
</script>
