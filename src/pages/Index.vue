<template>
  <q-page class="flex flex-center">
    <login v-if="route == 'login'"/>
    <signup v-else-if="route == 'signup' "/>
    <login v-else />
  </q-page>
</template>

<script>
import login from 'components/auth/login'
import signup from 'components/auth/signup'
export default {
  name: 'Home',
  components: { login,signup },
  computed: {
      route(){
        return this.$route.name
      }
    },
};
</script>
