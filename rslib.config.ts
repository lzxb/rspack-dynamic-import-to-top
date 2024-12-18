import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      bundle: true,
      format: 'esm',
      syntax: 'esnext',
      dts: false,
      autoExternal: true,
      
    },
  ],
  output: {
    externals: {
      vue: 'vue',
      axios: 'axios'
    },
  }
});
