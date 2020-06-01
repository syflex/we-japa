<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="solid-primary">
      <q-toolbar>
        <q-toolbar-title>
          <img src="statics/logo.svg" style="max-width: 35px"/>
        </q-toolbar-title>

        <div v-if="!isLoggedIn" class="">
          <q-btn flat no-caps label="Login" :to="{name: 'login'}" />
          <q-btn flat no-caps label="Sign up" :to="{name: 'signup'}" />
        </div>

        <q-tabs v-else v-model="tab" shrink stretch class="gt-xs">
          <q-route-tab no-caps label="Jobs" :to="{name: 'jobs'}" exact/>
          <q-route-tab no-caps label="Applications" :to="{name: 'jobs'}" exact/>
          <q-route-tab no-caps label="Saved Jobs" :to="{name: 'saved-jobs'}" exact/>
          <q-route-tab no-caps label="Profile" :to="{name: 'profile'}" exact/>
        </q-tabs>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

     <q-tabs v-if="isLoggedIn"
        v-model="tab" narrow-indicator
        class="bg-grey-4 lt-sm" active-color="secondary" dense
      >
        <q-route-tab icon="home" no-caps label="Jobs" :to="{name: 'jobs'}" exact />
        <q-route-tab icon="alarm" no-caps label="Applications" :to="{name: 'jobs'}" exact />
        <q-route-tab icon="movie" no-caps label="Saved Jobs" :to="{name: 'saved-jobs'}" exact />
        <q-route-tab icon="movie" no-caps label="Profile" :to="{name: 'profile'}" exact />
      </q-tabs>

  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',

  data() {
    return {
      tab: 'mails'
    };
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/isLoggedIn"];
    },
  },
};
</script>
