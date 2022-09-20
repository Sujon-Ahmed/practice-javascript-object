const person = {
    firstName: 'Sujon',
    lastName: 'Ahmed',
    id: 5566,
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// console.log(person.fullName());

let message = 'I am Sujon Ahmed';

let msg = message.toUpperCase();

console.log(msg);