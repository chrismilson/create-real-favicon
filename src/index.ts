#!/usr/bin/env node

import generate from './generate'
import commander from 'commander'

const program = new commander.Command(process.env.npm_package_name)
  .version(process.env.npm_package_version || 'Try running through yarn or npm')
  .description(process.env.npm_package_description || '')
  .arguments('<master>')
  .option(
    '-o, --output <path>',
    'Specity an output directory for the generated assets.'
  )
  .action((master, options) => {
    generate(master, options).catch(console.error)
  })

program.parse(process.argv)
