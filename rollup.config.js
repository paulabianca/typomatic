import buble from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve';

module.exports = {
  input: 'esm/typomatic.js',
  output: [
    {
      name: 'Typomatic',
      file: 'typomatic.js',
      format: 'umd'
    },
    {
      name: 'Typomatic',
      file: 'typomatic.es.js',
      format: 'esm'
    }
  ],
  plugins: [
    nodeResolve(),
    buble({
      transforms: {
        dangerousForOf: true,
        dangerousTaggedTemplateString: true
      }
    })
  ]
}
