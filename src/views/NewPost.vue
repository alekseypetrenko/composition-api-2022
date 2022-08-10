<template>
  <post-writer :post="post" @submit="handleSubmit" />
</template>

<script lang="ts" setup>
import PostWriter from "../components/PostWriter.vue";
import { Post, TimelinePost } from "../posts";
import { DateTime } from "luxon";
import { useUsers } from "../stores/users";
import { useRouter } from "vue-router";
import { usePosts } from "../stores/posts";

const userStore = useUsers();
const router = useRouter();
const postsStore = usePosts();

if (!userStore.currentUserId) {
  throw Error("User was not find");
}

const post: TimelinePost = {
  id: "-1",
  authorId: userStore.currentUserId,
  title: "Dummy title",
  created: DateTime.now(),
  markdown: "## Title",
  html: "<h2>Test111</h2>",
};

async function handleSubmit(newPost: Post) {
  await postsStore.createPost(newPost);
  router.push("/");
}
</script>
