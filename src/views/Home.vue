<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div
        class="container welcome-text d-flex flex-column align-items-start justify-content-center"
      >
        <p class="hero-eyebrow">
          Software Engineer<span class="sep">/</span>DevOps<span class="sep"
            >/</span
          >Open Source
        </p>
        <h1 class="display-4 fw-bold">Anthony Allen</h1>
        <p class="lead hero-sub">
          I build and automate things — from web apps to the servers they run
          on.
        </p>
        <router-link to="/projects" class="btn learn-more-btn mt-3">
          View My Work
        </router-link>
      </div>
    </section>
  </div>
  <section id="about" class="py-5 bg-light">
    <div class="container">
      <div class="row align-items-center" data-aos="fade-right">
        <div class="col-md-6">
          <img
            src="../assets/headshot.jpg"
            class="img-fluid rounded-circle"
            alt="Anthony Allen"
          />
        </div>
        <div class="col-md-6">
          <h2>About Me</h2>
          <p>
            Hi, I'm Anthony Allen — a developer with a growing passion for
            DevOps, automation, and open source. Whether I'm coding,
            experimenting in my homelab, or diving into a new stack, I'm always
            building and learning.
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
export default {};
</script>

<style scoped>
.hero {
  height: 100vh;
  /* Two layers: the deep-green-to-teal diagonal underneath, and a vertical
     fade to the page background on top, so the bottom edge dissolves into
     the rest of the page instead of ending on a hard seam. */
  background:
    linear-gradient(180deg, rgba(244, 253, 255, 0) 60%, #f4fdff 100%),
    linear-gradient(135deg, #093d00 0%, #0b5a4a 52%, #00758f 100%);
  color: #ffffff;
  position: relative;
}
.hero h1 {
  /* At a fixed 3.5rem the name was 336px wide inside a 360px container --
     no overflow, but it would break on a 320px screen. */
  font-size: clamp(2.5rem, 12vw, 3.5rem);
  letter-spacing: -0.015em;
  margin-bottom: 1rem;
}
.welcome-text {
  height: 100%;
  text-align: left;
  color: #ffffff;
}
/* The developer nod: monospace, small, used once. */
.hero-eyebrow {
  font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas,
    monospace;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
  opacity: 0.9;
}
.hero-eyebrow .sep {
  opacity: 0.5;
  padding: 0 0.4rem;
}
.hero-sub {
  max-width: 30em;
  margin-bottom: 1.75rem;
  color: rgba(255, 255, 255, 0.92);
}
#contact {
  margin-bottom: 20px;
}
/* White on the accent cyan only reaches 3.04:1, and 2.51:1 once the fade
   washes over it -- below the 4.5:1 AA needs for 12px bold text. A white
   button with the deep brand green clears it at 12.5:1 and reads more
   strongly against the dark end of the gradient. */
.welcome-text .learn-more-btn {
  background-color: #ffffff;
  border-color: #ffffff;
  color: #0b3954;
  /* Sans for the small uppercase label, matching the nav chrome. */
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0.8rem 1.75rem;
}
.welcome-text .learn-more-btn:hover {
  background-color: #e3f2fd;
  border-color: #e3f2fd;
  color: #0b3954;
}
</style>
