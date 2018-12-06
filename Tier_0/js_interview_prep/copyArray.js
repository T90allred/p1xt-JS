// COPY ARRAYS
/*
SHALLOW COPY = a first level copy of an array/object, does not copy array/objects within an array/object
*/
let shallowCopy = [...array1]
console.log(shallowCopy)
//output: [ 1, 2, 3, 4, 5 ]
/*
DEEP COPY = all level copy of an array/object, inluding other arrays/objects inside the array/object
*/
let deepArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

let deepCopy = JSON.parse(JSON.stringify(deepArray))
console.log(deepCopy)
//output: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]