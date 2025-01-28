import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import "mdb-vue-ui-kit/css/mdb.min.css"
import AOS from "aos"
import "aos/dist/aos.css"

AOS.init()

createApp(App).use(router).mount("#app")
