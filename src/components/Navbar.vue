<template>
  <div class="navbar">
    <div class="navbar-end">
      <div v-if="usersStore.currentUserId" class="buttons">
        <button class="button" @click="logout()">Log Out</button>
        <RouterLink to="/post/new" class="button">New Post</RouterLink>
      </div>

      <div v-else class="buttons">
        <button class="button" @click="modal.showModal('signUp')">
          Sign Up
        </button>
        <button class="button" @click="modal.showModal('signIn')">
          Sign In
        </button>
      </div>
    </div>
  </div>

  <Teleport to="#modal">
    <component :is="modal.component.value" />
  </Teleport>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useModal } from "../composable/modal";
import { useUsers } from "../stores/users";
const router = useRouter();

const modal = useModal();
const usersStore = useUsers();

async function logout() {
  await usersStore.logout();
  router.push({ path: "/" });
}
</script>
