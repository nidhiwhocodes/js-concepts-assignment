const score = 40
// console.log(score);
// output: 40

const balance = new Number(100.46)
// console.log(balance);

// console.log(balance.toString().length); //output: 6
// console.log(balance.toFixed(1)); //output: 100.5

const otherNumber = 123.564 

// console.log(otherNumber.toPrecision(4)); //output:123.6

const hundreds = 1000000000000
// console.log(hundreds.toLocaleString()); //output:10,00,00,00,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-8)); // output: 8
// console.log(Math.round(2.5)); //output: 3
// console.log(Math.ceil(10.78)); //output: 11
// console.log(Math.floor(7.1299999)); //output: 7
// console.log(Math.min(4, 3, 6, 8,12,13,4,)); //output: 3
// console.log(Math.max(4, 3, 6, 8)); //output: 8

// console.log(Math.random());  //Returns a pseudorandom number between 0 and 1.
//(0-1)

// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 1
const max = 6

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)