<template>
  <div class="container text-centered">
    <h2>My Resume</h2>
    <hr />
    <p>
      <a href="#">Download pdf</a> |
      <a :href="pdfUrl" target="_blank">Open in new tab</a>
    </p>
    <ResumeComponent />
  </div>
</template>

<script>
  import ResumeComponent from "@/components/ResumeComponent.vue"
  export default {
    name: "ResumeView",
    components: {
      ResumeComponent,
    },
    data() {
      return {
        resumeUrl: "/resume1.html",
        pdfUrl: "/resume1.pdf",
      }
    },
  }
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
