import {defineConfig} from 'vite';
import Vue from '@vitejs/plugin-vue';
import Component from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import UnoCSS from 'unocss/vite';
import {presetAttributify, presetIcons, presetUno} from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
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
  ],
});
