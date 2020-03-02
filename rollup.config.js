import typescript from 'rollup-plugin-typescript2'
import hashbang from 'rollup-plugin-hashbang'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'bin',
    format: 'cjs'
  },
  plugins: [typescript(), hashbang()],
  external: ['rfg-api', 'commander', 'path']
}
