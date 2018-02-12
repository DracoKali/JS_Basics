var foo;                  // 'foo' is a declaration, it's global and gets hoisted
function magic() {         // 'magic()' also gets hoisted to the top
    var foo;              // here 'foo' is declared within 'magic()' and gets hoisted
    foo = "hello world";  // we assign a value to our function scoped 'foo'
    console.log(foo);     // we log it as 'hello world'
}
foo = "bar";              // here, we assign a value to the global 'foo'
magic();                  // magic is called, the first console.log runs
console.log(foo);         // finally we log the global foo

var magicalUnicorns; // the declaration gets hoisted to the top of the scope by itself
console.log(magicalUnicorns); // we log it as undefined
magicalUnicorns = "awesome"; // the assignment stays exactly where it was

// Key Rules of Hoisting
// • Variable declarations rise to the top of their scope like hot air balloons.

// • Functions create their own scope and act like cages, preventing declarations from rising out.

// • Assignments, or = signs, act like anchors.They stay put, no matter how the code is rearranged.

// • let and const will throw an error if called before they get assigned.