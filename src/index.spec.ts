import test from 'ava'
import { env, createVirtualConsole } from 'jsdom'
import 'reflect-metadata'

import { Foo } from './Foo'

@Reflect.metadata('somekey', 123)
class Boo {
}

test.only('in node', t => {
  const boo = Reflect.getMetadata('somekey', Boo)
  t.is(boo, 123)

  const foo = Reflect.getMetadata('somekey', Foo)
  t.is(foo, 123)
})

test('in jsdom', t => {
  return new Promise(r => {
    const virtualConsole = createVirtualConsole().sendTo(console)
    env('',
      {
        virtualConsole,
        scripts: [
          require.resolve('reflect-metadata')
        ],
        done(_err, win: any) {
          const actual = win.Reflect.getMetadata('somekey', win.SomeIssues.Foo)
          t.is(actual, 123)
          r()
        }
      })
  })
})
