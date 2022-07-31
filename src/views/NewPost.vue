<script lang="ts" setup>
import PostWriter from "../components/PostWriter.vue";
import { TimelinePost } from "../posts";
import { DateTime } from "luxon";

const post: TimelinePost = {
  id: "-1",
  title: "Dummy title",
  created: DateTime.now(),
  markdown: "## Title",
  html: "<h2>Test111</h2>",
};
</script>

<template>
  <post-writer :post="post" />
</template>
