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
  const i = document.createElement('i');
  i.className = icon;
  return i;
};
const createToolbarItems = () => {
  const toolBarItems = [];

  const headingToolBarItem = {
    name: 'headingButton',
    el: getToolBarItemElement('fa-solid fa-heading'),
    state: 'heading',
  };
  const boldToolBarItem = {
    name: 'boldButton',
    el: getToolBarItemElement('fa-solid fa-bold'),
    state: 'strong',
  };
  const italicToolBarItem = {
    name: 'italicButton',
    el: getToolBarItemElement('fa-solid fa-italic'),
    state: 'emph',
  };
  const strikeToolBarItem = {
    name: 'strikeButton',
    el: getToolBarItemElement('fa-solid fa-strikethrough'),
    state: 'strike',
  };
  const lineToolBarItem = {
    name: 'lineButton',
    el: getToolBarItemElement('fa-solid fa-minus'),
    state: 'thematicBreak',
  };
  const codeBlockToolBarItem = {
    name: 'codeBlockButton',
    el: getToolBarItemElement('fa-solid fa-bars-staggered'),
    state: 'codeBlock',
  };
  const tableToolBarItem = {
    name: 'tableButton',
    el: getToolBarItemElement('fa-solid fa-table'),
    state: 'table',
  };
  const orderedListToolBarItem = {
    name: 'orderedListButton',
    el: getToolBarItemElement('fa-solid fa-list-ol'),
    state: 'orderedList',
  };
  const listToolBarItem = {
    name: 'listButton',
    el: getToolBarItemElement('fa-solid fa-list'),
    state: 'bulletList',
  };

  const quoteToolBarItem = {
    name: 'quoteButton',
    el: getToolBarItemElement('fa-solid fa-quote-left'),
    state: 'blockQuote',
  };
  const linkToolBarItem = {
    name: 'linkButton',
    el: getToolBarItemElement('fa-solid fa-link'),
    state: 'heading',
  };
  const codeToolBarItem = {
    name: 'codeButton',
    el: getToolBarItemElement('fa-solid fa-code'),
    state: 'code',
  };
  toolBarItems.push([headingToolBarItem, boldToolBarItem, italicToolBarItem, strikeToolBarItem]);
  toolBarItems.push([lineToolBarItem, quoteToolBarItem]);
  toolBarItems.push([listToolBarItem, orderedListToolBarItem]);
  toolBarItems.push([tableToolBarItem, linkToolBarItem]);
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

.toastui-editor-toolbar {
  height: 30px;

  .toastui-editor-defaultUI-toolbar {
    height: 30px;
    padding: 0 10px;
    background-color: var(--background);

    .toastui-editor-toolbar-item-wrapper {
      margin: 0px 5px;
      height: 30px;

      i {
        font-size: 1.25em;
        display: inline-block;
        color: var(--foreground);
        cursor: pointer;
      }
    }
    .toastui-editor-toolbar-divider {
      margin: 6px 12px;
    }
  }
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
</style>

<style lang="less" scope>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css";
</style>
