'use strict';

function Animal(voice){
    this.voice = voice || '...grunt'
}

Animal.prototype.speak = function() {
    console.log(this.voice)
}

function Cat(name, color) {
    Animal.call(this, 'Meoww')
    this.name = name
    this.color = color
}

Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat 

var fluffy = new Cat('Fluffy', 'White')

fluffy.speak()
console.log(fluffy)
console.log(fluffy.__proto__)
console.log(fluffy.__proto__.__proto__)

/*
var arr = new Array('red', 'blue', 'green')
Object.defineProperty(Array.prototype, 'last', { get: function() {
   return this[this.length-1] 
}})
var last = arr.last; 
var arr2 = ['one', 'two','three','four'];
display(last);
display(arr.last);
display(arr2.last); 
*/

/* var cat = {
  name: { first: 'Fluffy', last: 'LaBeouf' },
  color: 'White',
  'Eye Color': 'Green'
}
Object.defineProperty(cat, 'fullname', {
     get: function() {
       return this.name.first + ' ' + this.name.last 
     }, 
     set: function(value) {
       var nameParts = value.split(' ');
       this.name.first = nameParts[0];
       this.name.last  = nameParts[1];
     }
}) */

// To prevent it from being changed, you'll need to freeze the object
// Object.freeze(cat.name)  <--- now that will not let you set cat.name
// Object.defineProperty(cat, 'name', { writable: false})
// Setting enumerable to false will cause the object property not to be listed.
// Object.defineProperty(cat, 'name', {enumerable: false})
// display(Object.getOwnPropertyDescriptor(cat, 'name'))

// cat.name.first = "Scratchy"
// display(cat.fullname)
// display(cat.name)
// for ..in  loop lets you loop each property of any object

/* cat.fullname = 'Shark Tank';
display(cat.fullname)

for( var propertyName in cat) {
  display(propertyName + ': ' + cat[propertyName])
}

display(JSON.stringify(cat))
*/

/* class Cat {
   constructor(name, color) {
     this.name  = name 
     this.color = color 
   }
   
   speak() {
     display("Meeoww")
   }
}

var cat = new Cat("Wild", "White");
display(cat);
cat.speak();

*/


/* function Cat(name, color) {
  this.name   = name;
  this.color  = color;
  
}
var cat = new Cat('Fluffy', 'White'); 
display(cat); 
*/

/* var cat = Object.create(Object.prototype,
{
 name: {
   value: 'Ms Strinky',
   enumerable: true,
   writable: true,
   configurable: true
 },
 color: {
   value: 'Blue',
   enumerable: true,
   writable: true,
   configurable: true
  }
})

display(cat); */

