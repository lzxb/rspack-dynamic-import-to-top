import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      bundle: false,
      format: 'esm',
      syntax: 'esnext',
      dts: false,
      autoExternal: true
    },
  ],
  source: {
    entry: {
      index: './src/**',
    },
  },
});
