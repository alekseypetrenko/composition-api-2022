<template>
  <div class="navbar">
    <div class="navbar-end">
      <div class="buttons">
        <button class="button" @click="modal.showModal()">Sign Up</button>
        <RouterLink to="/post/new" class="button">New Post</RouterLink>
      </div>
    </div>
  </div>

  <Teleport to="#modal"> test teleport</Teleport>
</template>

<script lang="ts" setup>
import { useModal } from "../composable/modal";

const modal = useModal();
</script>
