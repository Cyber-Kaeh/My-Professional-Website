import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
// ESM build only. Importing bootstrap.bundle.min.js as well loaded a second
// copy of Bootstrap and registered its data-API twice, so every data-bs-*
// element got two competing instances.
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "mdb-vue-ui-kit/css/mdb.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

createApp(App).use(router).mount("#app");

// Section highlighting on /resume is handled by ResumeView itself. It used to
// be set up here on DOMContentLoaded, which ran before the router had mounted
// any view, so the element did not exist yet on any route other than a hard
// load of /resume.
