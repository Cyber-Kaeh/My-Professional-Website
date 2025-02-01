<template>
  <div class="container text-centered">
    <h2>My Resume</h2>
    <hr>
    <p><a href="#">Download pdf</a> | <a href="#">Open new tab</a></p>
  </div>
  <div class="resume-container">
    <iframe :src="resumeUrl" frameborder="0" class="responsive-iframe"></iframe>
  </div>
</template>

<script>
export default {
  name: 'ResumeView',
  data() {
    return {
      resumeUrl: '/allen-resume-2024-software.html'
    };
  }
};
</script>

<style scoped>
.resume-container {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  padding-bottom: 60px;
}

.responsive-iframe {
  width: 100%;
  height: 100%;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
</style>
