<script setup lang="ts">
import '@ztree/ztree_v3/js/jquery.ztree.all';

import * as jquery from 'jquery';
const props = defineProps({
  setting: {
    type: Object,
    require: false,
    default() {
      return {};
    },
  },
  nodes: {
    type: Array,
    require: true,
    default() {
      return [];
    },
  },
});
const $ = jquery;

const zTreeId = `ztree_${Math.floor(Math.random() * 1e10)}`;
const zTreeObj = ref();
const list = ref([]);
watch(() => props.nodes, async (nodes) => {
  list.value = nodes;
  // update tree
  if (zTreeObj.value) {
    zTreeObj.value.destroy();
  }
  await nextTick();
  zTreeObj.value = $.fn.zTree.init(
    $(`#${zTreeId}`),
    props.setting,
    list.value,
  );
}, {
  immediate: true,
  deep: true,
});
</script>

<template>
  <div :id="zTreeId" class="ztree" />
</template>

<style lang="less">
.ztree {
  color: var(--foreground);
  li {
    padding: 0;
    margin: 0;
    list-style: none;
    line-height: 32px;
    text-align: left;
    white-space: nowrap;
    outline: 0;
    width: 100%;
    font-size: 75%;

    ul {
      margin: 0;
    }

    a {
      display: inline-block;
      width: 100%;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      color: inherit;

      &:hover {
        background-color: #f5f5f5;
        color: #000;
      }
    }

    a.curSelectedNode {
      background-color: #bae7ff !important;
      position: relative;
      color: #000;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        width: 4px;
        background-color: #1890ff !important;
      }
    }
  }
@APaddingBase: 8px;
  li.level0 {
    &>a {
      cursor: default;
      padding-left: @APaddingBase;

      &:hover {
        background-color: unset;
        color: inherit;
      }
    }
  }

  li.level1 {
    a {
      padding-left: @APaddingBase * 2;
    }
  }

  li.level2 {
    a {
      padding-left:  @APaddingBase * 3;
    }
  }

  li.level3 {
    a {
      padding-left:  @APaddingBase * 4;
    }
  }

  li.level4 {
    a {
      padding-left:  @APaddingBase * 5;
    }
  }

  li.level5 {
    a {
      padding-left:  @APaddingBase * 6;
    }
  }

  li.level6 {
    a {
      padding-left:  @APaddingBase * 7;
    }
  }
}
</style>
