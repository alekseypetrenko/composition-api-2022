<script setup lang="ts">
import Timeline from "./components/Timeline.vue";
</script>

<template>
  <div class="secttion">
    <div class="container">
      <suspense>
        <template #default>
          <timeline />
        </template>

        <template #fallback>
          <progress class="progress is-primary is-small" />
        </template>
      </suspense>
    </div>
  </div>
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
