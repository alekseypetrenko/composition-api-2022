<script lang="ts" setup>
import PostWriter from "../components/PostWriter.vue";
import { TimelinePost } from "../posts";
import { DateTime } from "luxon";

const post: TimelinePost = {
  id: "-1",
  title: "Dummy title",
  created: DateTime.now(),
};
</script>

<template>
  <post-writer :post="post" />
</template>
