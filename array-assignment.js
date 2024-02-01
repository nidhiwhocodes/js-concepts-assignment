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

// slice, splice

// console.log("A ", myArr);



// const myn1 = myArr.slice(5,7)

// console.log(myn1);
// output: [3,5]


// const myn2 = myArr.splice(1, 3)
// console.log(myn2);

// slice does not change the original arr but in splice the original arr changes and splice part cut down from the original arr

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const indianHero=["shaktiman","nagaraj"]
// ["thor", "Ironman", "spiderman","superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// output:[ 'thor', 'Ironman', 'spiderman' ]
// console.log(marvel_heros[2][1]);
// output: p

const allHeros = marvel_heros.concat(indianHero)

// console.log(allHeros);
// output:[ 'thor', 'Ironman', 'spiderman', 'shaktiman', 'nagaraj' ]


// spread operator

const all_new_heros = [...marvel_heros, ...dc_heros,"nidhi",...indianHero,"shivani"]

// console.log(all_new_heros);
// output:[
//     'thor',      'Ironman',
//     'spiderman', 'superman',
//     'flash',     'batman',
//     'nidhi',     'shaktiman',
//     'nagaraj',   'shivani'
//   ]
  


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]],"string"]

// console.log(typeof another_array)
// output: object 

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);
// output:[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5, 'string' ]



// console.log(Array.isArray("Jitesh"))

// console.log(Array.isArray(another_array))

// console.log(Array.from("jitesh"))

// console.log(Array.from(another_array))

// console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));
// console.log(Array.of(dc_heros,marvel_heros));



// assignment
// write three ways of adding the two arrays
// 1.concat() method 
// 2. spread operator
// 3. Array.of()