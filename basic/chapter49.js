// Global Scope and Functions

/*


In JavaScript, scope refers to the visibility of variables. 
Variables which are defined outside of a function block have Global scope. 
This means, they can be seen everywhere in your JavaScript code.

Variables which are used without the var keyword are automatically created 
in the global scope. This can create unintended consequences elsewhere in 
your code or when running a function again. You should always declare 
your variables with var.
*/

// Example

var myGlobal = 10;

function fun1() {
  // This is our mistake
  oopsGlobal = 5;
}

// Function
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
