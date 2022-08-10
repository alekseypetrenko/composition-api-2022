<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column is-two-thirds">
      <RouterLink
        v-if="canEdit"
        :to="`/posts/${id}/edit`"
        class="is-link button is-rounded"
        >Edit Post</RouterLink
      >
      <h1>{{ post.title }}</h1>
      <div v-html="post.html"></div>
    </div>
    <div class="column"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { usePosts } from "../stores/posts";
import { useUsers } from "../stores/users";

const postStore = usePosts();
const userStore = useUsers();

const route = useRoute();
const id = route.params.id as string;

const post = postStore.all.get(id);

if (!post) {
  throw Error(`Post with id ${id} was not find`);
}

const canEdit = computed(() => {
  if (!userStore.currentUserId) {
    return false;
  }

  if (userStore.currentUserId !== post.authorId) {
    return false;
  }

  return true;
});
</script>
