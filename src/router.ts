import { createRouter, createWebHistory } from "vue-router";
import { useUsers } from "./stores/users";
import Home from "./views/Home.vue";
import NewPost from "./views/NewPost.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/post/new",
      component: NewPost,
      beforeEnter: () => {
        const userStore = useUsers();
        if (!userStore.currentUserId) {
          return {
            path: "/",
          };
        }
      },
    },
  ],
});
