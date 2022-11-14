<style scoped src="~/assets/styles/navbar.css">
*{width: 100%; }

</style>
<template>
  <div id="navbar" class = "sticky">
    <img src="~/static/imgs/pfp.webp" alt="logo" class = "pfp_sender" onclick = "location.replace('/');"/>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
    <a href = "https://blog.darkdarcool.me"> Blog </a>
  </div>
</template>

<script>
export default {
  name: 'Darknav'
}
</script>
