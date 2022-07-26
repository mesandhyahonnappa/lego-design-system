import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';
import copy from 'rollup-plugin-copy';

export default {
  input: {
    index: 'dist-transpiled/index',
  },
  onwarn: function(warning) {
    if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }
    console.warn( warning.message );
  },
  output: [
    {
      dir: 'dist/',
      entryFileNames: '[name].esm.js',
      chunkFileNames: '[name]-[hash].esm.js',
      format: 'es',
      sourcemap: true,
    },
    {
      dir: 'dist/',
      format: 'commonjs',
      preferConst: true,
      sourcemap: true,
    },
  ],
  external: (id) => !/^(\.|\/)/.test(id),
  plugins: [
    resolve(),
    sourcemaps(),
    copy({
      targets: [
        {
          src: path.resolve(__dirname, 'node_modules/@sandhyahonnappa/lego-design-system/dist/css/variables.css'),
          dest: path.resolve(__dirname, 'dist/css'),
        },
      ],
    }),
  ],
};