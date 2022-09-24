// getter 

const person = {
    firstName: 'Jhon',
    lastName: 'Doe',
    language: 'en',
    get lang() {
        return this.language;
    }
};

console.log(person.lang);