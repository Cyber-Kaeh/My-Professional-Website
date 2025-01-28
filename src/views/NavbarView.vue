<template>
  <div class="nav-container">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
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
    background-color: #1a1a1a;
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .nav-item {
    margin: 15px 0;
  }

  .nav-link {
    display: block;
    padding: 12px 25px;
    color: #ffffff;
    text-decoration: none;
    border-radius: 5px;
    background-color: #333333;
    text-align: center;
    transition: background-color 0.3s, transform 0.3s;
  }

  .nav-link:hover {
    background-color: #555555;
    color: #ffffff;
    transform: translateY(-3px);
  }

  .nav-link:active {
    background-color: #777777;
    transform: translateY(0);
  }
</style>
