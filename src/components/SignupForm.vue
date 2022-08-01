<template>
  <form class="form">
    <form-input name="Username" v-model="username" :status="usernameStatus" />
    <form-input name="Password" v-model="password" :status="passwordStatus" />
  </form>
</template>

<script lang="ts" setup>
import FormInput from "./FormInput.vue";
import { computed, ref } from "vue";
import { validate, required, length } from "../validations";

const username = ref("");
const password = ref("");

const usernameStatus = computed(() => {
  return validate(username.value, [required, length({ min: 5, max: 10 })]);
});

const passwordStatus = computed(() => {
  return validate(password.value, [required, length({ min: 10, max: 40 })]);
});
</script>

<style scoped>
.form {
  background: white;
  padding: 30px;
  margin-top: 50px;
}
</style>
