// Window Scope
var a = 'JavaScript'; // is a window scope this found anywhere
var b = 10; // this is a window scope variable
function varLearnScope() {
  console.log('a,b',a, b);
  if (true) {
    console.log('a,b',a, b);
  }
}
varLearnScope()
console.log('a,b',a, b); // accessible

//Global scope
let c = 'JavaScript'; // is a global scope it will be found anywhere in this file
let d = 10; // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log('c,d',c, d); // JavaScript 10, accessible
  if (true) {
    let c = 'Python';
    let d = 100;
    console.log('c,d',c, d); // Python 100
  }
  console.log('c,d',c, d);
}
letsLearnScope();
console.log('c,d',c, d); // JavaScript 10, accessible



//Local scope

let e = 'JavaScript' // is a global scope it will be found anywhere in this file
let f = 10 // is a global scope it will be found anywhere in this file
function localLearnScope() {
  console.log('e,f',e, f) // JavaScript 10, accessible
  let c = 30
  if (true) {
	// we can access from the function and outside the function but
	// variables declared inside the if will not be accessed outside the if block
	let e = 'Python'
	let f = 20
	let d = 40
	console.log('e,f,c',e, f, c) // Python 20 30
  }
  // we can not access c because c's scope is only the if block
  console.log('e,f',e, f) // JavaScript 10
}
localLearnScope()
console.log('e,f',e, f) // JavaScript 10, accessible
