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
const getToolBarItemElement = (icon) => {
  const button = document.createElement('i');
  button.className = icon;
  return button;
};
const createToolbarItems = () => {
  const toolBarItems = [];

  const headingToolBarItem = {
    name: 'headingButton',
    tooltip: 'Heading',
    el: getToolBarItemElement('fa-solid fa-heading'),
    state: 'heading',
  };
  const boldToolBarItem = {
    name: 'headingButton',
    tooltip: 'Heading',
    el: getToolBarItemElement('fa-solid fa-bold'),
    state: 'heading',
  };
  const italicToolBarItem = {
    name: 'headingButton',
    tooltip: 'Heading',
    el: getToolBarItemElement('fa-solid fa-italic'),
    state: 'heading',
  };
  const strikeToolBarItem = {
    name: 'headingButton',
    tooltip: 'Heading',
    el: getToolBarItemElement('fa-solid fa-strikethrough'),
    state: 'heading',
  };
  const hyphenToolBarItem = {
    name: 'headingButton',
    tooltip: 'Heading',
    el: getToolBarItemElement('fa-solid fa-minus'),
    state: 'heading',
  };
  const codeBlockToolBarItem = {
    name: 'headingButton',
    tooltip: 'Heading',
    el: getToolBarItemElement('fa-solid fa-brackets-curly'),
    state: 'heading',
  };
  const imageToolBarItem = {
    name: 'headingButton',
    tooltip: 'Heading',
    el: getToolBarItemElement('fa-solid fa-image'),
    state: 'heading',
  };
  const tableToolBarItem = {
    name: 'headingButton',
    tooltip: 'Heading',
    el: getToolBarItemElement('fa-solid fa-table'),
    state: 'heading',
  };
  const orderedListToolBarItem = {
    name: 'headingButton',
    tooltip: 'Heading',
    el: getToolBarItemElement('fa-solid fa-list-ol'),
    state: 'heading',
  };
  const listToolBarItem = {
    name: 'headingButton',
    tooltip: 'Heading',
    el: getToolBarItemElement('fa-solid fa-list'),
    state: 'heading',
  };

  const quoteToolBarItem = {
    name: 'headingButton',
    tooltip: 'Heading',
    el: getToolBarItemElement('fa-solid fa-quote-left'),
    state: 'heading',
  };
  const linkToolBarItem = {
    name: 'headingButton',
    tooltip: 'Heading',
    el: getToolBarItemElement('fa-solid fa-link'),
    state: 'heading',
  };
  const codeToolBarItem = {
    name: 'headingButton',
    tooltip: 'Heading',
    el: getToolBarItemElement('fa-solid fa-code'),
    state: 'heading',
  };
  toolBarItems.push([headingToolBarItem, boldToolBarItem, italicToolBarItem, strikeToolBarItem]);
  toolBarItems.push([hyphenToolBarItem, quoteToolBarItem]);
  toolBarItems.push([listToolBarItem, orderedListToolBarItem]);
  toolBarItems.push([tableToolBarItem, imageToolBarItem, linkToolBarItem]);
  toolBarItems.push([codeToolBarItem, codeBlockToolBarItem]);
  return toolBarItems;
};
onMounted(() => {
  const e = new Editor({
    el: editor.value,
    height: '100%',
    initialEditType: 'markdown',
    previewStyle: 'vertical',
    events: {
      change: () => emit('update:modelValue', e.getMarkdown()),
    },
    toolbarItems: createToolbarItems(),
  });
});
</script>

<template>
  <div ref="editor" />
</template>

<style lang="less">
.toastui-editor-defaultUI * {
  transition: background-color 0.3s ease-in-out,
    color .3s ease-in-out;
}

.ProseMirror {
  color: var(--foreground);
  height: 100%;

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
      cursor: default;
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
.toastui-editor-toolbar-item-wrapper {
  i {
    color: var(--foreground);
  }
}
</style>

<style lang="less" scope>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css";
</style>
