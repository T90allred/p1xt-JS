let friend = {
  name: 'Derek',
  age: 28,
  married: true,
  likes: [
    'futsal',
    'coding',
    'his wife'
  ]
}

console.log('Linked!')
console.table({ a: 1, b: 2 })
console.table(friend)
console.error('Mainframe error!')
console.warn('Just an warning, continue')
console.time('Time')
//
console.log('taking up time to show the console.time() usage')
console.log('taking up time to show the console.time() usage')
console.log('taking up time to show the console.time() usage')
console.log('taking up time to show the console.time() usage')
console.log('taking up time to show the console.time() usage')
console.log('taking up time to show the console.time() usage')
//
console.timeEnd('Time') //output = Time: 0.8549...ms

const obj2 = {
  name: 'Test',
  make: 'subara'
}

obj2.year = 1965;
console.log(obj2) //works fine

//obj2 = 'string'; //Throws an error

// Primitive Data Types: 
//stored directly in the location the variable accesses, 
//stored on the stack
/*
String
Number
Boolean
Null
Undefined
Symbols
*/
// Reference Data Types: 
//Accesed by reference, 
//Objects that are stored on the heap, 
//a pointer to a location in memory
/*
Arrays
Object Literals
Functions
Dates
Anything Else...
*/

// TYPE CONVERSION
let value;
//number to string
// String()
value = String(45)// '45', length = 2
value = String(4 + 4) // 8, length = 1
value = String(true) //'true', length = 4
value = String(new Date()) // 'Thu Dec 20 2018 10:24:50 GMT-0700 (Mountain Standard Time)', length = 58
// .toString()
value = (65).toString()
value = (true).toString()


//string to number
value = Number('45')//45, 45.00
value = Number(true)//1, 1.00
value = Number(false)//0, 0.00
value = Number(null)// 0, 0.00
value = Number('test')//Nan
value = Number([1, 2, 3])//Nan
value = Number({ a: 1, b: 2 })//Nan

value = parseInt(1.3)//1, 1.00 because we used parseInt it drops the decimal value
value = parseFloat(1.3)//1.3, 1.30 because we used parseFloat it keeps the decimal value


console.log(value)
console.log(value.toFixed(2))

// TYPE Coercion
const val1 = '1';
const val2 = 2;
const sum = val1 + val2
console.log(sum)// outputs: 12 because it concatinates the 1 and 2 to make '12'
console.log(typeof sum)//string


// MATH --------------------------------------------------------------------------------------------
const num1 = 100;
const num2 = 50;
let val;

val = Math.PI;
val = Math.E;
val = Math.round(1.05)// 1
val = Math.ceil(1.005)// 2
val = Math.floor(1.99)// 1
val = Math.sqrt(25)// 5
val = Math.abs(-5)// 5
val = Math.pow(8, 3)// 512
val = Math.min(4, 5, -9, 78)// -9
val = Math.max(4, 5, -9, 78)// 78
val = Math.random() * 10 + 1// returns a random float value between 1.0 and 10.99
val = Math.floor(Math.random() * 10 + 1)// returns a random whole number between 1 and 10

console.log(val);

const user = {
  firstName: 'Kent',
  lastName: 'Black',
  age: 28
}

for (const x in user) {
  if (user.hasOwnProperty(x)) {
    const element = user[x];
    console.log(`${x}: ${element}`)
  }
}

// WINDOW OBJECT ------------------------------------------------------------------------------------------------------------
//alerts
// alert("Alerting you")
//prompts
// prompt('Make some input.')
//confirm
// if (confirm('Sure?')) {
//   console.log('OK');
// } else {
//   console.log('NO');
// }
let height;
let width;

height = window.outerHeight; //get the height of the browser window
width = window.outerWidth;//get the width of the browser window

innerHeight = window.innerHeight; //get the height of the browser VIEWPORT
innerWidth = window.innerWidth;//get the width of the browser VIEWPORT
console.log(height, width, innerHeight, innerWidth)


// Template Literals --------------------------------------------------------------------------------------------
let name = 'Derek'
let age = '28'
let job = 'Software Guy'
let html;
function test() {
  return 'TESTING FUNC'
}

html = `
  <h1>HEY THERE</h1>
  <ul>
    <li class="item" id="first">${name}</li>
    <li class="item">${age}</li>
    <li class="item">${job}</li>
    <li class="item">${4 - 3}</li>
    <li class="item">${test()}</li>
    <li class="item">${age >= 16 ? 'Can drive' : 'Can\'t drive'}</li>
  </ul>
  <form>
    <input id="input" type="text">
    <div>
      <button id="addBtn">TEST</button>
    </div>
  </form>
`;

document.body.innerHTML = html;

// DOM stuff --------------------------------------------------------------------------------------------

console.log(window.location)
console.log(window.navigator)
let docThing;
docThing = document
docThing = document.all
docThing = document.all[1]
docThing = document.domain
docThing = document.URL
console.log(docThing)

//single element selectors
let domElement
// domElement = document.getElementById('first')
domElement = document.querySelector('#first')
domElement.className
domElement.style.background = 'tomato'
domElement.addEventListener('mouseover', () => {
  domElement.style.textAlign = 'center'
})
console.log(domElement)


//multiple element selectors
let domElements = document.querySelectorAll('li')
domElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.style.fontSize = '1.5em'
  })
})
domElements.forEach(el => {
  el.addEventListener('mouseleave', () => {
    el.style.fontSize = '1em'
  })
})
console.log(domElements)


// DOM TRAVERSAL --------------------------------------------------------------------------------------------
let list = document.querySelector('ul')
let listItem = document.querySelector('li')
val;

val = list.childNodes //returns a nodeList of all children including line breaks
val = list.children //returns an HTMLcollection of all children elements
//make an array from an HTMLcollection
let childArr = Array.from(val)
console.log(`childArr: `, childArr)
val = list.firstChild;//node
val = list.firstElementChild; //HTML element
val = list.lastChild;//node
val = list.lastElementChild;//HTML element
val = list.childElementCount;//HTML element
val = list.parentNode;//node
val = list.parentElement;//HTML element
val = list.nextSibling;//node
val = list.nextElementSibling;//HTML element
val = list.previousSibling;//node
val = list.previousElementSibling;//HTML element

console.log(`val: `, val)

// element creation --------------------------------------------------------------------------------------------
const newLI = document.createElement('li')
newLI.className = 'item';
newLI.id = 'the-one';
newLI.setAttribute('title', 'New LI');
newLI.appendChild(document.createTextNode('BLAHG'));
document.querySelector('ul').appendChild(newLI)

// element replacement --------------------------------------------------------------------------------------------
const newHeader = document.createElement('h1')
newHeader.id = 'the-header'
newHeader.appendChild(document.createTextNode('NEW HEADER BY REPLACING'))
const oldHeader = document.querySelector('h1')
const parent = oldHeader.parentElement;
parent.replaceChild(newHeader, oldHeader)


// element removal --------------------------------------------------------------------------------------------
list = document.querySelector('ul')
listItems = document.querySelectorAll('li')
console.log(listItems)

listItems[0].remove()
//or
list.removeChild(listItems[1])

// CLASSES AND ATTRIBUTES --------------------------------------------------------------------------------------------
list.className;//returns string of classes
list.classList;//returns DOMtokenList with index like an array
list.classList[0];
list.classList.add('TEST')
list.classList.remove('TEST')

list.getAttribute('href')
list.setAttribute('href', 'http://google.com')
list.hasAttribute('href')//returns boolean
list.removeAttribute('href')

// Event listeners and Event Object --------------------------------------------------------------------------------------------
const mouseEvents = `
click
dblclick
mousedown
mouseup
mouseenter
mouseover
mouseleave
mouseout
mousemove
`
const inputAndFormEvents = `
keydown
keyup
keypress
focus
blur
cut
paste
input = all the above input events
change = used to pickup on changes happening to dropdowns
submit
`

const pageHeader = document.querySelector('h1')

pageHeader.addEventListener('mouseover', e => {
  e.preventDefault()
  //event target
  e.target.id;
  e.target.classList;
  e.target.className;
  e.target.innerHTML;
  //event type
  e.type
  //event timestamp
  e.timeStamp
  //x and y coordinates relative to window object
  e.clientX
  e.clientY
  //x and y coordinates relative to the element
  e.offsetX
  e.offsetY


  console.log('The claw...')
})

pageHeader.addEventListener('click', handleHeaderClick)
function handleHeaderClick(e) {
  e.preventDefault()
  console.log('Working!')
}

// Event Bubbling/Delegation --------------------------------------------------------------------------------------------
const likes = document.querySelectorAll('.item')
document.body.addEventListener('click', deleteItem);
function deleteItem(e) {
  if (e.target.classList.contains('item')) {
    console.log(e.target)
    e.target.parentElement.remove(); //if any li is clicked the whole ul gets deleted.
  }
}

console.log(likes)

// Local  and Session Storage --------------------------------------------------------------------------------------------
//set local storage item
//local storage stuff persists until manually cleared out
localStorage.setItem('name', 'john')
localStorage.setItem('age', '25')
localStorage.setItem('other', 'test')
//set session storage item
//session storeage stuff persists until the browser session is closed
sessionStorage.setItem('name', 'Derek')
localStorage.removeItem('other')
const localName = localStorage.getItem('name')
// localStorage.clear();// clears all variables in local storage
document.querySelector('form').addEventListener('submit', e => {
  const task = document.querySelector('#input').value
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks))

  e.preventDefault()
})

const tasks = JSON.parse(localStorage.getItem('tasks'))
tasks.forEach(task => {
  console.log(task)
})
