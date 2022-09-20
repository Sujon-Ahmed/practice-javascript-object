const car = {
    type: 'Fiat',
    model: '500',
    color: 'white'
}

const person = {
    firstName: 'sujon',
    lastName: 'ahmed',
    eye: 'black',
    age: 22,
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// console.table(car);
// console.log(car.type);

// console.table(person);
//console.log(person.name); // dot notation
//console.log(person['age']); // array notation

// console.log(person.fullName());

const { firstName, lastName, eye, age} = person; // object destructuring 

console.log(`I am ${person.fullName()}`);