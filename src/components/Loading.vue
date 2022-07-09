<script setup lang="ts">
defineProps<{
  loading: boolean
}>();
</script>

<template>
  <div class="loading-overlay" :class="loading ? 'show' : ''">
    <div ref="loadingContainer" class="loading-container cradle">
      <div class="node" />
      <div class="node" />
      <div class="node" />
      <div class="node" />
      <div class="node" />
    </div>
    <div class="loading-content" select-none>
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    --cradle--default: #aaa;
    --cradle--highlight: #fff;
    --cradle--node-size: 4px;
    --cradle--node-gap: 24px;
    --cradle--fly-out: 1000%;
    --cradle--nudge: 100%;
    --cradle--animation-duration: 1000ms;
    --cradle--end-opacity: 0;
    background-color: #222;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    pointer-events: none;
    &.show {
        opacity: 1;
        pointer-events: all;
    }
}

.loading-container {
    display: grid;
    align-items: center;
    justify-content: center;
    position: absolute;
}

.cradle {
    display: flex;
    gap: var(--cradle--node-gap);
}

.node {
    background-color: var(--cradle--default);
    height: var(--cradle--node-size);
    width: var(--cradle--node-size);
    border-radius: var(--cradle--node-size);

    animation-duration: calc(var(--cradle--animation-duration) / 2);
    animation-name: pulse;
    animation-iteration-count: infinite;
    transform-origin: center center;

    &:not(:first-child):not(:last-child) {
        animation-duration: var(--cradle--animation-duration),
            calc(var(--cradle--animation-duration) / 2);
        animation-name: nudge, pulse;
        animation-iteration-count: infinite, infinite;
    }

    &:first-child,
    &:last-child {
        animation-duration: var(--cradle--animation-duration),
            calc(var(--cradle--animation-duration) / 2);
        animation-name: swing, pulse;
        animation-iteration-count: infinite, infinite;
    }

    &:first-child {
        --fly-out: calc(var(--cradle--fly-out) * -1);
        --nudge: calc((var(--cradle--nudge) * -1));
    }

    &:last-child {
        --fly-out: var(--cradle--fly-out);
        --nudge: calc(var(--cradle--nudge) * 2);
        animation-delay: calc(var(--cradle--animation-duration) / 2);
    }
}

@keyframes nudge {
    0% {
        transform: translateX(calc(var(--cradle--nudge) - 50%));
    }

    50% {
        transform: translateX(calc(var(--cradle-nudge) * -1 - 50%));
    }

    100% {
        transform: translateX(calc(var(--cradle--nudge) - 50%));
    }
}

@keyframes pulse {
    0% {
        background-color: var(--cradle--highlight);
    }

    100% {
        background-color: var(--cradle--default);
    }
}

@keyframes swing {
    0% {
        transform: translateX(var(--nudge));
        animation-timing-function: cubic-bezier(0.33, 1, 0.68, 1);
        opacity: 1;
    }

    25% {
        transform: translateX(var(--fly-out));
        animation-timing-function: cubic-bezier(0.32, 0, 0.67, 0);
        opacity: var(--cradle--end-opacity);
    }

    50% {
        transform: translateX(var(--nudge));
        animation-timing-function: ease;
        opacity: 1;
    }

    100% {
        transform: translateX(0);
    }
}

.loading-content {
    color: #fff;
    margin-top: 50px;
}
</style>
