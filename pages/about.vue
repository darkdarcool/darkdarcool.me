<template>
  <div>
    <DarkNav />
    <AboutView />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DarkNav from '~/components/DarkNav.vue';
import AboutView from '~/components/AboutView.vue';

export default Vue.extend({
    name: "IndexPage",
    components: { DarkNav: DarkNav, AboutView: AboutView }
});

</script>

<style>
body {
  background-image: url("~/static/imgs/poly_bg_2.png");
  background-attachment: fixed;
}
</style>
