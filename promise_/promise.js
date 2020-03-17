//A Promise is in one of these states:

//pending: initial state, neither fulfilled nor rejected.
//fulfilled: meaning that the operation completed successfully.
//rejected: meaning that the operation failed.

//callback
const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback('It did not go well', skills)
  }, 2000)
}
const callback = (err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
}
doSomething(callback)



