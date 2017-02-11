import * as SystemJS from 'systemjs'

export function createSystemJS(pluginName: string) {
  const sys = new SystemJS.constructor()
  sys.config({
    baseURL: `plugins`,
    map: {
      [pluginName]: pluginName,
      'color-map': pluginName + '/node_modules/color-map'
      // '*': './npm-module/node_modules/*'
      // [pluginName]: pluginName
    },
    packageConfigPaths: [
      '*/package.json',
      pluginName + '/node_modules/*/package.json',
      pluginName + '/node_modules/@*/*/package.json'
    ]
  })

  return sys
}
