// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: 1,
  Id: 'basicdb',
  Name: 'BasicDB',
  Website: 'https://basic.tech',
  License: 'MIT',
  Deployment: ['Self-hosted'],
  AppTarget: {
    Platform: {
      data: ['Browser']
    }
  }
})
