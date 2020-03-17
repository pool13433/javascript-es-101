const companies = new Set()
console.log(companies)

const languages = ['English','Finnish','English',
  'French','Spanish','English','French'
]
const setOfLangauges = new Set(languages)
console.log(setOfLangauges)

//Set(4) {"English", "Finnish", "French", "Spanish"}

//const companies = new Set() // creating an empty set

companies.add('Google') // add element to the set
companies.add('Facebook')
companies.add('Amazon')

console.log(companies.size) // 5 elements in the set

console.log(companies.delete('Google'))

console.log(companies.has('Facebook')) // true

companies.clear()

console.log(companies)



