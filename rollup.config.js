import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import visualizer from 'rollup-plugin-visualizer'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    resolve(),
    commonjs(),
    terser({
      compress: {
        ecma: 6
      },
      sourcemap: true,
      toplevel: true
    }),
    visualizer({
      title: '@clampy-js/react-clampy bundle visualizer',
      open: false,
      template: 'sunburst', // sunburst, treemap, circlepacking, network
      filename: './build/bundleStats.html'
    })
  ]
}
