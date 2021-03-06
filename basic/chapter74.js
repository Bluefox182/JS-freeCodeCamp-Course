// Selecting from Many Options with Switch Statements

/*
If you have many options to choose from, use a switch statement. 
A switch statement tests a value and can have many case statements which define 
various possible values. Statements are executed from the first matched case 
value until a break is encountered. */

// Example
switch (lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}

/* case values are tested with strict equality (===). 
  The break tells JavaScript to stop executing statements. 
  If the break is omitted, the next statement will be executed. */

// Exercise
/* Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta */
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }
  return answer;
}

caseInSwitch(1);
