// Accessing Nested Objects

/* The sub-properties of objects can be accessed by chaining together 
the dot or bracket notation.

Here is a nested object: */

var ourStorage = {
  desk: {
    drawer: "stapler",
  },
  cabinet: {
    "top drawer": {
      folder1: "a file",
      folder2: "secrets",
    },
    "bottom drawer": "soda",
  },
};
ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
/* ourStorage.cabinet["top drawer"].folder2 would be the string secrets, 
and ourStorage.desk.drawer would be the string stapler.  */

// Exercise
/*Access the myStorage object and assign the contents of the glove box property 
to the gloveBoxContents variable. Use dot notation for all properties where 
possible, otherwise use bracket notation. */

var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};
//   Answer goes here
var gloveBoxContents = myStorage.car.inside["glove box"];
