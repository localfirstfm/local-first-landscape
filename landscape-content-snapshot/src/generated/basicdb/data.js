// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
  Version: '0.0.1',
  Id: 'basicdb',
  Name: 'BasicDB',
  Website: {
    data: 'https://basic.tech'
  },
  Deployment: {
    data: ['Self-hosted']
  },
  AppTarget: {
    data: {
      Platform: {
        data: ['Browser']
      }
    }
  }
})
