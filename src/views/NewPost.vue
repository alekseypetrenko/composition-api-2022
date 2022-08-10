<script lang="ts" setup>
import PostWriter from "../components/PostWriter.vue";
import { TimelinePost } from "../posts";
import { DateTime } from "luxon";
import { useUsers } from "../stores/users";

const userStore = useUsers();

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
</script>

<template>
  <post-writer :post="post" />
</template>
