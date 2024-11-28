<!-- src/components/NavBar.vue -->
<template>
  <nav
    class="navbar fixed-bottom navbar-expand-lg"
    style="background-color: #e3f2fd; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)"
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
              to="/"
              exact-active-class="active-link"
              aria-current="page"
              >Home</router-link
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
  .navbar {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .nav-link {
    color: rgb(0, 117, 143);
    transition: color 0.3s, box-shadow 0.3s;
  }
  .nav-link:hover {
    color: #00336a;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
  }
  .active-link {
    color: rgb(25, 96, 25);
    border-radius: 0.25rem;
    background-color: #e3f2fd;
    padding: 5px 10px;
  }
  .powered-by-text {
    margin-right: 20px;
    font-weight: bold;
  }
  .icons {
    margin-right: 10px;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .icons:hover {
    transform: scale(1.1);
  }
</style>
