//#2
// //importing not default value apiKey here for example (js is case sensitive)
// import { apiKey } from "./utils.js";
// console.log(apiKey);

// //importing default value. you assign a name to it here
// import myName from "./utils.js";
// console.log(myName);

// //Method 1 of importing multiple values: listing the names of values we want
// // import { date, text } from "./utils.js";
// // console.log(date);
// // console.log(text);

// //Method 2 of importing multiple values: bring the whole file as an object
// import * as utils from "./utils.js";
// console.log(utils.date);
// console.log(utils.text);

// //'as' can be used for aliases
// import { date as DATE } from "./utils.js";
// console.log(DATE);

// //example to show in a function argument you can set a default value too
// function greetUser(userName, message = "wassup") {
//   console.log(userName);
//   console.log(message);
// }

// greetUser("radia");
// //you can overwrite the default
// greetUser("mate", "yoo");

// //Note: due to some issues in package.json file i have removed the '--open' from scripts->start

// //because it was exported as default we just set a name for the anonymous function here
// import arrowFunction from "./utils.js";
// console.log(arrowFunction("radia", ", newbie here lol"));

// //import for Method 1:
// import { test } from "./utils.js";
// console.log(test("yoo"));

// //import for Method 2:
// import { test2 } from "./utils.js";
// console.log(test2("yoo"));

// //2 ways of making objects:
// //Method 1:
// const user = {
//   name: "radia",
//   age: 22,
//   //objects can contain functions:
//   greet() {
//     console.log("Hi!");
//   },
// };

// user.greet();
// console.log("I am " + user.name + ". I am " + user.age + " years old.");

// //Method 2:
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Helo!");
//   }
// }

// const userNew = new User("rad", "1");
// console.log(userNew);
// userNew.greet();

const myName = ["R", "A", "D"];
console.log(myName[2]); //will return value at that place in array

myName.push("I");
myName.push("A");
console.log(myName); //will return array
//findIndex can take in arrow function with at least 1 argument
const index = myName.findIndex((item) => {
  return item === "R";
});
console.log(index); //will return actual index

//shortened the arrow function
const indexNew = myName.findIndex((item) => item === "Z");
console.log(indexNew); //will return error value

const myNameEdited = myName.map((item) => item + "!");
console.log(myNameEdited); //will return all array elements plus a "!" with each
//output looks like this: ['R!', 'A!', 'D!', 'I!', 'A!']

//in arrow function enclosing {} in parantheses tells we are returning an object
const myNameEditedAgain = myName.map((item) => ({ text: item + "?" }));
console.log(myNameEditedAgain); //will return array of objects
//output looks like this: [Object, Object, Object, Object, Object]
//each object will have key 'text'
