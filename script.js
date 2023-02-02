// Primitive types concepts

let x = 10;

//console.log(x);

y = x;

//console.log(y);

x = 15;
//console.log(x, y);

// reference type concepts

let a = [1, 2, 3];
//console.table(a);

let b = a;

//console.table(b);

a[1] = 8;
//console.table(b);
b[2] = 25;
//console.table(a);

/*-------------------------------*/
/**
The general rules for constructing names for variables (unique identifiers) are:
* Names can contain letters, digits, underscores, 
and dollar signs.
* Names must begin with a letter.
* Names can also begin with $ and _ (but we will not use it in this tutorial).
* Names are case sensitive (y and Y are different variables).

 */
/**---------------PREMITIVE Data Types-------------------**/

// string
let firstName = "Zaid";
let lastName = "Amr";

//console.log(firstName, lastName);

let otherName = lastName;

//console.log(otherName);
lastName = "Basha";
//console.log(otherName);

//console.log(firstName[2]);

// Number

let age = 25;
//console.log(age);
let typeName = typeof age;
//console.log(typeName, typeof typeName);

// Boolean

let hasWife = true;
let hasKids = hasWife;
// console.log(hasWife, hasKids);
hasWife = false;
// console.log(hasKids);

age = 0; // bolean false
age = 73; // true
age = -1; // true
// '!' means 'not'

/*----------------*/
let firstValue = true;
let secondValue = "Samer";
let number1 = 0;
let number2 = 26;
let emptyString = "";

/**bolean operators:
 * &&
 * ||
 * !
 */

//console.log(Boolean(secondValue)); // true
//console.log(Boolean(number1)); // flase
//console.log(Boolean(number2)); // true
//console.log(Boolean(emptyString)); // flase

// 'undefined'

let variable;
//console.log(variable, typeof variable);

let test = variable;
//console.log(test);
variable = "HTML";
//console.log(test, variable);
//console.log(Boolean(test)); // false

// Null
let car = null;
//console.log(car, typeof car);
let bus = car;
//console.log(bus);
car = {
  model: "BMW",
  price: 15,
};
//console.log(bus);
//console.log(typeof car);

/**---------------Refernce (Object)-------------------**/

// Arrays

const array1 = [
    "Safwan",
    115,
    {
        hasWif: true,
        position: "Web developer",
        1:'me'
    },
    null
];

let numbers = [1, 2, 11, 258];

// console.log(array1[2]['1']);

// Object

let course1 = {
    subject: 'JavaScript',
    students: ['Talal', 'Safwan', 'Ahmad'],
    teacher: 'Kamal',
    numberOfdays: 180,
    cost: undefined,
    classRoom: null
};




    

