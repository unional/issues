import test from 'ava'
import * as SystemJS from 'systemjs'

test('npm-module', async _t => {
  const pluginName = 'npm-module'
  const sys = new SystemJS.constructor()
  sys.config({
    baseURL: `plugins/${pluginName}/node_modules`,
    map: {
      [pluginName]: './plugins/' + pluginName
    },
    packageConfigPaths: [
      './plugins/*/package.json',
      '*/package.json',
      '@*/*/package.json'
    ]
  })
  await sys.import('npm-module')
})
