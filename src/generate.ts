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
    desktop: boolean
    ios: boolean
    android: boolean
  }
): Promise<object> {
  console.log()
  console.log('Generating favicon assets...')

  const design: {
    desktopBrowser?: object
    ios?: object
    androidChrome?: object
  } = {}

  if (options.desktop) {
    design.desktopBrowser = {}
  }
  if (options.ios) {
    design.ios = { pictureAspect: 'noChange' }
  }
  if (options.android) {
    design.androidChrome = { pictureAspect: 'noChange' }
  }

  // If the designs object has no specifications, then the api will be requested
  // to roduce nothing.
  // In this case we should just abort instead of sending the request.
  if (Object.keys(design).length < 1) {
    console.log('No favicons will be generated. Aborting...')
    return
  }

  return generateFavicon(
    createRequest({
      apiKey: API_KEY,
      masterPicture: path.resolve(process.cwd(), masterPath),
      iconsPath: options.output,
      settings: { usePathAsIs: true },
      design
    }),
    path.resolve(process.cwd(), options.output || '.'),
    (err, result) => {
      if (err) throw err

      console.group('The html code to include the icons follows:')
      console.log(result.favicon.html_code)
      console.groupEnd()

      console.log('Generation completed.')
    }
  )
}
