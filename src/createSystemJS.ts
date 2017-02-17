import { getLogger } from 'aurelia-logging'
import * as SystemJS from 'systemjs'
import sys = require('systemjs')

const log = getLogger('createSysJS')

log.info('require("systemjs") === import * as SystemJS', sys === SystemJS)
log.info('SystemJS.constructor exists:', SystemJS.constructor !== undefined)

export function createSystemJS(pluginName: string) {
  const sys = new SystemJS.constructor()
  sys.config({
    baseURL: `plugins/${pluginName}/node_modules`,
    map: {
      [pluginName]: `./plugins/${pluginName}`
    },
    packageConfigPaths: [
      './plugins/*/package.json',
      '*/package.json',
      '@*/*/package.json'
    ]
  })

  return sys
}
