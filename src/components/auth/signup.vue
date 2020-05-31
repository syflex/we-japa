<template>
  <div>
    <q-card square flat>
      <q-card-section class="text-center">
          Wejapa
      </q-card-section>
      <q-card-section class="q-gutter-md">
          <q-input outlined dense v-model="text" label="Your Full Name" />
          <q-input outlined dense v-model="text" label="Your Email" />
          <q-input outlined dense v-model="text" label="Your Phone Number" />
          <q-input outlined dense v-model="text" label="Github / Portfolio / Website url" />
          <q-input outlined dense v-model="text" label="StackOverflow (optional)" />
          <q-input outlined dense v-model="text" label="Resume Link: Drive, Dropbox, etc" />
          <q-input outlined dense v-model="text" label="Experience level" />
          <q-input outlined dense v-model="text" label="Password" />
          <q-checkbox v-model="val" />

          <q-btn color="accent" text-color="black" no-caps label="Sign up" class="full-width" />

          <div>
            Already have an account?
            <q-btn color="secondary" flat dense no-caps label="Sign in" />
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
      text:'',
      val: false
    }
  }
}
</script>
