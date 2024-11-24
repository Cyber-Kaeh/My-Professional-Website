<!-- src/components/NavBar.vue -->
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/home">Navbar</router-link>
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
            <router-link class="nav-link active" aria-current="page" to="/home"
              >Home</router-link
            >
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
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <span class="navbar-text powered-by-text"> Powered by: </span>
            <img
              src="../assets/vue-logo.png"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top icons"
            />
            <img
              src="../assets/bootstrap-5-logo-icon.webp"
              alt="Logo"
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

<style scoped>
  .powered-by-text {
    margin-right: 20px;
  }
  .icons {
    margin-right: 10px;
  }
</style>
