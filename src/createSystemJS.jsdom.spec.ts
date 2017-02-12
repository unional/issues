import test from 'ava'
import { readFileSync } from 'fs'
import { jsdom } from 'jsdom'

const systemJSContent = readFileSync(require.resolve('systemjs'), { encoding: 'utf-8' })

const createSystemJSContent = readFileSync(require.resolve('./createSystemJS'), { encoding: 'utf-8' })

let window
test.beforeEach(() => {
  const document = jsdom(`<!DOCTYPE html><html><base href="file://${process.cwd()}/index.html"></html>`)
  window = document.defaultView

  let scriptEl = document.createElement('script')
  scriptEl.textContent = systemJSContent
  document.body.appendChild(scriptEl)

  scriptEl = document.createElement('script')
  scriptEl.textContent = createSystemJSContent
  document.body.appendChild(scriptEl)
})

test(async _t => {
  const sys = window.createSystemJS('npm-module')
  // console.log(sys.getConfig())
  await sys.import('npm-module')
})
