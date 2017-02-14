import test from 'ava'
import { resolve } from 'path'

import { readFileSync } from 'fs'
import { jsdom, createVirtualConsole } from 'jsdom'

const systemJSContent = readFileSync(require.resolve('systemjs'), { encoding: 'utf-8' })

const createSystemJSContent = readFileSync(resolve('dist/some-issues.es5.js'), { encoding: 'utf-8' })

let window
test.beforeEach(() => {
  const virtualConsole = createVirtualConsole().sendTo(console)
  const document = jsdom('',
    {
      url: `file://${process.cwd()}/index.html`,
      virtualConsole
    })

  window = document.defaultView

  let scriptEl = document.createElement('script')
  scriptEl.textContent = systemJSContent
  document.body.appendChild(scriptEl)

  scriptEl = document.createElement('script')
  scriptEl.textContent = createSystemJSContent
  document.body.appendChild(scriptEl)
})

test(async t => {
  const sys = window.SomeIssues.createSystemJS('npm-module')
  const actual = await sys.import('npm-module')
  console.log(actual)
  t.is(typeof actual.rgbHex, 'function')
})
