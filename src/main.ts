import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createMemoryHistory, createRouter } from "vue-router";

import DrawingsView from "./components/DrawingsView.vue";
import AboutView from "./components/AboutView.vue";

const routes = [
  { path: "/", component: AboutView },
  { path: "/drawings", component: DrawingsView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
