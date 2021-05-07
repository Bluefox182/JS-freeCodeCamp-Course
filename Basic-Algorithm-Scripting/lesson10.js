// Boo who

/* 
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false. */

// SOLUTION
function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);

// CODE EXPLANATION
/* Uses the operator typeof to check if the variable is a boolean. If it is, it will return true. 
Otherwise, if it is any other type it will return false. */
