import test from 'ava'
import fileUrl from 'file-url'
import { env, createVirtualConsole } from 'jsdom'

import { foo } from './index'

test('first test', t => {
  return new Promise((resolve, reject) => {
    env({
      html: '<br>',
      url: fileUrl(process.cwd()) + '/',
      scripts: [
        require.resolve('systemjs')
      ],
      done(err, win) {
        if (err) {
          reject(err)
        }
        else {
          resolve(win)
        }
      }
    })
  }).then(async win => {
    const sys = win.SystemJS
    sys.config({
      packages: {
        'src': {
          defaultExtension: 'js'
        }
      }
    })
    const m = await sys.import('src/index')
    t.is(m.boo(), 'boo')
  })
})

test(t => {
  t.is(foo(), 'foo')
})
