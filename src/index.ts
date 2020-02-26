import packageJson from '../package.json'
import commander from 'commander'

const API_KEY = '65eef13a8c3ee57f7b08d67528282257df3a8511'

const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .description(packageJson.description)
  .command(
    'generate <faviconRequest> <faviconFile> <outputDir>',
    'Generate favicon images and HTML markups'
  )
  .command(
    'inject <faviconFile> <outputDir> <htmlFiles>',
    'Inject favicon HTML markups into pages'
  )
  .command(
    'check-for-update <faviconFile>',
    'Check for updates on RealFaviconGenerator'
  )
  .parse(process.argv)