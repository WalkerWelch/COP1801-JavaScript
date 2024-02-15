// Declaring my variables and constant first
var fName
const piValue = 3.1415926
var myFavNum
var myArea

// Prompt user to enter their first name
fName = prompt("Please enter your first name.");

// Ask User for their favorite number
myFavNum = prompt("Please enter your favorite number.");
// Convert user input to number
myFavNum = Number(myFavNum);
myArea = piValue * (myFavNum ** 2);

// Display results
document.write("Hello " + fName + ", you said that you favorite number was " + myFavNum + "." + "<br>" + "If that was the radius of a circle, the circle's area would be " + myArea + ".");