const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)

console.log(now.getFullYear()) // 2020

console.log(now.getMonth()) // 0, because the month is January,  month(0-11)

console.log(now.getDate()) // 4, because the day of the month is 4th,  day(0-31)

console.log(now.getDay()) // 6, because the day is Saturday which is the 5th day, // Getting the weekday as a number (0-6)

console.log(now.getHours()) // 0, because the time is 00:56:41

console.log(now.getMinutes()) // 56, because the time is 00:56:41

console.log(now.getSeconds()) // 41, because the time is 00:56:41

console.log(now.getTime()) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41
