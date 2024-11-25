import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import "mdb-vue-ui-kit/css/mdb.min.css"

createApp(App).use(router).mount("#app")
