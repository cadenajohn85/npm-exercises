const generateNiceMessage = () => "Have a nice day!";
const myArray = [1,2,3,4,5];
const myProfile = {
    name: "John",
    age: 34,
    isMale: true
};

//Require
// module.exports = { generateNiceMessage, myArray, myProfile };

//Import
export default { generateNiceMessage, myArray, myProfile };

//Import separate exports

// export const generateNiceMessage = () => "Have a nice day!";
// export const myArray = [1,2,3,4,5];
// export const myProfile = {
//     name: "John",
//     age: 34,
//     isMale: true
// };