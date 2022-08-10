<template>
  <UserForm @submit="handleSignup" />
</template>

<script setup lang="ts">
import { useModal } from "../composable/modal";
import { useUsers } from "../stores/users";
import { NewUser } from "../users";
import UserForm from "./UserForm.vue";

const usersStore = useUsers();
const modal = useModal();

async function handleSignup(newUser: NewUser) {
  await usersStore.createUser(newUser);
  modal.hideModal();
}
</script>
