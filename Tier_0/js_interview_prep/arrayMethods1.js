let array1 = [1, 2, 3, 4, 5]
let array2 = ['Jake', 'Henry', 'Helga']


let isArray = Array.isArray(array1)
console.log(isArray)// true
/*
.foreach = takes each index on an array to a function for each array index
*/
array1.forEach(indexNum => {
  console.log(indexNum)
})
/*
.push = adds one or more elements to the end of an arry and returns the new length of the array
*/
array1.push(6)

/*
.pop = removes the last element from an array and returns the removed element
*/
array1.pop()
//removes and returns the value 6

/*
.concat = used to merge two or more arrays, returns a new array
*/
let mergedArray = array1.concat(array2)
console.log(mergedArray);
//output: [ 1, 2, 3, 4, 5, 'Jake', 'Henry', 'Helga' ]

/*
.join = creates and returns a new string by concatenating all of the elements in an array, seperated by commas or a specified sparator sting
*/
let joinedArray = array1.join('-')
console.log(joinedArray)
//output: '1-2-3-4-5'

/*
.reverse = reverses an array first for last and last for first
*/
array1.reverse()
console.log(array1)
//output: [ 5, 4, 3, 2, 1 ]
array1.reverse()

/*
.shift = removes the first element of an array and returns it
*/
console.log(array2.shift())
//output: 'Jake'

/*
.unshift = adds one or more elements to the beginning of an array and return the new length of the array
*/
array2.unshift('Jake')
//output: 3 -- for the new length of the array

/*
.slice = returns a shallow copy of an array into a new array object, not changing the original array
*/
let slicedArray1 = array2.slice(0, 1)
console.log(slicedArray1)
// returns [ 'Jake' ]
let slicedArray2 = array2.slice(0, 2)
console.log(slicedArray2)
// returns [ 'Jake', 'Henry' ]
let slicedArray3 = array2.slice(1)
console.log(slicedArray3)
// returns [ 'Henry', 'Helga' ]

/*
.sort = converts the elements to strings and compares their sequence of UTF-16 values 
*/
var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
//output: Array ["Dec", "Feb", "Jan", "March"]

var array11 = [1, 30, 4, 21];
array11.sort();
console.log(array1);
//output: Array [1, 21, 30, 4]

let acendingArray = array11.sort((x, y) => x - y)
console.log(`acendingArray: ${acendingArray}`)
//output: acendingArray: 1,4,21,30


let decendingArray = array11.sort((x, y) => y - x)
console.log(`decendingArray: ${decendingArray}`)
//output: decendingArray: 30,21,4,1



/*
.splice = changes the context of the array by adding new values or removing them
array.splice(start, deleteCount, item1, item2, item3)
*/
months = ['March', 'Jan', 'Feb', 'Dec'];
months.splice(0, 1, 'TEST')
console.log(months)
//outout: [ 'TEST', 'Jan', 'Feb', 'Dec' ]
months = ['March', 'Jan', 'Feb', 'Dec'];
months.splice(1)
console.log(months)
//outpu: [ 'March' ]
months = ['March', 'Jan', 'Feb', 'Dec'];
months.splice(2, 1, 'This', 'is', 'a', 'test')
console.log(months)
//output: [ 'March', 'Jan', 'This', 'is', 'a', 'test', 'Dec' ]


