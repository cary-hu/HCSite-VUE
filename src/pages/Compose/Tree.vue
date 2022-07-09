<script setup lang="ts">
import ZTree from './ZTree.vue';
const simpleData = [
  {id: 1, pid: 0, name: '随意勾选 1', open: true},
  {id: 11, pid: 1, name: '随意勾选 1-1', open: true},
  {id: 111, pid: 11, name: '随意勾选 1-1-1'},
  {id: 112, pid: 11, name: '随意勾选 1-1-2'},
  {id: 12, pid: 1, name: '随意勾选 1-2', open: true},
  {id: 121, pid: 12, name: '随意勾选 1-2-1'},
  {id: 122, pid: 12, name: '随意勾选 1-2-2'},
  {id: 2, pid: 0, name: '随意勾选 2', open: true},
  {id: 21, pid: 2, name: '随意勾选 2-1'},
  {id: 22, pid: 2, name: '随意勾选 2-2', open: true},
  {id: 221, pid: 22, name: '随意勾选 2-2-1'},
  {id: 222, pid: 22, name: '随意勾选 2-2-2'},
  {id: 23, pid: 2, name: '随意勾选 2-3'},
];
const setting = {
  check: {
    enable: true,
  },
  data: {
    simpleData: {
      enable: true,
      pIdKey: 'pid',
    },
  },
  view: {
    showIcon: false,
    dblClickExpand: false,
    selectedMulti: false,
    showTitle: false,
  },
  callback: {
    beforeDblClick: (treeId, treeNode) => {
      return false;
    },
    beforeClick: (treeId, treeNode) => {
      return treeNode.pid !== null;
    },
    onRightClick: (event, treeId, treeNode) => {
    },
  },
};
</script>

<template>
  <ZTree :nodes="simpleData" :setting="setting" />
</template>
