import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    ormat: 'cjs'
  },
  plugins: [typescript()],
  external: ['rfg-api', 'commander', 'path']
}
