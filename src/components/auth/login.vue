<template>
  <div>
    <q-card square flat>
      <q-card-section class="text-center">
          Wejapa
      </q-card-section>
      <q-card-section class="q-gutter-md">
          <q-input outlined dense v-model="form.email" label="Your Email" />
          <q-input outlined dense v-model="form.password" label="Password" />

          <div class="text-right">
            <q-btn color="grey-7" flat="" no-caps="" dense="" label="Forgot password" />
          </div>

          <q-btn color="accent" text-color="black" no-caps label="Sign In" @click="login()" class="full-width" />
          <div>Dont have an account?  <q-btn color="secondary" flat dense no-caps label="Sign up" />
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
        email: '',
        password: ''
      }
    }
  },

  methods: {
    async login(){
      // const req = await this.$axios.post('https://wejapabackend.herokuapp.com/api/developer/login', this.form);

//       curl --location --request POST 'https://wejapabackend.herokuapp.com/api/developer/login' \
// --header 'Accept: application/json' \
// --data-raw '{
// 	"email": "favourori96@gmail.com",
// 	"password": "123456"
// }'

    }
  },
}
</script>
