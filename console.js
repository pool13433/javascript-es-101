//console.assert(<<expression>>, <<message>>) // assert and throw error
console.assert(true, 'console asserion as true')

console.clear(); // clear console before called

//console.count(<<myLabel>>) // <<myLabel>> : string (default ‘default’)
console.count('console count')
console.count('console count')
console.count('console count')

//console.error(<<myMessage>>) // <<myMessage>> : string or object
console.error('console error')

//console.group(<<myLabel>>) // <<myLabel>> : string
//console.groupCollapsed(<<myLabe>>) // <<myLabel>> : string
//console.groupEnd()
console.group('console groupName') // <<myLabel>> : string
console.groupCollapsed('console groupName') // <<myLabel>> : string
console.groupEnd()

//console.info(<<myMessage>>) // <<myMessage>> : string or object
console.info('console info')

//console.log(<<myMessage>>) // <<myMessage>> : string or object
console.log('console log')

//console.table(<<tabledata>>,<<tablecolumns>>) // <<tabledata>> : object or array ,<< tablecolumns>>  : fields name
console.table([1,2,3,4,5],undefined)

//console.time(<<myLabel>>);  <<myLabel>> : string
//console.timeEnd();
console.time('console time');
var time = 0
for(let i = 0 ; i < 10000 ; i++){
  //do something
  setTimeout(()=>{
    time++
  },1000)
}
console.timeEnd('console time')


//console.trace(<<myLabel>>)  //<<myLabel>> : string
console.trace('console trace')

//console.warn(<<myMessage>>) //  <<myMessage>> : string or object
console.warn('console warn')

console.log('console log Hello', 'World', '!')
console.log('console log HAPPY', 'NEW', 'YEAR', 2020)
console.log('console log Welcome', 'to', 30, 'Days', 'Of', 'JavaScript')
