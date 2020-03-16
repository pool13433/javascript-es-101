let _number = 100
let _string = 'Poolsawat'
let _isMale = true
let _deadDate = null
let _deadTime = undefined

console.log('_number ::=='+_number+' typeof ::=='+typeof _number)
console.log('_string ::=='+_string+' typeof ::=='+typeof _string)
console.log('_isMale ::=='+_isMale+' typeof ::=='+typeof _isMale)
console.log('_deadDate ::=='+_deadDate+' typeof ::=='+typeof _deadDate)
console.log('_deadTime ::=='+_deadTime+' typeof ::=='+typeof _deadTime)


let address = {
  building : 'Masinplace Aprtment',
  village : 'Masinplace Land',
  alley : 'Ladpao 1 yak 10-1',  
  street : 'Ladpao',
  distinct : 'Jompon',
  subDistinct : 'Jatujuk',
  province : 'BKK',
  postcode : 10900,
}
console.log('address ::=='+address)
console.log('address ::=='+JSON.stringify(address))

let func = function(){
  return 'FUNC'
}
console.log('func ::=='+func)
console.log('func() ::=='+func())

let friends = ['Captain America','Thor','Star Lord','Doctor Stange','Wong','...']
console.log('friends ::=='+friends)
console.log('friends ::=='+friends.join(' ,\nname ::== '))
console.log('friends ::=='+JSON.stringify(friends))