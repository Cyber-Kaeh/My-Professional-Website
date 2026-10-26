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
        style="color: #0b3954"
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
      <div class="collapse navbar-collapse" id="navbarNav" ref="navbarCollapse">
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
      </div>
    </div>
  </nav>
</template>

<script>
import { Collapse } from 'bootstrap';

export default {
  data() {
    return {
      collapseInstance: null
    };
  },
  mounted() {
    // The toggler button carries data-bs-toggle="collapse", so Bootstrap's
    // data-API also acts on this element -- but it uses getOrCreateInstance,
    // so it reuses the instance created here rather than making a second one.
    this.collapseInstance = new Collapse(this.$refs.navbarCollapse, {
      toggle: false
    });
  },
  beforeUnmount() {
    this.collapseInstance?.dispose();
    this.collapseInstance = null;
  },
  methods: {
    collapseNavbar() {
      // hide() already no-ops when the menu is closed or mid-transition, so
      // the old classList check and the show.bs.collapse/_isTransitioning
      // workaround are unnecessary. That workaround existed because two
      // copies of Bootstrap (the UMD bundle plus the ESM build) each kept
      // their own instance registry and so animated this element twice.
      this.collapseInstance?.hide();
    }
  }
}
</script>

<style scoped>
  .navbar {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    /* The site body is Source Serif 4; nav chrome stays sans so the small
       links read as UI rather than as prose. */
    font-family: Roboto, Helvetica, Arial, sans-serif;
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
    color: #0b3954;
    border-radius: 0.25rem;
    background-color: #e3f2fd;
    padding: 5px 10px;
  }
</style>
