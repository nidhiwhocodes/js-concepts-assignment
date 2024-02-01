// I will complete my js concept assignment
// i understand the branch concepts
// new commit 
// can not go without commiting

// String.repeat()
// The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string
// example:-
const mood =" Angry ";
// console.log(mood.repeat(3));
// output: Angry Angry Angry

// string.search()
// to return a position of string value in the form of index



const name = "jitesh"
const age = 22

// console.log(name + " "+ age );
// output:- jitesh 22
         
// console.log(`My name is ${name} and age is ${age}`);

const gameName = new String('Nidhi Ponnalwar')

// console.log(gameName[4]);
// output: i
// console.log(gameName.__proto__);

// console.log(gameName.length);
// output: 15

// console.log(gameName.toUpperCase());
// output: NIDHI PONNALWAR

// console.log(gameName.toLowerCase());
// output: nidhi ponnalwar

// console.log(gameName.__proto__.toUpperCase());
// console.log(gameName.charAt(3)); // returns the character of the specific index 
// output: h
// console.log(gameName.indexOf('N')); //returns the position of string value
// output: 0

// let obj1={
//     obj2:{
//         toUpperCase:function
//     }
// }

// const newString = gameName.substring(0,gameName.length); //Returns the substring at the specified location within a String object.
// const newString = gameName.substring(6,15);
// console.log(newString);
// output: Nidhi ponnalwar
// output: ponnalwar 

// const anotherString = gameName.slice(5,15) //Returns a section of a string.
// console.log(anotherString);
// output: ponnalwar

const newStringOne = "   jiddi";
// console.log(newStringOne);
// console.log(newStringOne.trim()); // removes  the space in string 
// output:jiddi

const url = "https://jitesh.com/jitesh%20kumar"

// const gameName = new String('Nidhi Ponnalwar')
console.log(gameName.replace('Ponnalwar', 'Jitesh Kumar')) 

let email="jitesh123-kumar@.com"
// console.log(email.includes("-")) // if there is value present in this string returns true otherwise returns a false.
// output: true

// console.log(email.split("h"));//Split a string into substrings using the specified separator and return them as an array.
// output: [ 'jites', '123-kumar@.com' ]

