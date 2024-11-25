<!-- src/components/NavBar.vue -->
<template>
  <nav
    class="navbar fixed-bottom navbar-expand-lg"
    style="background-color: #e3f2fd"
  >
    <div class="container-fluid">
      <router-link
        class="navbar-brand"
        to="/navView"
        style="color: rgb(23, 74, 23)"
        >Navigation</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/home"
              exact-active-class="active-link"
              aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/about"
              exact-active-class="active-link"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/projects"
              exact-active-class="active-link"
              >Projects</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/resume"
              exact-active-class="active-link"
              >Resume</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <span class="navbar-text powered-by-text"> Powered by: </span>
            <img
              src="../assets/vue-logo.png"
              alt="Vue.js Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top icons"
            />
            <img
              src="../assets/bootstrap-5-logo-icon.webp"
              alt="Bootstrap 5 Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top icons"
            />
            <img
              src="../assets/github-copilot-icon.png"
              alt="Github Copilot Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top icons"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "NavBar",
  }
</script>

<style scoped>
  .nav-link {
    color: rgb(0, 117, 143);
    transition: color 0.3s;
  }
  .nav-link:hover {
    color: black;
  }
  .active-link {
    color: rgb(23, 74, 23);
    /* background-color: #007bff;  <-- Pill effect
    border-radius: 0.25rem; */
  }
  .powered-by-text {
    margin-right: 20px;
  }
  .icons {
    margin-right: 10px;
  }
</style>
