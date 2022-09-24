## JavaScript-Object

**In JavaScript, objects are king. If you understand objects, you understand JavaScript.**

In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.

The values are written as name:value pairs (name and value separated by a colon).


*🔰 It is a common practice to declare objects with the const keyword.*

``` javascript
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```

In JavaScript, almost "everything" is an object.

- Booleans can be objects (if defined with the `new` keyword)
- Numbers can be objects (if defined with the `new` keyword)
- Strings can be objects (if defined with the `new` keyword)
- Dates are always objects
- Maths are always objects
- Regular expressions are always objects
- Arrays are always objects
- Functions are always objects
- Objects are always objects

All JavaScript values, except primitives, are objects.

## JavaScript Primitives
A primitive value is a value that has no properties or methods.

`3.14` is a primitive value

A primitive data type is data that has a primitive value.

JavaScript defines 7 types of primitive data types:

- **string**
- **number**
- **boolean**
- **null**
- **undefined**
- **symbol**
- **bigint**

|   Value           |   Type            |   Comment                         |
|-------------------|-------------------|-----------------------------------|
|   "Hello"         |   string          |   "Hello" is always "Hello"       |
|   3.14            |   number          |   3.14 is always 3.14             |
|   true            |   boolean         |   true is always true             |
|   false           |   boolean         |   false is always false           |
|   null            |   null (object)   |   null is always null             |
|   undefined       |   undefined       |   undefined is always undefined   |


## What is this?
In JavaScript, the `this` keyword refers to an object.

Which object depends on how `this` is being invoked (used or called).

The `this` keyword refers to different objects depending on how it is used:

- In an object method, `this` refers to the object.
- Alone, `this` refers to the global object.
- In a function, `this` refers to the global object.
- In a function, in strict mode, `this` is `undefined`.
- In an event, `this` refers to the element that received the event.
- Methods like `call()`, `apply()`, and `bind()` can refer `this` to any object.

> `this` is not a variable. It is a keyword. You cannot change the value of `this`.

## JavaScript Accessors (Getters and Setters)
ECMAScript 5 (ES5 2009) introduced Getter and Setters.

Getters and setters allow you to define Object Accessors (Computed Properties).


### Getter Example
``` js
// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;
```

### Setter Example
```js
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};

// Set an object property using a setter:
person.lang = "en";

// Display data from the object:
document.getElementById("demo").innerHTML = person.language;
```

## JavaScript Function or Getter?
What is the differences between these two examples?
### Example-1
```js
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object using a method:
document.getElementById("demo").innerHTML = person.fullName();
```
### Example-2
```js
const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.fullName;
```
> Example 1 access fullName as a function: person.fullName().

> Example 2 access fullName as a property: person.fullName.

> The second example provides a simpler syntax.

### Why Using Getters and Setters?
- It gives simpler syntax
- It allows equal syntax for properties and methods
- It can secure better data quality
- It is useful for doing things behind-the-scenes
