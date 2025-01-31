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
        aria-label="Toggle navigation"
        aria-expanded="false"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" @click="collapseNavbar">
            <router-link
              class="nav-link"
              to="/"
              exact-active-class="active-link"
              aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item" @click="collapseNavbar">
            <router-link
              class="nav-link"
              to="/projects"
              exact-active-class="active-link"
              >Projects</router-link
            >
          </li>
          <li class="nav-item" @click="collapseNavbar">
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
              data-bs-toggle="tooltip"
              title="Vue 3 v3.2.13"
            />
            <img
              src="../assets/bootstrap-5-logo-icon.webp"
              alt="Bootstrap 5 Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top icons"
              data-bs-toggle="tooltip"
              title="Bootstrap 5 v5.3.3"
            />
            <img
              src="../assets/github-copilot-icon.png"
              alt="Github Copilot Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top icons"
              data-bs-toggle="tooltip"
              title="Github Copilot coding assistance"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { Collapse } from 'bootstrap';

export default {
  data() {
    return {
      collapseInstance: null,
      isCollapsing: false
    };
  },
  mounted() {
    this.collapseInstance = new Collapse(document.getElementById('navbarNav'), {
      toggle: false
    });
    const navbarCollapse = document.getElementById('navbarNav')
    navbarCollapse.addEventListener('hidden.bs.collapse', () => {
      console.log("navbar has been collapsed")
      this.isCollapsing = false;
    });
    navbarCollapse.addEventListener('show.bs.collapse', (event) => {
      if (this.isCollapsing) {
        console.log("Preventing navbar from reopening")
        event.preventDefault();
      } else {
        console.log("Navbar is opening")
        this.isCollapsing = true;
      }
    })
  },
  methods: {
    collapseNavbar() {
      const navbarCollapse = document.getElementById('navbarNav');
      console.log("Navbar state before collapsing:", navbarCollapse.classList.contains('show'));
      if (navbarCollapse.classList.contains('show')) {
        console.log("Collapsing navbar");
        this.isCollapsing = true;
        this.collapseInstance.hide();
      } else {
        console.log("Navbar is already collapsed")
      }
      console.log("Navbar state after collapsing:", navbarCollapse.classList.contains('show'));
    }
  }
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
