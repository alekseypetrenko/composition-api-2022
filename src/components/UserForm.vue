<template>
  <form class="form" @submit.prevent="handleSubmit">
    <form-input
      type="text"
      name="Username"
      v-model="username"
      :status="usernameStatus"
    />
    <form-input
      type="password"
      name="Password"
      v-model="password"
      :status="passwordStatus"
    />
    <button class="button" :disabled="isInvalid">Submit</button>
    <div v-if="error" class="is-danger help">{{ error }}</div>
  </form>
</template>

<script lang="ts" setup>
import FormInput from "./FormInput.vue";
import { computed, ref } from "vue";
import { validate, required, length } from "../validations";
import { NewUser } from "../users";

const emit = defineEmits<{
  (event: "submit", payload: NewUser): void;
}>();

defineProps<{
  error?: string;
}>();

const username = ref("");
const password = ref("");

const usernameStatus = computed(() => {
  return validate(username.value, [required, length({ min: 5, max: 10 })]);
});

const passwordStatus = computed(() => {
  return validate(password.value, [required, length({ min: 10, max: 40 })]);
});

const isInvalid = computed(() => {
  return !usernameStatus.value.valid || !passwordStatus.value.valid;
});

async function handleSubmit() {
  if (isInvalid.value) {
    return;
  }
  const newUser: NewUser = {
    username: username.value,
    password: password.value,
  };

  try {
    emit("submit", newUser);
  } catch (error) {}
}
</script>

<style scoped>
.form {
  background: white;
  padding: 30px;
  margin-top: 50px;
}
</style>
