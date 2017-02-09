import test from 'ava'
import * as SystemJS from 'systemjs'
// import jsdomify from 'jsdomify'

// test.before(() => {
//   jsdomify.create()
// })

// test.after(() => {
//   jsdomify.desctroy()
// })

test('npm-module', async _t => {
  console.log('isBrowser', typeof window !== 'undefined' && typeof document !== 'undefined')
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
  console.log(sys.getConfig())
  await sys.import('npm-module')
})
