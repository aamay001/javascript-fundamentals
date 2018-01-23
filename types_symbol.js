// Create a new Symbol
let symVar = Symbol('some value');
console.log("Value of symVar: ", symVar);
console.log(`Type of symVar: ${typeof(symVar)}`);

let symVar2 = Symbol('some value');
console.log("Value of symVar2: ", symVar2);

// Compare without coercion
console.log(symVar === symVar2); // False

// Compare with coercion
console.log(symVar == symVar2); // False

const objWithSymProp = {};
objWithSymProp[symVar] = 'prop 1';
console.log('Value of objWithSymProp', objWithSymProp);

// Return correct value
console.log(`Value of objWithSymProp prop: ${objWithSymProp[symVar]}`); // prop1

// Even though symVar2 was initialized with the same Symbol argunemt, it is not the same as symVar
console.log(`Value of objWithSymProp prop: ${objWithSymProp[symVar2]}`); // undefined