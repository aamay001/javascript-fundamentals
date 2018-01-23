// Global Scope
var count = 0; // This variable is defined in the global scope

if (count < 1) { // Local Scope inside of if statement
    count++;
}

for ( let i = 0; i < 2; i++ ) {
    // Local scope inside of loop
}

try {
    print(5); // causes error because print is not defined in global scope (defined on line 31)
} catch (err) {
    console.log(err.message);
}

scopeExample(); // Calling is okay becuase function is hoisted to top of global scope

function scopeExample() {
    // Local Scope Inside of function
    let controller = false;
    if (!controller) {
        // Local scope inside of if
        controller = true; // Can be accessed because it's nested inside of function scope
        count++; // From global scope on line 2
    }
    print(controller); // okay because inside of local scope
    function print(val) {
        console.log(val)
    }
}

try {
    console.log(controller) // throws error bc it does not exist in the current execution context
} catch (err) {
    console.error(err.message);
}
controller = true; // Creates a global variable; is not line 22 variable