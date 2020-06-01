<template>
  <div>
    <q-card square flat class="column flex-center">

      <q-card-section class="text-center text-accent">
         Signup
      </q-card-section>

      <q-card-section class="q-gutter-md">

          <q-input standout dense v-model="text" placeholder="Your Full Name" />
          <q-input standout dense v-model="text" placeholder="Your Email" />
          <q-input standout dense v-model="text" placeholder="Your Phone Number" />
          <q-input standout dense v-model="text" placeholder="Github / Portfolio / Website url" />
          <q-input standout dense v-model="text" placeholder="StackOverflow (optional)" />
          <q-input standout dense v-model="text" placeholder="Resume Link: Drive, Dropbox, etc" />
          <q-select standout dense v-model="text" :options="options" placeholder="Experience level"/>
          <q-input standout dense v-model="text" placeholder="Your Password" />

          <q-checkbox v-model="val" class="text-caption text-accent">
            by clicking below to signup, your're agreeing to
            <q-btn color="primary" flat dense no-caps label="your terms of service" />
          </q-checkbox>

          <q-btn color="secondary" unelevated size="lg" text-color="black" no-caps label="Sign up" class="full-width jp-radius" />

          <div>
            Already have an account?
            <q-btn color="primary" flat dense no-caps :to="{name: 'login'}" label="Sign in" />
          </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      text: '',
      val: false,
      options: [
        'Junio: 1 - 2 years', 'Mid Level: 3 - 5 years', 'Senior: > 5 years'
      ]
    }
  }
}
</script>
