import test from 'ava'
import fileUrl = require('file-url')
import { env, createVirtualConsole } from 'jsdom'

let win: any
test.before(() => {
  return new Promise((resolve, reject) => {
    const virtualConsole = createVirtualConsole().sendTo(console)
    env({
      html: '<br>',
      url: fileUrl(process.cwd()) + '/',
      virtualConsole,
      done(err, w: any) {
        if (err) {
          reject(err)
        }

        win = w
        resolve()
      }
    })
  })
})

test('parseerror', t => {
  const xml = new win.DOMParser().parseFromString('<script>x</script>', 'text/xml')
  const parseError = xml.getElementsByTagName('parsererror')
  console.log(parseError)
  t.is(parseError.length, 0)

})

test('wrong child type', t => {
  const root = new win.DOMParser().parseFromString('<?xml version=\"1.0\"?>\n<a><\/a>', 'text/xml')
  t.is(root.firstChild.nodeType, 1)
})
