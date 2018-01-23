// Calling a function declared below; works because of hoisting
print(declaredFunction());

// Function declaration
function declaredFunction () {
    print('declared function was called');
    return 'returned from declaredFunction';
}

// Calling function expression will not work becuase it is not hoisted
// funcExpression is defined at line 19
try {
    print(funcExpression()); // causes error
} catch (err) {
    console.error(err.message);
}

// Function expression
var funcExpression = function () {
    print('called function expression');
    return 'returned from funcExpression';
}

// calling after definition is okay
print(funcExpression());

// ES6 style function expression
const es6FunctionExpression = () => {
    print('called es6StyleFunctionExpression');
    return 'returned from es6StyleFunctionExpression';
}

print(es6FunctionExpression());

// Functions can have parameters
const add2 = (num) => {
    return num + 2;
}

print(add2(5)) // return 7

function print(text) {
    console.log(text);
}

