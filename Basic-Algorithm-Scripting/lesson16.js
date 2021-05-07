// Chunky Monkey

/* Write a function that splits an array (first argument) into groups the length of size 
(second argument) and returns them as a two-dimensional array. */

// SOLUTION
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

/*
PROBLEM EXPLANATION
Our goal for this Algorithm is to split arr (first argument) into smaller chunks of arrays 
with the length provided by size (second argument).

HINTS

Hint 1
The links above suggest to use Array.push(), so let’s start by first creating a new array 
to store the smaller arrays we will soon have like this:
var newArray = [];

Hint 2
Next we’ll need a for loop to loop through arr.

Hint 3
Finally, we need a method to do the actual splitting and we can use Array.slice() to do that.
The key to this Algorithm is understanding how a for loop, size, Array.slice() and Array.push() 
all work together.

CODE EXPLANATION

- Firstly, we create a variable. newArr is an empty array which we will push to.
- Our while loop loops until the length of the array in our test is not 0.
- Inside our loop, we push to the newArr array using arr.splice(0, size).
- For each iteration of while loop, it deletes size number of elements from the front of arr 
and push them as an array to newArr.
- Finally, we return the value of newArr.
*/
