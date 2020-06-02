<template>
  <q-card square flat class="column flex-center">
      <q-card-section class="text-center text-h2">
          We<span class="text-bold">japa</span>
      </q-card-section>
      <q-card-section class="q-gutter-md">
        <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md">

          <q-input ref="email" dense standout
          v-model="form.email" placeholder="Your Email"
          class="full-width" style="border-radius: 15px"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Please type your full name',
            val => val && re.test(val) || 'Please type a real email'
          ]"
        />

          <q-input ref="password" dense standout
          v-model="form.password" type="password"
          placeholder="Password" class="full-width"
           lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        >
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

          <q-btn color="secondary" type="submit" text-color="black"
          unelevated no-caps label="Sign In"
          class="full-width jp-radius text-caption"
           :loading="loading">
            <template v-slot:loading>
              <q-spinner-tail class="on-left" />
              <span class="text-italic">
                login in...
              </span>
            </template>
           </q-btn>

          <div class="full-width text-center">
            Dont have an account?
            <q-btn color="primary" :to="{name: 'signup'}" flat dense no-caps label="Sign up" />
          </div>
         </form>
      </q-card-section>
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      isPwd: true,
      loading: false,
      form:{
        email: '',
        password: '',
      },
      re: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
  },

  methods: {
    async login(){
      this.loading = true
      const endPoint = "/api/developer/login";
      const data = await this.$axios.post(process.env.Api+endPoint, this.form);
      const res = data.data;

      await this.$store.commit("auth/login", {
        data: res.data.developer,
        token: res.data.token
      });

      this.$axios.defaults.headers.common["Authorization"] = "Bearer " + res.data.token;
      this.loading = false
      this.$router.push({ name: "jobs" });
    },

    onSubmit () {
      this.$refs.email.validate()
      this.$refs.password.validate()

      if (this.$refs.email.hasError || this.$refs.password.hasError) {
        this.formHasError = true
      } else {
        this.login()
      }
    },

    onReset () {
      this.form.email = null
      this.form.password = null

      this.$refs.name.resetValidation()
      this.$refs.age.resetValidation()
    }

  },
}
</script>
