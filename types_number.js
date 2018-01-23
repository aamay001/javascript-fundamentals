// Number type
let intVar = 2;
let floatVar = 5.88;

// Values stored in two variables
console.log(`Value of intVar: ${intVar}`);
console.log(`Value of floatVar: ${floatVar}`);

// Same type for both variables : number
console.log(`Type of intVar: ${typeof(intVar)}`);
console.log(`Type of floatVar: ${typeof(floatVar)}`);

// Minimum and Maximum integer values in JS number type
console.log(`Minimum value in js number: ${Number.MIN_SAFE_INTEGER}`); // -9007199254740991
console.log(`Maximum value in js number: ${Number.MAX_SAFE_INTEGER}`); //9007199254740991

// Minimum and Maximum precision in JS number type
console.log(`Minimum value in js number: ${Number.MIN_VALUE}`); // 5e-324
console.log(`Maximum value in js number: ${Number.MAX_VALUE}`); // 1.7976931348623157e+308

// + and - infinity symbolic values
console.log(`+ infinity: ${Number.POSITIVE_INFINITY}`); // Infinity
console.log(`- infinity: ${Number.NEGATIVE_INFINITY}`); // -Infinity

// NaN symbolic value
console.log(`Not a number (NaN): ${Number.NaN}`); // NaN
console.log(`NaN value: ${Number('x')}`); // NaN



