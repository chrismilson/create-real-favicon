import { Command } from 'commander'
import { init as initRfgApi } from 'rfg-api'
import API_KEY from './API_KEY'
import path from 'path'
import fs from 'fs'

const { generateFavicon, createRequest } = initRfgApi()

/**
 * Executes the generation of the icon assets from a config.
 *
 * @param options
 */
export default async function generate(
  options: Command & {
    master: string
    output?: string
  }
): Promise<object> {
  console.log('Generating favicon...')

  return generateFavicon(
    createRequest({
      apiKey: API_KEY,
      masterPicture: path.resolve(process.cwd(), options.master),
      design: {
        desktopBrowser: {},
        ios: { pictureAspect: 'noChange' }
      }
    }),
    path.resolve(process.cwd(), options.output || '.'),
    (err, result) => {
      if (err) throw err

      fs.writeFileSync(
        path.resolve(process.cwd(), './response.json'),
        JSON.stringify(result)
      )

      console.log('Generation completed.')
    }
  )
}
