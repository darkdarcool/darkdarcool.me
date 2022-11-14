<template>
  <div>
    <DarkNav />
    <HomeView />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DarkNav from '~/components/DarkNav.vue';
import HomeView from "~/components/HomeView.vue";

export default Vue.extend({
    name: "IndexPage",
    components: { DarkNav: DarkNav, HomeView: HomeView }
});



</script>

<style>
body {
  background-image: url("~/static/imgs/poly_bg.jpg");
  background-attachment: fixed;
}
</style>
