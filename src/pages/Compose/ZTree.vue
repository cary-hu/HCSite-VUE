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
// eslint-disable-next-line import/first

const zTreeId = `ztree_${Math.floor(Math.random() * 1e10)}`;
const zTreeObj = ref();
const list = ref([]);
const ztreeSetting = {
  view: {
    showIcon: false, // default to hide icon
  },
  callback: {
    //   onAsyncError: (...arg) => {
    //     this.$emit('onAsyncError', ...arg);
    //   },
    //   onAsyncSuccess: (...arg) => {
    //     this.$emit('onAsyncSuccess', ...arg);
    //   },
    //   onCheck: (...arg) => {
    //     this.$emit('onCheck', ...arg);
    //   },
    //   onClick: (...arg) => {
    //     this.$emit('onClick', ...arg);
    //   },
    //   onCollapse: (...arg) => {
    //     this.$emit('onCollapse', ...arg);
    //   },
    //   onDblClick: (...arg) => {
    //     this.$emit('onDblClick', ...arg);
    //   },
    //   onDrag: (...arg) => {
    //     this.$emit('onDrag', ...arg);
    //   },
    //   onDragMove: (...arg) => {
    //     this.$emit('onDragMove', ...arg);
    //   },
    //   onDrop: (...arg) => {
    //     this.$emit('onDrop', ...arg);
    //   },
    //   onExpand: (...arg) => {
    //     this.$emit('onExpand', ...arg);
    //   },
    //   onMouseDown: (...arg) => {
    //     this.$emit('onMouseDown', ...arg);
    //   },
    //   onMouseUp: (...arg) => {
    //     this.$emit('onMouseUp', ...arg);
    //   },
    //   onRemove: (...arg) => {
    //     this.$emit('onRemove', ...arg);
    //   },
    //   onRename: (...arg) => {
    //     this.$emit('onRename', ...arg);
    //   },
    //   onRightClick: (...arg) => {
    //     this.$emit('onRightClick', ...arg);
    //   },
  },
};
watch(() => props.nodes, async (nodes) => {
  list.value = nodes;
  // update tree
  if (zTreeObj.value) {
    zTreeObj.value.destroy();
  }
  await nextTick();
  zTreeObj.value = $.fn.zTree.init(
    $(`#${zTreeId}`),
    Object.assign({}, ztreeSetting, props.setting),
    list.value,
  );
//   this.$emit('onCreated', zTreeObj.value);
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
    * {
        padding: 0;
        margin: 0;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
    padding: 0;
    margin: 0;
    color: #333;
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
            color: #000;

            &:hover {
                background-color: #f5f5f5;
            }
        }
        a.curSelectedNode {
            background-color: #bae7ff !important;
            position: relative;
            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 4px;
                background-color: #1890ff !important;
            }
        }
    }
    li.level0 {
        font-size: 125%;
        line-height: 48px;
        text-align: center;
        & > a {
            cursor: default;
            &:hover {
                background-color: unset;
            }
        }
    }
    li.level1 {
        a {
            padding-left: 16px;
        }
    }
    li.level2 {
        a {
            padding-left: 28px;
        }
    }
    li.level3 {
        a {
            padding-left: 24px;
        }
    }
    li.level4 {
        a {
            padding-left: 28px;
        }
    }
    li.level5 {
        a {
            padding-left: 32px;
        }
    }
    li.level6 {
        a {
            padding-left: 36px;
        }
    }
}
</style>
