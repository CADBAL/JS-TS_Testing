class Person {
    constructor(name, age) {
    this.name = name;
    this.age = age;
    }
}


let person1 = new Person("steve", 110);

console.log(person1.name)
console.log(person1.age)

person1.name = "larry"

console.log(person1.name)