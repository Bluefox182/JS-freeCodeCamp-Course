// Comparison with the Greater Than Or Equal To Operator

/* The greater than or equal to operator (>=) compares the values of two numbers. 
If the number to the left is greater than or equal to the number to the right, it 
returns true. Otherwise, it returns false.

Like the equality operator, the greater than or equal to operator will convert 
data types while comparing. */

// Examples
6 >= 6; // TRUE
7 >= "3"; // TRUE
2 >= 3; //FALSE
"7" >= 9; // FALSE

// Exercise

function testGreaterOrEqual(val) {
  if (val >= 20) {
    // Change this line
    return "20 or Over";
  }

  if (val >= 10) {
    // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);