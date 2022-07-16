<script setup lang="ts">
import { ref } from "vue";

const periods = ["Today", "This Week", "This Month"];
const currentPeriod = ref("Today");

function selectPeriod(period: string) {
  currentPeriod.value = period;
}
</script>

<template>
  <nav class="is-primary panel">
    <span class="panel-tabs">
      <a
        v-for="period in periods"
        :key="period"
        :class="{ 'is-active': period === currentPeriod }"
        @click="selectPeriod(period)"
        >{{ period }}</a
      >
    </span>
  </nav>
</template>
