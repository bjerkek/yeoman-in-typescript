import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import builtins from 'rollup-plugin-node-builtins';

export default {
  input: 'src/app/index.ts',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm'
    },
    {
      name: 'generator-foo',
      file: 'dist/bundle.umd.js',
      format: 'umd'
    }
  ],
  plugins: [
    builtins(),
    commonjs(),
    resolve(),
    json(),
    typescript({
      tsconfig: 'tsconfig.json'
    })
  ]
}
