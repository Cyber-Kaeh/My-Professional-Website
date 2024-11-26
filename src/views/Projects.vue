<template>
  <div class="projects-container">
    <h1>Projects</h1>

    <div class="container-sm">
      <div class="row row-cols-2 row-cols-md-3 g-4">
        <div class="col">
          <div class="card text-start h-100">
            <img
              src="../assets/home-screenshot1.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-header">This website!</h5>
              <p class="card-text">
                My personal website built with Vue.js and Bootstrap 5.
              </p>
              <a href="#" class="btn btn-primary">Details</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-start h-100">
            <img
              src="../assets/nextcloud-screenshot.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-header">Private Cloud</h5>
              <p class="card-text">
                Self-hosted NextCloud server running on a Raspberry Pi 4.
              </p>
              <a href="#" class="btn btn-primary">Details</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-start h-100">
            <img
              src="../assets/bitwarden-og.webp"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-header">Password Manager</h5>
              <p class="card-text">
                Self-hosted Bitwarden instance host in AWS EC2.
              </p>
              <a href="#" class="btn btn-primary">Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .projects-container {
    padding: 20px;
  }
</style>
