<template>
  Edit Post
  <post-writer :post="post" />
</template>

<script lang="ts" setup>
import PostWriter from "../components/PostWriter.vue";
import { usePosts } from "../stores/posts";
import { useRoute } from "vue-router";

const postStore = usePosts();
const route = useRoute();
const id = route.params.id as string;
const post = postStore.all.get(id);

if (!post) {
  throw Error(`Post with id ${id} was not find`);
}
</script>
