<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <img src="statics/logo.svg" width="40px"/>
        </q-toolbar-title>

         <div>
          <q-btn flat label="Login" :to="{name: 'login'}" />
          <q-btn flat label="Sign up" :to="{name: 'signup'}" />
        </div>

        <q-tabs v-model="tab" shrink stretch>
          <q-route-tab no-caps label="Jobs" :to="{name: 'jobs'}" exact/>
          <q-route-tab no-caps label="Applications" :to="{name: 'jobs'}" exact/>
          <q-route-tab no-caps label="Saved Jobs" :to="{name: 'jobs'}" exact/>
          <q-route-tab no-caps label="Profile" :to="{name: 'jobs'}" exact/>
        </q-tabs>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

     <q-tabs
        v-model="tab" narrow-indicator
        class="bg-grey-4" active-color="secondary" dense
      >
        <q-route-tab icon="home" no-caps label="Jobs" :to="{name: 'jobs'}" exact />
        <q-route-tab icon="alarm" no-caps label="Applications" :to="{name: 'jobs'}" exact />
        <q-route-tab icon="movie" no-caps label="Saved Jobs" :to="{name: 'jobs'}" exact />
        <q-route-tab icon="movie" no-caps label="Profile" :to="{name: 'jobs'}" exact />
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
  }
};
</script>
