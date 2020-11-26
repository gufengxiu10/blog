import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

createApp(App)
  .use(store)
  .use(Antd)
  .use(router)
  .mount("#app");
