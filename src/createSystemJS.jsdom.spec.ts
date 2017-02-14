import test from 'ava'

import { readFileSync } from 'fs'
import { jsdom, createVirtualConsole } from 'jsdom'

const systemJSContent = readFileSync(require.resolve('systemjs'), { encoding: 'utf-8' })

const cwd = process.cwd()

test('load script manually', async t => {
  const virtualConsole = createVirtualConsole().sendTo(console)
  const document = jsdom('',
    {
      url: `file://${cwd}/index.html`,
      virtualConsole
    })
  const window = document.defaultView as any

  let scriptEl = document.createElement('script')
  scriptEl.textContent = systemJSContent
  document.body.appendChild(scriptEl)
  t.not(window.SystemJS, undefined)
})

test('use scripts property', async t => {
  const virtualConsole = createVirtualConsole().sendTo(console)
  const document = jsdom('',
    {
      url: `file://${cwd}/index.html`,
      virtualConsole,
      scripts: [
        require.resolve('systemjs')
      ]
    })
  const window = document.defaultView as any

  t.not(window.SystemJS, undefined)
})
