<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div
        class="container welcome-text d-flex flex-column align-items-start justify-content-start"
      >
        <h1 class="display-4 fw-bold">
          Welcome to<br />
          Anthony's Website
        </h1>
        <p class="lead fw-bold text-light">
          Discover my projects and get in touch
        </p>
        <a href="#about" class="btn learn-more-btn btn-primary mt-3"
          >Learn More</a
        >
      </div>
    </section>
  </div>
  <div class="container my-5" data-aos="fade-up">
    <h2>Anthony Allen</h2>
    <p>I am a student of computer science, learning, and life in general.</p>
  </div>
  <section id="about" class="py-5 bg-light">
    <div class="container">
      <div class="row align-items-center" data-aos="fade-right">
        <div class="col-md-6">
          <img
            src="../assets/headshot.jpg"
            class="img-fluid rounded-circle"
            alt="Profile Picture"
          />
        </div>
        <div class="col-md-6">
          <h2>About Me</h2>
          <p>
            Hello! I'm Anthony Allen, a passionate developer learning full-stack
            web development. I love creating efficient and secure systems.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section id="contact" class="py-5 text-center">
    <div class="container">
      <h2 data-aos="fade-up">Contact Me</h2>
      <p data-aos="fade-up">
        Feel free to reach out to me on LinkedIn or check out my projects on
        GitHub!
      </p>
      <div class="d-flex justify-content-center mt-4" data-aos="zoom-in">
        <a
          href="https://www.linkedin.com/in/anthony-allen-738074268"
          target="_blank"
          class="btn btn-outline-primary mx-2"
        >
          <i class="fab fa-linkedin"></i> LinkedIn
        </a>
        <a
          href="https://github.com/Cyber-Kaeh"
          target="_blank"
          class="btn btn-outline-dark mx-2"
        >
          <i class="fab fa-github"></i> GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {}
</script>

<style scoped>
  .hero {
    height: 100vh;
    background: url("../assets/hero-image4.jpg") center/cover no-repeat;
    color: white;
    position: relative;
    padding-bottom: 60px;
  }
  .hero h1 {
    font-size: 3.5rem;
  }
  .welcome-text {
    font-family: "Space Mono", "Courier New", Courier, monospace;
    text-align: left;
    /* color: rgb(4, 159, 190); */
    color: rgb(37, 39, 39);
    text-shadow: 4px 4px 6px rgba(43, 44, 44, 0.751);
    -webkit-text-stroke: 1px rgb(153, 158, 163);
  }
  #contact {
    margin-bottom: 60px;
  }
  .welcome-text .learn-more-btn {
    color: rgb(255, 255, 255);
    -webkit-text-stroke: 0.6px rgba(227, 235, 235, 0.751);
  }
</style>
