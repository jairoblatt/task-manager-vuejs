<template>
  <v-navigation-drawer class="deep-purple accent-4" dark permanent>
    <nav-bar-list/>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block>:)</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import NavBarList from './NavBarList'
export default {
  name:'NavBar',
  components:{
    NavBarList
  },
};
</script>

<style>
</style>