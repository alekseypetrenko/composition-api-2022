<script setup lang="ts">
import Timeline from "../components/Timeline.vue";
</script>

<template>
  <suspense>
    <template #default>
      <timeline />
    </template>

    <template #fallback>
      <progress class="progress is-primary is-small" />
    </template>
  </suspense>
</template>
