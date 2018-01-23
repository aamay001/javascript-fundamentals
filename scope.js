// Global Scope
let count = 0;
if ( count < 1) { // Local Scope inside of if statement
    count++;
}

for ( let i = 0; i < 2; i++ ) {
    // Local scope inside of loop
}

try {
    print(5); // causes error because print is not defined in global scope
} catch (err) {
    console.log(err.message);
}

scopeExample(); // Calling is okay becuase function is hoisted to top of global scope

function scopeExample() {
    // Local Scope Inside of function
    let controller = false;
    if ( !controller ) {
        // Local scope inside of if
        controller = true; // Can be accessed because it's nested inside of function scope
        count++; // From global scope on line 3
    }

    print(controller); // okay because inside of local scope

    function print(val) {
        console.log(val)
    }
}

controller = true; // Creates a global variable; does not access line 21 variable