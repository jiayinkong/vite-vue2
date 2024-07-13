import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import vue from 'rollup-plugin-vue';

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const pkg = require('./package.json');

export default defineConfig({
  plugins: [
    typescript(),
    vue({
      css: true,
    })
  ],
  input: './src/main.ts',
  output: [
    {
      file: 'dist/myLib.common.js',
      format: 'cjs',
      name: 'myLib',
      sourcemap: true
    },
    {
      file: 'dist/myLib.umd.js',
      format: 'umd',
      name: 'myLib',
      sourcemap: true
    },
    {
      file: 'dist/myLib.esm.js',
      format: 'es',
      name: 'myLib',
      sourcemap: true
    },
    {
      file: 'dist/myLib.js',
      format: 'iife',
      name: 'myLib',
      sourcemap: true,
      globals: {
        vue: 'Vue',
      }
    }
  ],
  external: Object.keys(pkg.dependencies || {}),
});