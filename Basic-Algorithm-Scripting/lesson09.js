// Finders Keepers

/* Create a function that looks through an array arr and returns the first element in it 
that passes a 'truth test'. This means that given an element x, the 'truth test' is passed 
if func(x) is true. If no element passes the test, return undefined. */

// SOLUTION
function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);

// CODE EXPLANATION
/* 
    Challenge asks us to look through array. This is done using a for loop.
    The num variable is being passed into the function, so we set it to each index in our array.
    The pre-defined function already checks each number for us, so if it is “true”, we return 
    that num.
    If none of the numbers in the array pass the function’s test, we return undefined.
*/

// OPTION #2 - RECURSIVE SOLUTION
function findElement(arr, func) {
  return arr.length && !func(arr[0]) ? findElement(arr.slice(1), func) : arr[0];
}
