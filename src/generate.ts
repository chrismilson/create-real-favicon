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
  options: Command & {
    master: string
    output?: string
  }
): Promise<object> {
  return generateFavicon(
    createRequest({
      apiKey: API_KEY,
      masterPicture: path.resolve(process.cwd(), options.master),
      design: {
        desktopBrowser: {},
        ios: { pictureAspect: 'noChange' }
      }
    }),
    path.resolve(process.cwd(), options.output || '.')
  )
}
