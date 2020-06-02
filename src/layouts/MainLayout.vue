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

        <q-tabs v-else v-model="tab" shrink stretch>
          <q-route-tab no-caps label="Jobs" :to="{name: 'jobs'}" exact />
          <q-route-tab no-caps label="Applications" :to="{name: 'jobs'}" exact class="gt-xs" disable="" />
          <q-route-tab no-caps label="Saved Jobs" :to="{name: 'saved-jobs'}" exact class="gt-xs">
            <q-badge v-if="savedJods" color="negative" floating transparent>
              {{ savedJods.length }}
            </q-badge>
          </q-route-tab>
          <q-route-tab v-if="user" no-caps :label="'Hi ' + user.name" :to="{name: 'profile'}" exact/>
        </q-tabs>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

     <q-tabs v-if="isLoggedIn"
        v-model="tab" narrow-indicator
        class="lt-sm fixed-bottom bg-white" active-color="primary" dense
      >
        <q-route-tab icon="home" no-caps label="Jobs" :to="{name: 'jobs'}" exact class="text-caption"/>
        <q-route-tab icon="description" no-caps label="Applications" :to="{name: 'jobs'}" exact disable />
        <q-route-tab icon="fas fa-thumbtack" no-caps label="Saved Jobs" :to="{name: 'saved-jobs'}" exact >
          <q-badge v-if="savedJods" color="negative" floating transparent>
            {{ savedJods.length }}
          </q-badge>
        </q-route-tab>
        <q-route-tab icon="person" no-caps label="Profile" :to="{name: 'profile'}" exact />
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
    user() {
      return this.$store.getters["auth/user"];
    },
    savedJods(){
     return this.$q.localStorage.getItem('wejapa-saved-jobs');
    },
  },
};
</script>
