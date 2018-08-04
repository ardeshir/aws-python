// cmdline:   npx webpack --config webpack.config.js
// import _ from 'lodash';
import  { dep1 }  from "./dep1.js";
import  { add, minus, stored }  from "./calc.js";

//  Printing javascript modules over from ~/javascript/
import { Person } from './person.js';
import { checkID, greet, printP } from './utils.js';
import { HttpClient } from './http-client.js';
import { PostManager } from './post-manager.js';

let p = new Person("Ardeshir", "Sepahsalar", 47);

printP(p);
greet(p);
checkID(p);

let postManager = new PostManager(new HttpClient()) ;

postManager.printPosts(); 


function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = dep1();

  return element;
}

// document.body.appendChild(component());
var mydiv = document.getElementById('body-text');
mydiv.appendChild(component());

//stored(false)
add(1,2)
add(1,2)
minus(5,3)
add(3,3)
minus(8,4)
// stored(false)
add(5,3)
stored(false)