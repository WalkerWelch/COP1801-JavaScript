// Declaring my variables and constant
var servicePrice;
var serviceQuality = "";

// Define my functions
function isValidServiceQuality(quality) {
	// Double check that a valid quality was entered while minding capital letters
    return quality.toLowerCase() === "great" || quality.toLowerCase() === "okay" || quality.toLowerCase() === "poor";
}

function isValidServiceAmount(amount) {
	// Double check that the entered amount is a number and it is between 5 and 500
    return !isNaN(amount) && parseFloat(amount) >= 5.00 && parseFloat(amount) <= 500.00;
}

function calculateTip(amount, quality) {
	// Use If and Else If statements to determine tip amount
    if (quality.toLowerCase() === "great") {
        return amount * 0.20;
    } else if (quality.toLowerCase() === "okay") {
        return amount * 0.15;
    } else if (quality.toLowerCase() === "poor") {
        return amount * 0.10;
    }
}

// Prompt users to enter in their data
do {
    servicePrice = prompt("Please enter the dollar amount of the service.");
    if (!isValidServiceAmount(servicePrice)) {
        window.alert("Invalid service amount. Please enter a value between $5.00 and $500.00.");
        // If the amount is invalid, end the code
        throw Error("Invalid service amount entered.");
    }

    serviceQuality = prompt("Would you rate the quality of the service as Great, Okay, or Poor?");
    if (!isValidServiceQuality(serviceQuality)) {
        window.alert("Invalid service quality. Please enter Great, Okay, or Poor.");
        // If the quality is invalid, end the code
        throw Error("Invalid service quality entered.");
    }
} while (false); // Finish Do-While statement

// Calculate tip amount
var tipAmount = calculateTip(parseFloat(servicePrice), serviceQuality);

// Define totalPrice
var totalPrice =  parseFloat(servicePrice) + parseFloat(tipAmount);

// Display the original price, tip amount, and total to the user
window.alert("The service amount is " + servicePrice + ". The recommended tip amount is $" + tipAmount.toFixed(2) + " based on the service quality being " + serviceQuality + ". The total comes to $" + totalPrice.toFixed(2) + ".");
