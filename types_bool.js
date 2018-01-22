// Boolean value
let boolVar = true;
console.log(`boolVar: ${boolVar}`); // true

// Type of bool variable
console.log(`typeof(boolVar): ${typeof(boolVar)}`); // boolean

// Not a boolean value returns inverse result
console.log(`!boolVar: ${!boolVar}`); // false

// Make a decision
console.log('if (boolVar)');
if (boolVar) { // If the value of boolVar is true
  console.log('boolVar was true');
} else {
  console.log('boolVar was false');
}

console.log('if (!boolVar)');
if (!boolVar) { // If the value of boolVar is false
  console.log(`boolVar was false`);
} else {
  console.log('boolVar was true')
}