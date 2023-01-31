<template>
  <nav-bar></nav-bar>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar
  }
};
</script>

<style>
#app {
  margin: 0 auto;
  max-width: 1000px;
}
body {
  margin: 50px 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
