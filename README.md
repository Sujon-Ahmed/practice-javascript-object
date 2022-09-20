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



