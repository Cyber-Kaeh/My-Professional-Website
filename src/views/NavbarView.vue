<template>
  <div class="nav-container">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link class="nav-link" to="/home">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/projects">Projects</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/resume">Resume</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgb(0, 117, 143);
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .nav-item {
    margin: 10px 0;
  }

  .nav-link {
    display: block;
    padding: 10px 20px;
    color: white;
    text-decoration: none;
    border-radius: 25px;
    background-color: #444;
    text-align: center;
    transition: background-color 0.3s;
  }

  .nav-link:hover {
    background-color: #555;
    color: rgb(0, 117, 143);
  }
</style>
