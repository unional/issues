module.exports = (obj) => {
  console.log(arguments)
  if (arguments.length > 1) {
    throw new Error('Must only pass in single argument');
  }
}
