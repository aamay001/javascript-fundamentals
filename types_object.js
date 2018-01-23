// Using constructor
let objVar = new Object();
objVar.prop1 = 'property 1';
objVar.prop2 = 2;
console.log("Value of objVar: ", objVar);

// Using object initializer
let objVar2 = {
  prop1: 'property 1',
  prop2: 2,
  prop3: false,
  print: function() {
    console.log("Value of objVar2: ", this);
  }
};
objVar2.print(); // Call print method to print itself; this is the reference to itself

// Properties can be access bracket notation; use string of name of property
console.log(`Value of prop1 in objVar2: ${objVar2['prop1']}`);
console.log(`Value of prop2 in objVar2: ${objVar2['prop2']}`);

// Objects can be nested
let objVar3 = {
  nestedObj: {
    prop1: 'nestedObj Prop 1'
  },
  prop1: 'prop1 of objVar3',
  prop2: false
};
console.log("Value of objVar3 with nested object: ", objVar3);

// Model object sample
let Car = {
  color: 'white',
  make: 'Tesla',
  model: 'S'
};


