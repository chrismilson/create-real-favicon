import typescript from 'rollup-plugin-typescript2'
import hashbang from 'rollup-plugin-hashbang'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    format: 'cjs'
  },
  plugins: [typescript(), hashbang()],
  external: ['rfg-api', 'commander', 'path']
}
