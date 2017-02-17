import test from 'ava'

import * as SystemJS from 'systemjs'

import { getLogger } from 'aurelia-logging'
import * as Logging from 'aurelia-logging'

import './createSystemJS'

const log = getLogger('node spec')

test.serial(async _t => {
  const sys = new SystemJS.constructor()
  sys.set('systemjs', SystemJS.newModule({ default: SystemJS }))
  sys.set('aurelia-logging', SystemJS.newModule(Logging))
  log.info('before import with { default: ... } wrap')
  return sys.import('dist/es5/createSystemJS.js')
})

test.serial(async _t => {
  const sys = new SystemJS.constructor()
  sys.set('systemjs', SystemJS.newModule(SystemJS))
  sys.set('aurelia-logging', SystemJS.newModule(Logging))
  log.info('before import without wrap')
  return sys.import('dist/es5/createSystemJS.js')
})
