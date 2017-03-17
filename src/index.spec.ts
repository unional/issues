import test from 'ava'
import fileUrl = require('file-url')
import { env, createVirtualConsole } from 'jsdom'

test('first test', t => {
  return new Promise((resolve, reject) => {
    const virtualConsole = createVirtualConsole().sendTo(console)
    env({
      html: '<br>',
      url: fileUrl(process.cwd()) + '/',
      virtualConsole,
      done(err, win: any) {
        if (err) {
          reject(err)
        }

        const xml = new win.DOMParser().parseFromString('<script>x<\/script>', 'text/xml')
        const parseError = xml.getElementsByTagName('parsererror')
        console.log(parseError)
        t.is(parseError.length, 0)
        resolve()
      }
    })
  })
})
