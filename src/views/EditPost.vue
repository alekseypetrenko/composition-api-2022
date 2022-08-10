<template>
  Edit Post
  <post-writer :post="post" @submit="handleSubmit" />
</template>

<script lang="ts" setup>
import PostWriter from "../components/PostWriter.vue";
import { usePosts } from "../stores/posts";
import { useRoute, useRouter } from "vue-router";
import { Post } from "../posts";

const router = useRouter();
const postsStore = usePosts();

const postStore = usePosts();
const route = useRoute();
const id = route.params.id as string;
const post = postStore.all.get(id);

if (!post) {
  throw Error(`Post with id ${id} was not find`);
}

async function handleSubmit(newPost: Post) {
  await postsStore.updatePost(newPost);
  router.push("/");
}
</script>
