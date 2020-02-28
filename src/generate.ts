import { Command } from 'commander'
import { generateFavicon, createRequest } from '@shlappas/rfg-api'
import API_KEY from './API_KEY.json'
import path from 'path'

/**
 * Executes the generation of the icon assets from a config.
 * 
 * @param options
 */
export default async function generate(options: Command) {
  console.log('Running generate')
  console.log(options.config)
}