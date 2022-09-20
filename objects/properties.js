const person = {
    name: 'Mosh',
    age: 24,
    skill: 'React'
}

// let text = '';
// for (x in person) {
//     text += person[x] + ' ';
// }
// console.log(text);


person.eyeColor = 'blue';
console.table(person);

delete person.age;
console.table(person);
