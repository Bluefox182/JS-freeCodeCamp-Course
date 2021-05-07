// Falsy Bouncer

/* Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean. */

function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);

/* PROBLEM EXPLANATION
Remove all falsy 2.1k values from an array. */

/* HINTS

Hint 1
Falsy is something which evaluates to FALSE. There are only six falsy values in JavaScript: 
undefined, null, NaN, 0, “” (empty string), and false of course.

Hint 2
We need to make sure we have all the falsy values to compare, we can know it, maybe with a 
function with all the falsy values…

Hint 3
Then we need to add a filter() with the falsy values function… */

// CODE EXPLANATION
/* The Array.prototype.filter method expects a function that returns a Boolean value which 
takes a single argument and returns true for truthy 1.7k value or false for falsy 2.1k value. 
Hence we pass the built-in Boolean function. */
