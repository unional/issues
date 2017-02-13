import * as SystemJS from 'systemjs'

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
