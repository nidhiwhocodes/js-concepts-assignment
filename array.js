// array

const myArr = [3,0,1,2,0,3,5,0,4,"false",'813']
const myHeors = ["shaktiman", "naagraj",["jitesh","nidhi"]]

// myHeors[1]="jitesh"
// console.log(myHeors)
// output: [ 'shaktiman', 'jitesh', [ 'jitesh', 'nidhi' ] ]

// console.log(myArr[myArr.length-6]);
// output: 3

// console.log(myHeors[1][5])
// output: a

// console.log(myHeors[2][1][0])
// output: n 

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[1]);
// output: 2

// Array methods

// myArr.push(6); //Appends new elements to the end of an array, and returns the new length of the array.
 

// myArr.pop(); //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.



// myArr.unshift(9) //Inserts new elements at the start of an array, and returns the new length of the array.


// myArr.shift() //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// myArr.pop().shift()  // not possible
// myArr.push(7).unshift(-1)



// console.log(myArr.includes(9)); //Determines whether an array includes a certain element, returning true or false as appropriate
// output: false
// console.log(myArr[myArr.length-1].includes(3))
// output: true

// console.log(myArr.indexOf("false"));
// output: 9

const newArr = myArr.join() //Adds all the elements of an array into a string, separated by the specified separator string.

// console.log( typeof myArr.join())
// output: string

// console.log(myArr);
// console.log( newArr);


