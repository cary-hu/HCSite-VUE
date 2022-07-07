<script setup lang="ts">
import Tree from './Tree.vue';
import Editor from './Editor.vue';
</script>

<template>
  <div class="compose-wrapper">
    <div class="tree-container">
      <Tree />
    </div>
    <div class="editor-container">
      <Editor />
    </div>
  </div>
</template>

<style lang="less" scope>
.compose-wrapper {
    display: flex;
    flex-direction: row;
    height: 100%;

    .tree-container {
        flex-shrink: 0;
        width: 200px;
        height: 100%;
        overflow-y: auto;
    }

    .editor-container {
        flex-grow: 1;
        height: 100%;
        padding: 10px;
    }
}
</style>
