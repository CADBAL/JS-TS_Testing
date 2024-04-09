// constructor function
function Person () {
    this.name = 'John',
    this.age = 23,

    this.get_name = function() {
        return this.name
    }
}

let person1 = new Person()

person1.get_name()