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

  <div class="columns">
    <div class="column">
      <button class="button is-primary is-pulled-right" @click="handleClick">
        Save Post
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import { Post, TimelinePost } from "../posts";
import { marked } from "marked";
import highlightjs from "highlight.js";
import debounce from "lodash/debounce";
import { usePosts } from "../stores/posts";
import { useRouter } from "vue-router";
import { useUsers } from "../stores/users";

const userStore = useUsers();

const props = defineProps<{
  post: TimelinePost | Post;
}>();

const emit = defineEmits<{
  (event: "submit", post: Post): void;
}>();

const title = ref(props.post.title);
const content = ref(props.post.markdown);
const html = ref();
const contentEditable = ref<HTMLDivElement>();

const posts = usePosts();
const router = useRouter();

function parseHtml(markdown: string) {
  marked.parse(
    markdown,
    {
      gfm: true,
      breaks: true,
      highlight: (code) => {
        return highlightjs.highlightAuto(code).value;
      },
    },
    (err, parseResult) => {
      html.value = parseResult;
    },
  );
}

async function handleClick() {
  if (!userStore.currentUserId) {
    throw Error("USer was not find");
  }

  const newPost: Post = {
    ...props.post,
    created:
      typeof props.post.created === "string"
        ? props.post.created
        : props.post.created.toISO(),
    title: title.value,
    markdown: content.value,
    html: html.value,
    authorId: userStore.currentUserId,
  };

  emit("submit", newPost);
}

watch(
  content,
  debounce((newContent) => {
    parseHtml(newContent);
  }, 200),
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
