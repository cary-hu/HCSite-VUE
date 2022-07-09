<script setup lang="ts">
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const props = defineProps({
  modelValue: {
    type: String,
    required: false,
    default: '',
  },
});
const emit = defineEmits(['update:modelValue']);
const editor = ref();
onMounted(() => {
  const e = new Editor({
    el: editor.value,
    height: '500px',
    initialEditType: 'markdown',
    previewStyle: 'vertical',
    events: {
      change: () => emit('update:modelValue', e.getMarkdown()),
    },
  });
});
</script>

<template>
  <div>
    <div ref="editor" />
  </div>
</template>

<style lang="less">
.toastui-editor-defaultUI * {
  transition: background-color 0.3s ease-in-out,
    color .3s ease-in-out;
}

.ProseMirror {
  color: var(--foreground);

  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  pre,
  table,
  thead,
  tbody,
  tfoot,
  tr,
  th,
  td,
  blockquote,
  code,
  figure,
  figcaption,
  strong,
  em,
  a,
  img {
    color: var(--foreground);
  }
}

.toastui-editor-defaultUI-toolbar {
  background-color: var(--background);
}

.toastui-editor-mode-switch {
  background-color: var(--background);

  .tab-item {
    background-color: var(--background);
    color: var(--foreground);

    &.active {
      color: var(--foreground-light);
      background-color: var(--background);
    }
  }
}

.toastui-editor-contents {
  transition: color 0.3s ease-in-out;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  pre,
  table,
  thead,
  tbody,
  tfoot,
  tr,
  th,
  td,
  blockquote,
  code,
  figure,
  figcaption,
  strong,
  em,
  a,
  img {
    color: var(--foreground);
  }
}
</style>
