import { Command } from 'commander'
import { init as initRfgApi } from 'rfg-api'
import API_KEY from './API_KEY'
import path from 'path'

const { generateFavicon, createRequest } = initRfgApi()

/**
 * Executes the generation of the icon assets from a config.
 *
 * @param options
 */
export default async function generate(
  masterPath: string,
  options: Command & {
    output?: string
  }
): Promise<object> {
  console.log()
  console.log('Generating favicon assets...')

  return generateFavicon(
    createRequest({
      apiKey: API_KEY,
      masterPicture: path.resolve(process.cwd(), masterPath),
      design: {
        desktopBrowser: {},
        ios: { pictureAspect: 'noChange' }
      }
    }),
    path.resolve(process.cwd(), options.output || '.'),
    (err, result) => {
      if (err) throw err

      console.log(result)

      console.log('Generation completed.')
    }
  )
}
