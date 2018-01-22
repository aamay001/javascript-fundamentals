// Absense of a value.
let nullVar = null;
console.log(`nullVar: ${nullVar}`); // null

// Type of null value
console.log(`typeof(nullVar): ${typeof(nullVar)}`); // Object

// Why is the above important?
let objVar = {};
if ( typeof(objVar) === typeof(nullVar) ) { // Type Comparisons
  console.log('Type of objVar is equal to Type of nullVar');
}

console.log(`typeof undefined: ${typeof(undefined)}`);      // "undefined"
console.log(`null === undefined: ${null === undefined}`);   // false
console.log(`null  == undefined: ${null  == undefined}`);   // true
console.log(`null === null: ${null === null}`);             // true
console.log(`null == null: ${null == null}`);               // true
console.log(`!null: ${!null}`);                             // true