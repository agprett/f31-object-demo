//create person object, with a first name, last name, and age property

let person = {
  firstName: 'Alec',
  lastName: 'Prettyman',
  age: 23
}

// let key = 'lastName'

//accessing values using dot and bracket notation
console.log(person.firstName)
console.log(person['lastName'])



//create a meal object, with a appetizer, entree, dessert, and drink property

let meal = {
  appetizer: 'Cactus Blossom',
  entree: 'Steak',
  dessert: 'Ice Cream',
  drink: 'Dr. Pepper'
}

//pratice destructuring

//saving the keys from an object to a new variable
//let appetizer = meal.appetizer

const {appetizer, entree} = meal

const {drink: bestDrinkEver} = meal

console.log(appetizer, entree, bestDrinkEver)

//add the sides property to our meal

meal.sides = ['House salad with blue cheese', 'loaded mashed potatoes']

//delete the dessert key from our meal

delete meal.dessert
console.log(meal)

//for loop to log what we had in our meal
for(let food in meal){
  console.log(`For a ${food} I had a ${meal[food]}`)
}


//CLASSES

//create a class pet with name, age, and color properties
//add method called greeting, that will greet user
class Pet {
  constructor(name, age, color){
    this.name = name
    this.age = age
    this.color = color
  }

  greeting() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old!`)
  }
}

//create class Dog that extends Pet
class Dog extends Pet {
  constructor(name, age, color, breed){
    super(name, age, color)

    this.breed = breed
  }
}

let pet1 = new Dog('Gus', 2, 'Black', 'Bernedoodle')

pet1.greeting()

//create a Cat class that extends Pet
class Cat extends Pet {
  constructor(name, age, color){
    super(name, age, color)

    this.temperment = 'mean'
  }

  isNice(newTemperment) {
    this.temperment = newTemperment
    console.log(`${this.name} is now a ${this.temperment} cat!`)
  }
}

let cat1 = new Cat('Macy', 3, 'grey')

console.log(cat1)

cat1.isNice('super sweet')



//template for classes
// class CLASSNAME {
//   constructor(ANY PARAMS YOU WANT){
//     BLUEPRINT FOR OBJECT
//     this.KEYNAME = VALUE
//   }
// }