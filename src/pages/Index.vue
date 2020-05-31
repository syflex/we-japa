<template>
  <q-page>
    <login />
    <signup />
  </q-page>
</template>

<script>
import login from 'components/auth/login'
import signup from 'components/auth/signup'
export default {
  name: 'Home',
  components: { login,signup },
  data() {
    return {

    };
  }
};
</script>
