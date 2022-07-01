import {defineConfig} from 'vite';
import Vue from '@vitejs/plugin-vue';
import Component from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import UnoCSS from 'unocss/vite';
import {presetAttributify, presetIcons, presetUno} from 'unocss';
import ViteComponents, {kebabCase} from 'vite-plugin-components';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    Vue(),
    Component(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        'vue',
        'vue/macros',
        '@vueuse/core',
      ],
      vueTemplate: true,
    }),
    UnoCSS({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
      ],
    }),
    ViteComponents({
      customComponentResolvers: [
        (name) => {
          if (name.match(/^A[A-Z]/)) { // Ant Design Vue
            const importName = name.slice(1);
            const dirName = kebabCase(importName);
            return {
              importName,
              path: 'ant-design-vue/es',
              sideEffects: `ant-design-vue/es/${dirName}/style`,
            };
          }
        },
      ],
    }),
  ],
});
