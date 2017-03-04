import test from 'ava'
import * as fileUrl from 'file-url'
import { env, createVirtualConsole } from 'jsdom'

import { foo } from './index'

test('first test', t => {
  const virtualConsole = createVirtualConsole().sendTo(console)
  return new Promise<any>((resolve, reject) => {
    env({
      html: '<br>',
      url: fileUrl(process.cwd()) + '/',
      virtualConsole,
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
        'dist/es5': {
          defaultExtension: 'js'
        }
      }
    })
    const m = await sys.import('dist/es5/index')
    t.is(m.boo(), 'boo')
  })
})

test(t => {
  t.is(foo(), 'foo')
})
