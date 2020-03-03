#!/usr/bin/env node

import generate from './generate'
import commander from 'commander'

const program = new commander.Command(process.env.npm_package_name)
  .version(process.env.npm_package_version || 'Try running through yarn or npm')
  .description(process.env.npm_package_description || '')
  .arguments('<master>')
  .option(
    '-o, --output <path>',
    'Specity an output directory for the generated assets.',
    'icons'
  )
  .option('--no-ios', 'Do not generate ios icons.')
  .option('--no-desktop', 'Do not generate desktop browser icons.')
  .option('--no-android', 'Do not generate android chrome icons.')
  .action((master, options) => {
    generate(master, options).catch(console.error)
  })

program.parse(process.argv)
