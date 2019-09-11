// const sayHello = () => {
//     console.log("Hello");
// };
//
// sayHello();

// Only exporting a single function from say-hello
// const message = require("./say-hello.js");
// console.log(message());

// Exporting multiple items from say-hello
// const message = require("./say-hello.js");
// console.log(message.generateNiceMessage());
// console.log(message.myArray);
//
// const myArray = message.myArray;
//
// for (const value of myArray) {
//     console.log(value);
// }
//
// console.log(message.myProfile.name);
// let gender;
// if (message.myProfile.isMale) {
//     gender = "male";
// } else {
//     gender = "female";
// }
// console.log(gender);

// Exporting multiple items & destructuring
// const { generateNiceMessage, myArray, myProfile } = require("./say-hello.js");
//
// console.log(generateNiceMessage());
// console.log(myArray[3]);
// console.log(myProfile.age);

// Importing instead of requiring
import utils from './say-hello';

console.log(utils.generateNiceMessage());
console.log(utils.myArray[1]);
console.log(utils.myProfile.name);



// Importing without using object name

// import { generateNiceMessage, myArray, myProfile } from './say-hello';
//
// console.log(generateNiceMessage());
// console.log(myArray[1]);
// console.log(myProfile.name);

