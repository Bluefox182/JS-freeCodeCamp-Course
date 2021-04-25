// Comparison with the Less Than Operator

/* 
The less than operator (<) compares the values of two numbers. If the number to 
the left is less than the number to the right, it returns true. Otherwise, it 
returns false. Like the equality operator, the less than operator converts data 
types while comparing. */

// Example
2 < 5; // TRUE
"3" < 7; // TRUE
5 < 5; // FALSE
3 < 2; // FALSE
"8" < 4; // FALSE

// Exercise
function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return "Under 25";
  }

  if (val < 55) {
    // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
s;
