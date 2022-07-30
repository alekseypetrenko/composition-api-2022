<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <div class="label">{{ title }}</div>
        <input type="text" class="input" v-model="title" />
      </div>
    </div>
  </div>

  <div class="columns">
    <div class="column">
      <div contenteditable ref="contentEditable" @input="handleInput" />
    </div>
    <div class="column" v-html="html" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import { TimelinePost } from "../posts";
import { marked } from "marked";

const props = defineProps<{
  post: TimelinePost;
}>();

const title = ref(props.post.title);
const content = ref(props.post.markdown);
const contentEditable = ref<HTMLDivElement>();
const html = ref();

watch(
  content,
  (newContent) => {
    marked.parse(newContent, (err, parseResult) => {
      html.value = parseResult;
    });
  },
  {
    immediate: true,
  },
);

function handleInput() {
  if (!contentEditable.value) {
    throw Error("ContentEditable DOM was not found");
  }
  content.value = contentEditable.value.innerText;
}

onMounted(() => {
  if (!contentEditable.value) {
    throw Error("ContentEditable DOM was not found");
  }
  contentEditable.value.innerText = content.value;
});
</script>
