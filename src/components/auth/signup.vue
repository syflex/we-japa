<template>
  <div>
    <q-card square flat class="column flex-center">

      <!-- <q-card-section class="text-center text-accent">
         Signup
      </q-card-section> -->

      <q-card-section class="column q-gutter-md">

          <q-input standout dense  v-model="form.name" placeholder="Your Full Name" />
          <q-input standout dense  v-model="form.email" placeholder="Your Email" />
          <q-input standout dense  v-model="form.phone" placeholder="Your Phone Number" />
          <q-input standout dense  v-model="form.portfolio" placeholder="Github / Portfolio / Website url" />
          <q-input standout dense  v-model="form.stack" placeholder="StackOverflow (optional)" />
          <q-input standout dense  v-model="form.resume" placeholder="Resume Link: Drive, Dropbox, etc" />
          <q-select standout dense  v-model="form.experience" :options="options" placeholder="Experience level"/>
          <q-input standout dense  v-model="form.password" type="password" placeholder="Your Password" >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <q-checkbox v-model="val" class="text-caption text-accent">
            by clicking below to signup, your're agreeing to
            <q-btn color="primary" flat dense no-caps label="your terms of service" />
          </q-checkbox>

          <q-btn color="secondary" unelevated size="lg" text-color="black" no-caps label="Sign up" class="jp-radius" />

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
      form:{
        name: '',
        email: '',
        phone: '',
        portfolio: '',
        stack: '',
        resume: '',
        experience: '',
        password: '',
        val: false,
      },
      options: [
        'Junio: 1 - 2 years', 'Mid Level: 3 - 5 years', 'Senior: > 5 years'
      ]
    }
  }
}
</script>
