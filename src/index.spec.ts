import test from 'ava'

import { Container, singleton } from 'aurelia-dependency-injection'

@singleton()
class Depender {
  constructor(private dep: Dependent) { }
  get() {
    return this.dep.foo
  }
}

class Dependent {
  foo = 'foo'
}

test('first test', t => {
  const container = new Container()

  const actual = container.get(Depender)

  t.is(actual.get(), 'foo')
})
