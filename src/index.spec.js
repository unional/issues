import test from 'ava'

const foo = require('./index')

test('first test', t => {
  foo(0);
  foo(0, 2);
})
