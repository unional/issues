import test from 'ava'

import { Container, autoinject } from 'aurelia-dependency-injection'


@autoinject()
class Depender {
  constructor(private dep: Dependent) {
    console.log(dep)
  }
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
