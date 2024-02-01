let obj={
    name:"nidhi",
    age:24,
    isMarried:false
};

let convertToStr= JSON.stringify(obj)
// console.log( convertToStr)
// console.log(typeof convertToStr) // string
// output:{"name":"nidhi","age":24,"isMarried":false}

let covertToObj= JSON.parse(convertToStr)
console.log(covertToObj) // output: { name: 'nidhi', age: 24, isMarried: false } 
// console.log(typeof covertToObj) // object

// console.log(JSON.parse("Nidhi")) // not possible will return error