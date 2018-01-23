// Variables can be declared using:

// let has block level scope; no hoisting
let var1 = 1;

// var will have block level scope if inside {} or global if not inside {}; hoisted within scope
var var2 = 2;

// const block level scope, no hoisting; is a constant variable
// cannot be reassigned once defined; object properties can be changed!!!
const var3 = 3;

// global scope; hoisted
var4 = 4;

// Scope level variable
{
  let var6 = 32;
  console.log(var6);
}

try {
  console.log(var6); // referece error because outside of {} scope
} catch (err) {
  console.log(err.message);
}

// Hoisting example
var5 = 'assigned';
console.log(var5);
var var5 = 'hoisted';
console.log(var5);

/*
  Interpreation of above:
  var var5;
  var5 = 'assigned';
  console.log(var5); // 'assigned
  var5 = 'hoisted';
  console.log(var5); // hoisted
*/
