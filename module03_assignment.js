// Declaring my variables and constant
var myNum;
var myText = "";
var myText2 = "<br>Subjects: ";
const subjects = ["Accounting","Algebra","Programming","Art","Data Analytics"];

// For loop 
for (let i = 0; i <= 10 ; i++) {
	// If statement to determine if odd or even and write the output
	if(i % 2 == 0) {
		document.getElementById("output").innerHTML += "Count " + i + " is even<br>";
	} else {
		document.getElementById("output").innerHTML += "Count " + i + " is odd<br>";
	}
}

// Prompt user to enter their first name
myNum = prompt("Please enter a number between 5 and 20.");
// Convert user input to number
myNum = Number(myNum);

let i = 1;
// Start Do While loop
do {
	myText += "Loop Counter: " + i + "<br>";
	i++;
	}
// Finish Do While loop and output myText
// Add conditions of both hitting myNum and just in case the user inputs a value greater than 20
while(i <= myNum && i < 21);
// Write Loop Counter output
document.getElementById("output2").innerHTML = myText;

// Create forEach for the function
subjects.forEach(subjectFunction);

function subjectFunction(iValue, index, array) {
	if (index === array.length - 1) {
		// If it is the last element in the array, end with a period
		myText2 += iValue + ".";
	} else {
		// If it isn't the last element, end with a comma and space
		myText2 += iValue + ", ";
	}
}
//Write Array output
document.getElementById("output3").innerHTML = myText2;