<template>
  <div class="projects-container">
    <h1>Projects</h1>

    <div class="container-sm">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="project in projects" :key="project.id">
          <div class="card text-start h-100">
            <img
              :src="project.image"
              class="card-img-top"
              :alt="project.title"
            />
            <div class="card-body">
              <h5 class="card-header">{{ project.title }}</h5>
              <p class="card-text">{{ project.shortDescription }}</p>
              <button class="btn btn-primary" @click="openModal(project)">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal
      v-if="selectedProject"
      :show="showModal"
      :title="selectedProject.title"
      :description="selectedProject.description"
      @close="closeModal"
    />
  </div>
</template>

<script>
  import ProjectModal from "@/components/ProjectModal.vue"
  import { marked } from "marked"
  import renderer from "@/utils/customRenderer"
  import chuckAppDesc from "../assets/descriptions/chuckjokes.md"
  import websiteDesc from "../assets/descriptions/website.md"
  import nextcloudDesc from "../assets/descriptions/nextcloud.md"

  export default {
    components: {
      Modal: ProjectModal,
    },
    data() {
      return {
        showModal: false,
        selectedProject: null,
        projects: [
          {
            id: 1,
            title: "This website!",
            shortDescription:
              "My professional portfolio website I built with Vue.js and Bootstrap 5.",
            description: marked(websiteDesc, { renderer }),
            image: require("../assets/home_screenshot.png"),
          },
          {
            id: 2,
            title: "Nextcloud",
            shortDescription: "A self-hosted cloud storage solution.",
            description: marked(nextcloudDesc, { renderer }),
            image: require("../assets/nextcloud-screenshot.png"),
          },
          {
            id: 3,
            title: "Chuck Jokes",
            shortDescription:
              "A simple web app that displays endless Chuck Norris jokes!",
            description: marked(chuckAppDesc, { renderer }),
            image: require("../assets/chuckapp_screenshot.png"),
          },
          // Add more projects as needed
        ],
      }
    },
    methods: {
      openModal(project) {
        this.selectedProject = project
        this.showModal = true
      },
      closeModal() {
        this.selectedProject = null
        this.showModal = false
      },
    },
  }
</script>

<style scoped>
  .projects-container {
    padding: 20px;
  }
  .modal {
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
  }
</style>
