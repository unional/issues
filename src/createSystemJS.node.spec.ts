import test from 'ava'

let createSystemJS
test.before(() => {
  delete require.cache[require.resolve('systemjs')]
  createSystemJS = require('./createSystemJS').createSystemJS
})

test(async _t => {
  const sys = createSystemJS('npm-module')
  console.log(sys.getConfig())
  await sys.import('npm-module')
})
