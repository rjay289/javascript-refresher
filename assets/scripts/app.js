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

//example to show in a function argument you can set a default value too
function greetUser(userName, message = "wassup") {
  console.log(userName);
  console.log(message);
}

greetUser("radia");
//you can overwrite the default
greetUser("mate", "yoo");

//Note: due to some issues in package.json file i have removed the '--open' from scripts->start
