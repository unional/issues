const test = require('ava')
const fs = require('fs')

test('test fs', () => {
  if (fs.existsSync('dummy')) fs.rmdirSync('dummy')
  fs.mkdirSync('dummy')
})
