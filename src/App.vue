<template>
  <home-nav-bar />
  <router-view></router-view>
</template>

<script>
import HomeNavBar from './views/HomePage/HomeNavBar.vue'
export default {
  setup () {

  },

  components: {
    HomeNavBar
  }

}
</script>

<style>
</style>
