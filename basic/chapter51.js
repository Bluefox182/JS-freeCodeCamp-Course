// Global vs. Local Scope in Functions

/*
It is possible to have both local and global variables with the same name. 
When you do this, the local variable takes precedence over the global variable. */

// Example
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
/* The function myFun will return the string Head because the local version 
of the variable is present. */

// Example #2

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  var myOutfit = "sweater";
  return myOutfit;

  return outerWear;
}

myOutfit();
