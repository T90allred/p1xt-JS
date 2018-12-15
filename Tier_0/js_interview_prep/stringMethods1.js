let string1 = 'Getting to know JS string functions'
let string2 = 'is awesome'
/**
.charAt = returns a the resulting character at the given index
 */
let charAtStr = string1.charAt(0)
console.log(charAtStr);
//output: 'G'

/**
.charCodeAt = returns an integer between 0 and 65535 representing the UTF-16 (char code value)
 */
let charcodeAtStr = string1.charCodeAt(5)
console.log(charcodeAtStr);
//output: 110 (110 is the char code for 'n' and 'n' is found at index 5 in the string)


/**
.concat = concatenates the string arguments to the calling string and returns a new string
*/
let combined1 = string1.concat(' ', string2, '!')
console.log(combined1)
//output: Getting to know JS string functions is awesome!

/**
.endsWith = determines whether a string ends with the characters of a specified string, returns boolean
*/
let endsWithStr = string2.endsWith('awesome')
console.log(endsWithStr)
//outout: true
let endsWithStr1 = string2.endsWith('z')
console.log(endsWithStr1)
//outout: false


/**
.fromCharCode = lives on the String object. returns a string created from the passed UTF-16 code units
*/
console.log(String.fromCharCode(72, 101, 121))
//output: 'Hey'

/**
.includes = determines if one string is provided in another one, returns a boolean
*/
let includesStr = string1.includes('functions')
console.log(includesStr)
//output: true


/**
.indexOf = returns the index within the string calling the method. returns only the first occurrence. 
  returns -1 if not found
*/
let indexOfStr = string2.indexOf('awesome')
console.log(indexOfStr)
//output: 3 ('awesome' starts at index 3 in string2)

/**
.lastIndexOf = returns the last occurrence of the supplies string in a given string, returns -1 if not found
*/
let lastIndexOfStr = string1.lastIndexOf('JS')
console.log(lastIndexOfStr)
//output: 16

/**
.match = returns matches from a string specified in a regex
*/
let regex = /[A-Z]/g;
let matched = string1.match(regex)
console.log(matched)
//outout: [ 'G', 'J', 'S' ]

/**
.repeat = makes and returns a new string that contains the specified number of copies of the string on 
  which it was called
*/
let repeatedStr = string2.repeat(3)
console.log(repeatedStr)
//output: 'is awesomeis awesomeis awesome'

/**
.replace = takes a sting or regex as first argument then a string or function to be called for each 
 match of the first parameter and replaces it (if the second argument is a string only the first 
 instance will be replaced) will not mutate old string.
*/
let replaceStr = 'The little boy hit the little target with a little gun.'
let replaceStrNew = replaceStr.replace(/little/gi, 'BIG')
console.log(replaceStrNew)
//output: The BIG boy hit the BIG target with a BIG gun.

/**
.search = searches a string for a match of the regex and this string object
  only returns the first instance 
*/
let searchStr = "This is a test, to find a special. Thing!"
let found = searchStr.search(/[^\w\s]/g)
console.log(found) // only returns the index number
//output: 14
console.log(searchStr[found]) // to see what the charater actually was
//output: ,


 /**
.slice = 
 */


 /**
.split = 
 */


 /**
.startsWith = 
 */


 /**
.substring = 
 */


 /**
.toLowerCase = 
 */


 /**
.toUpperCase = 
 */


 /**
.trim = 
 */

