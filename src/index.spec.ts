import test from 'ava'
import * as SystemJS from 'systemjs'

test('first test', async _t => {
  const sys = new SystemJS.constructor()
  sys.config({
    baseURL: 'node_modules',
    packageConfigPaths: [
      '*/package.json',
      '@*/*/package.json'
    ]
  })
  await sys.import('make-error')
})
