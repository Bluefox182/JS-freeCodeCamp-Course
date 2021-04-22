// Appending Variables to Strings

/* 
Just as we can build a string over multiple lines out of string literals, 
we can also append variables to a string using the plus equals (+=) operator. */

// Example
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

// ourStr would have the value freeCodeCamp is awesome!.

// Example #2

var someAdjective = "Useful";
var myStr = "Learning to code is ";
myStr += someAdjective;
