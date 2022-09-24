// getter 

// const person = {
//     firstName: 'Jhon',
//     lastName: 'Doe',
//     language: 'en',
//     get lang() {
//         return this.language;
//     }
// };

// console.log(person.lang);

// setter
const person = {
    firstName: 'Jhon',
    lastName: 'Doe',
    language: '',
    set lang(lang) {
        this.language = lang;
    }
};

person.lang = 'en';

console.log(person.language);