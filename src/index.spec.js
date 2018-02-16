const fs = require('fs')

test('test fs', () => {
  if (fs.existsSync('up-spec-out')) fs.rmdirSync('up-spec-out')
  fs.mkdirSync('up-spec-out')
})
