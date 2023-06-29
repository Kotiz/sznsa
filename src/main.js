import { createApp } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";
import router from "./routes";
import "bootstrap";
import "./index.css";
import App from "./App.vue";
import vueAwesomeSidebar from 'vue-awesome-sidebar';
import 'vue-awesome-sidebar/dist/vue-awesome-sidebar.css';
import 'vue-material-design-icons/styles.css';
// import VueFriendlyIframe from 'vue-friendly-iframe';
// import VueSidebarMenu from 'vue-sidebar-menu'
// import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

let app = createApp(App);
app.use(router);
app.use(VueEasyLightbox);
app.use(vueAwesomeSidebar);
// app.use(VueFriendlyIframe);
// app.use(VueSidebarMenu);
app.mount("#app");
