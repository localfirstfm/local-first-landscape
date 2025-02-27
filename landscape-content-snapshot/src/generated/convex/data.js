// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: '0.0.1',
  Id: 'convex',
  Name: 'Convex',
  Website: {
    data: 'https://convex.dev'
  },
  Deployment: {
    data: ['Hosted']
  },
  AppTarget: {
    data: {
      Platform: {
        data: ['Browser']
      }
    }
  }
})
