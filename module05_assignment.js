// Define a constructor function for all Dog objects with each attribute
function myDog(name, mySound, tvShow, breed, description, canTalk) {
    this.name = name;
    this.mySound = mySound;
    this.tvShow = tvShow;
    this.breed = breed;
    this.description = description;
	this.canTalk = canTalk;
	this.myGreeting = function(){alert ("Hello, my name is " + this.name + ", when I bark " + this.mySound + ". I starred in the TV show " + this.tvShow + 
	". My character was a " + this.breed + ". I was the family dog in a cartoon about a " + this.description + ".")};
	return(this);
}

// Create the variable for my chosen dog character 
var myDogConst = new myDog(
    "Courage",
    "I get scared of everything, including my own bark",
    "Courage the Cowardly Dog",
    "Beagle",
    "married couple of two elderly farmers and my crazy adventures",
	true // Courage can talk in the show
);
// Display the greeting using the method
myDogConst.myGreeting();
