import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./router";
import "./style.css";
import App from "./App.vue";
import { useUsers } from "./stores/users";
import { usePosts } from "./stores/posts";

const app = createApp(App);

app.use(createPinia());

const usersStore = useUsers();
const postStore = usePosts();

Promise.all([usersStore.authenticate(), postStore.fetchPosts()]).then(() => {
  app.use(router);
  app.mount("#app");
});
