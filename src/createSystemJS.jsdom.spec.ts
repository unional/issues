import test from 'ava'
import { env, createVirtualConsole } from 'jsdom'

let window
test.beforeEach(() => {
  return new Promise(r => {
    const virtualConsole = createVirtualConsole().sendTo(console)
    env({
      file: 'index.html',
      virtualConsole,
      scripts: [
        require.resolve('systemjs')
      ],
      done(err, win) {
        if (err) {
          throw err
        }

        window = win
        r()
      }
    })
  })
})

test('control', async t => {
  let thrown
  try {
    // const actual = await sys.import('no-package')
    await new Promise(() => {
      throw new Error('asdfs')
    })
  }
  catch (e) {
    thrown = e
  }

  t.not(thrown, undefined)
})

test('uncaught', async t => {
  let thrown
  try {
    await window.SystemJS.import('plugins/no-package')
  }
  catch (e) {
    thrown = e
  }

  // not reach. Error escaped from the flow.
  t.not(thrown, undefined)
})
