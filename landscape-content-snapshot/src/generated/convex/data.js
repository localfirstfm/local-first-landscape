// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: '0.0.1',
  Id: 'convex',
  Name: 'Convex',
  Website: 'https://convex.dev',
  License: 'MIT',
  Deployment: ['Hosted'],
  AppTarget: {
    Platform: {
      data: ['Browser']
    }
  }
})
