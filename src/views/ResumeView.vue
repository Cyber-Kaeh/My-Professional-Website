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
  .resume-section {
    text-align: center;
    padding: 20px;
    margin-top: 30px;
    margin-bottom: 60px;
    font-family: Arial, sans-serif;
    color: #333;
  }

  .resume-preview {
    position: relative;
    max-width: 90%; /* Adjust for smaller screens */
    margin: 20px auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); /* Modern, subtle shadow */
    background: linear-gradient(135deg, #f3f4f6, #ffffff); /* Subtle gradient */
  }

  /* Maintain responsive aspect ratio */
  .resume-preview::before {
    content: "";
    display: block;
    padding-top: 75%; /* Aspect ratio 4:3 */
  }

  .iframe-resume {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 10px;
  }

  .btn {
    padding: 12px 24px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 10px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .btn:hover {
    background-color: #0056b3;
    transform: translateY(-3px); /* Slight hover effect */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Add hover shadow */
  }

  @media (max-width: 480px) {
    .resume-preview {
      height: 75vh; /* Occupy 75% of viewport height */
      max-height: 80vh; /* Ensure it doesn't exceed available space */
    }

    .resume-preview::before {
      content: none; /* Remove fixed aspect ratio */
    }

    .iframe-resume {
      height: 100%; /* Allow iframe to stretch */
      width: 100%;
      object-fit: contain;
    }

    .btn {
      font-size: 14px; /* Smaller text for compact buttons */
      padding: 10px 18px;
    }
  }
</style>
