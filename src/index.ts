#! /usr/bin/env node

import generate from './generate'
import commander from 'commander'

const program = new commander.Command(process.env.npm_package_name)
  .version(process.env.npm_package_version || 'Try running through yarn or npm')
  .description(process.env.npm_package_description || '')

program
  .command('generate')
  .alias('g')
  .description('Generate icon assets from a master icon.')
  .arguments('<master>')
  .option(
    '-o, --output <path>',
    'Specity an output directory for the generated assets.'
  )
  .action(cmd => {
    generate(cmd || {}).catch(console.error)
  })

program.parse(process.argv)
