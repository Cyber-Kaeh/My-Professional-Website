<template>
  <div class="resume-section">
    <h2>My Resume</h2>
    <p>
      Below is a preview of my resume. You can also download it using the button
      below.
    </p>

    <!-- Responsive iframe container -->
    <div class="resume-preview">
      <iframe
        src="/resume1.pdf"
        title="Resume Preview"
        frameborder="0"
        scrolling="no"
        class="iframe-resume"
      ></iframe>
    </div>

    <!-- Download Button -->
    <a
      href="/resume1.pdf"
      class="btn btn-primary mt-3"
      target="_blank"
      download="AnthonyAllen_Resume.pdf"
    >
      Download Resume
    </a>
  </div>
</template>

<script>
  // export default {
  //   data() {
  //     return {
  //       pdfUrl: `${import.meta.env.BASE_URL}resume1.pdf`, // Dynamically resolve the base path
  //     }
  //   },
  // }
</script>

<style scoped>
  /* Same styles as provided earlier for iframe and button */
  .resume-section {
    text-align: center;
    padding: 20px;
    margin-top: 30px;
    margin-bottom: 60px;
  }

  .resume-preview {
    max-width: 800px;
    margin: 0 auto;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .iframe-resume {
    width: 100%;
    height: 600px;
    border: none;
  }

  .btn {
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
  }

  .btn:hover {
    background-color: #0056b3;
  }
</style>
