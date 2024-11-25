<template>
  <div>
    <router-view />
    <NavBar />
  </div>
</template>

<script>
  import NavBar from "./components/NavBar.vue"

  export default {
    components: {
      NavBar,
    },
  }
</script>

<style>
  html,
  body {
    height: 100%;
    margin: 0;
  }
  #app {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #093d00;
    background-color: rgb(244, 253, 255);
    /* background-color: rgb(0, 117, 143); */
    min-height: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
</style>
