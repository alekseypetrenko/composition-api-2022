<template>
  <div class="navbar">
    <div class="navbar-end">
      <div v-if="usersStore.currentUserId" class="buttons">
        <button class="button" @click="usersStore.logout()">Log Out</button>
        <RouterLink to="/post/new" class="button">New Post</RouterLink>
      </div>

      <div v-else class="buttons">
        <button class="button" @click="modal.showModal()">Sign Up</button>
        <RouterLink to="/post/new" class="button">Sign In</RouterLink>
      </div>
    </div>
  </div>

  <Teleport to="#modal">
    <SignupForm />
  </Teleport>
</template>

<script lang="ts" setup>
import { useModal } from "../composable/modal";
import { useUsers } from "../stores/users";
import SignupForm from "./SignupForm.vue";

const modal = useModal();
const usersStore = useUsers();
</script>
