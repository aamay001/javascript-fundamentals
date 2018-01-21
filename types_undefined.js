// Undefined Variable
let undefinedVariable;
console.log(`Type of undefinedVariable: ${typeof(undefinedVariable)}`);

// Undefined function parameters
const undefinedParameters = (num1, num2) => {
    console.log(`Type of num1: ${typeof(num1)}`);
    console.log(`Type of num2: ${typeof(num2)}`);
};
undefinedParameters();

// Default return value of a function
const returnNothing = () => {
    return;
}
console.log(`Type of returnNothing return value: ${typeof(returnNothing())}`);







