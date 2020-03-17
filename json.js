// ----------------- JSON.parse ---------------
const usersText = `{
  "users":[
    {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
    },
    {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
    }
  ]
  }`

const usersObj = JSON.parse(usersText, (key, value) => {
  let newValue =
    typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
  return newValue
})
console.log(usersObj)


// ----------------- JSON.stringify ---------------
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS',
    ],
    age: 25,
    isLoggedIn: false,
    points: 50
  }
}

const txt = JSON.stringify(users, undefined, 4)
console.log(txt) // text means JSON- because json is a string form of an object.


const txt1 = JSON.stringify(users, ['email', 'age'], 4)
console.log(txt1)
