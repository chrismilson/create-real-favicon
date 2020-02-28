import commander from 'commander'

const program = new commander.Command(process.env.npm_package_name)
  .version(process.env.npm_package_version || 'Try running through yarn or npm')
  .description('')

program
  .command('generate')
  .alias('g')
  .description('Generate icon assets from a master icon.')
  .option('-c --config', 'Specify a config file for the icon generation.')
  .option('-o --output', 'Specity an output directory for the assets.')

program.parse(process.argv)