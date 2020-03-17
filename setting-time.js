const duration = 1000
//setInterval
// syntax
function callBack() {
  // code goes here
}
setInterval(callback, duration) 

function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 2000) // it prints hello in every 2 seconds

// setTimeout
// syntax
function callback() {
  // code goes here
}
setTimeout(callback, duration) // duration in milliseconds

function sayHello() {
  console.log('Hello')
}
setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.
