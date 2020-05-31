<template>
  <q-page padding class="row flex-center">
    <q-card square flat>
      <q-card-section class="text-center">
          Wejapa
      </q-card-section>
      <q-card-section class="q-gutter-md">
          <q-input outlined dense v-model="text" label="Full Name" />
          <q-input outlined dense v-model="text" label="Your Phone Number" />
          <q-input outlined dense v-model="text" label="Email" />
          <q-input outlined dense v-model="text" label="Password" />
          <q-input outlined dense v-model="text" label="Password Confirmation" />
          <q-btn color="accent" text-color="black" no-caps label="Sign up" class="full-width" />
          <div>
            Already have an account?
            <q-btn color="secondary" flat dense no-caps label="Sign in" />
          </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      text: ''
    }
  },
}
</script>
