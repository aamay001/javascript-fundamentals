// 3 Ways to create strings
let stringVar1 = 'Single quoted string';
let stringVar2 = "Double quoted string";
let stringVar3 = `Back tick string`; // Also called a template strings / expression interpolation

// Values
console.log(`stringVar1 value: ${stringVar1}`);
console.log(`stringVar2 value: ${stringVar2}`);
console.log(`stringVar3 value: ${stringVar3}`);

// Type check
console.log(`Type of stringVar1: ${typeof(stringVar1)}`); // string
console.log(`Type of stringVar2: ${typeof(stringVar2)}`); // string
console.log(`Type of stringVar3: ${typeof(stringVar3)}`); // string

// Sting Concatenation
let concatendatedString = stringVar1 + ' concatenated to literal string';
console.log(concatendatedString); // Single quoted string concatenated to literal string

let concatendatedString2 = stringVar1 + ' concatendated to ' + stringVar2;
console.log(concatendatedString2); // Single quoted string concatenated to Double quoted string

// String template concatenation
let templateStringConcat = `${stringVar3} concatendated to ${stringVar1} using string template`;
console.log(templateStringConcat); // Back tick string concatendated to Single quoted string using string template

// You can also use concat  method to concatenate strings
let concatMethodString = stringVar1.concat(' ', stringVar2, ' via concat method');
console.log(`Value of stringVar1: ${stringVar1}`); // Note, stringVar1 is not modified; strings are immutable
console.log(`Value of concatMethodString: ${concatMethodString}`);
//Single quoted string to Double quoted string via concat method


