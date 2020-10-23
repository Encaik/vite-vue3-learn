import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import axios from "axios";
import "./mock/mock";

let app = createApp(App);
app.config.globalProperties.$axios = axios;
app.mount("#app");
