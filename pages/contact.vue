<template>
  <div>
    <DarkNav />
    <ContactView />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DarkNav from '~/components/DarkNav.vue';
import ContactView from '~/components/ContactView.vue';

export default Vue.extend({
    name: "IndexPage",
    components: { DarkNav: DarkNav, ContactView: ContactView }
});

</script>

<style>
body {
  background-image: url("~/static/imgs/poly_bg_3.jpg");
  background-attachment: fixed;
}
</style>
