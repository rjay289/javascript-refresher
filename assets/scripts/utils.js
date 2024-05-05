//#1
// //export makes it so that this can now be accessed beyond this file
// //we can export many values declared this way
// export let apiKey = "radia1234";

// //just exporting a value. we're basically saying the default value
// //this file should export is this. also only 1 default value per file.
// export default "radia";

// //example to show how to export multiple values
// export let date = "idk";
// export let text = "whatElse";

// //fyi you can export/import functions

// //arrow functions for arrow functions, example:
// export default (userName, message) => {
//   console.log("ola!");
//   return userName + message;
// };

// //Method 1:Declare function separately then export
// function test(a) {
//   return a + ", noice!";
// }

// export { test };

// //Method 2:Declare while exporting
// export function test2(a) {
//   return a + ", noice!2";
// }
