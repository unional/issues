import test from 'ava'
import { create } from 'domture'

test('cannot load axios', async _t => {
  const domture = await create()
  await domture.import('axios')
})
