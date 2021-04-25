// Practice comparing different values

/*
In the last two challenges, we learned about the equality operator (==) and 
the strict equality operator (===). Let's do a quick review and practice 
using these operators some more.

If the values being compared are not of the same type, the equality operator 
will perform a type conversion, and then evaluate the values. However, the 
strict equality operator will compare both the data type and value as-is, 
without converting one type to the other. */

// Example

3 == "3"; // TRUE
// returns true because JavaScript performs type conversion from string to number.
3 === "3"; // FALSE
// returns false because the types are different and type conversion is not performed.

/*Note: In JavaScript, you can determine the type of a variable or a value with 
the typeof operator, as follows: */

typeof 3; // returns the string number
typeof "3"; //returns the string string.

/* 
The compareEquality function in the editor compares two values using the 
equality operator. Modify the function so that it returns the string Equal 
only when the values are strictly equal. */

// Setup
function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
