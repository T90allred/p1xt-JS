let array1 = [1, 2, 3, 4, 5, 6]
let array2 = ['Jack', 'Max', 'Jared', 'Ashley', 'Gilbert']
let deepArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
let complexArray = [
  1,
  2,
  [3, 4, 5],
  6
]
/**
.map = creates a new array with the results of your defined function on each element
 */
let map1 = array1.map(el => {
  return el + 1;
})
console.log(map1)
//output: [ 2, 3, 4, 5, 6, 7 ]
let map2 = deepArray.map(el => {
  return el.map(el => {
    return el * 2
  })
})
console.log(map2)
//output: [ [ 2, 4, 6 ], [ 8, 10, 12 ], [ 14, 16, 18 ] ]
let map3 = complexArray.map(el => {
  if (typeof (el) == "object") {
    return el.map(el => {
      return `$${el}`
    })
  } else {
    return `$${el}`
  }
})
console.log(map3)
//output: [ '$1', '$2', [ '$3', '$4', '$5' ], '$6' ]


/**
.filter = creates a new array with elements that pass the test defined in your proviced function
*/
let filter1 = array1.filter(el => {
  return el <= 3
})
console.log(filter1)
//output: [ 1, 2, 3 ]

function checkNameLength(name) {
  return name.length <= 4
}
let filter2 = array2.filter(checkNameLength)
console.log(filter2)
//output: [ 'Jack', 'Max' ]

/**
.reduce = runs your reducer function on each element in the array, results in a single output value
*/
let reducer1 = array1.reduce((prev, curr) => {
  return prev + curr
})
console.log(reducer1)
//output: 21

/**
.some = checks an array for at least one element to pass the test provided in your function
*/
let someArray1 = array1.some(el => {
  return el % 2 === 0
})
console.log(someArray1)
//output: true
let someArray2 = array2.some(el => {
  return el === "No name"
})
console.log(someArray2)
//ouput: false (because we dont have a "No name" value in array2)


/**
.every = tests all elements in the array agains the provided function to see if all pass the test
*/
let everyArray1 = array1.every(el => {
  return el < 20
})
console.log(everyArray1)
//output: true (all values in array1 are less than 20)

/**
.find = returns the FIRST element that passes the test provided in your function
*/
let findArray1 = array2.find(el => el === "D")
console.log(findArray1)
//output: undefined (we dont have a "D" in array2)
let findArray2 = array2.find(el => el === "Jack")
console.log(findArray2)
//output: "Jack"

/**
.findIndex = return the index of the element that passes the test provided in your function, return -1 if test is never passed
*/
function findTheThing(thing) {
  return thing === "Max"
}
let findIndexArray1 = array2.findIndex(findTheThing)
console.log(findIndexArray1)
//output: 1 (Max is found in array2 at index 1)

/**
.indexOf = returns the first index where an element can be found, or returns -1 if not found
 */
let indexOfArray1 = array2.indexOf('Gilbert')
console.log(indexOfArray1)
//output: 4 (Gilbert is found in array2 at index 4)
let indexOfArray2 = array2.indexOf('Jeremy')
console.log(indexOfArray2)
//output: -1 (Jeremy was not found)

/**
.includes = returns true or false depending in the array includes a certain element
*/
let includesArray1 = array2.includes('Max')
console.log(includesArray1)
//output: true
