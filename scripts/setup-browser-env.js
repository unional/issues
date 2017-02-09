// require('browser-env')()
const jsdomify = require('jsdomify').default
jsdomify.create()

// "test": "npm run clean && tsc && ava && export BROWSER_TEST=true; ava",
// if (process.env.BROWSER_TEST) {
//   require('browser-env')()
// }
