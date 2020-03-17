class Person {
  constructor(firstName, lastName, score, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.score = score
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getscore() {
    return this.score
  }
  set setScore(score) {
    this.score += score
   }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
console.log(person1.getFullName())
console.log(person1.score)
console.log(person1.getscore)

const person2 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
person2.setScore = 50
console.log(person2.getscore)

