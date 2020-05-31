<template>
  <q-page padding class="row flex-center">
    <q-card square flat>
      <q-card-section class="text-center">
          Wejapa
      </q-card-section>
      <q-card-section class="q-gutter-md">
          <q-input outlined dense v-model="text" label="Your Phone Number" />
          <q-input outlined dense v-model="text" label="Password" />
          <div class="text-right">
            <q-btn color="grey-7" flat="" no-caps="" dense="" label="Forgot password" />
          </div>
          <q-btn color="accent" text-color="black" no-caps label="Sign In" class="full-width" />
          <div>Dont have an account?  <q-btn color="secondary" flat dense no-caps label="Sign up" />
          </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      text: ''
    }
  },
}
</script>
