<script lang="ts" setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="secttion">
    <div class="container">
      <navbar />
      <router-view />
    </div>
  </div>
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>
