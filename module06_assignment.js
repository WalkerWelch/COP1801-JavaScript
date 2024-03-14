// Define a constructor function for all Dog objects with each attribute
function myDog(name, mySound, tvShow, breed, description, canTalk) {
    this.name = name;
    this.mySound = mySound;
    this.tvShow = tvShow;
    this.breed = breed;
    this.description = description;
    this.canTalk = canTalk;
    // Define a method for the greeting
    this.myGreeting = function() {
        let talkStatus = this.canTalk ? "Back away, I can talk!" : "I cannot talk.";
        let greeting = "Hello, my name is " + this.name + ", when I bark " + this.mySound + ". I starred in the TV show " + this.tvShow + 
        ". My character was a " + this.breed + ". I was the family dog in a cartoon about a " + this.description + ". " + talkStatus;
        document.write("<p>" + greeting + "</p>");
    };
    return(this);
}

// Create an array to store dog objects
let dogs = [];

// Create the dog objects and push them into the array
dogs.push(new myDog(
    "Courage",
    "I get scared of everything, including my own bark",
    "Courage the Cowardly Dog",
    "Beagle",
    "married couple of two elderly farmers and my crazy adventures",
    true // Courage can talk in the show
));

dogs.push(new myDog (
    "Goddard",
    "my robot voice box barks for me",
    "Jimmy Newtron: Boy Genius",
    "Robot Dog",
    "kid Boy Genius and his crazy adventures",
    true // Goddard technically can talk through recordings of Jimmy's voice
));

dogs.push(new myDog (
    "Spike",
    "it is a loving bark to family but can be a mean bark to strangers",
    "Rugrats",
    "Siberian Tiger Hound",
    "a group of kids that like to get into adventures and trouble",
    false // Courage can talk in the show
));

// Use for loop to display information for each dog
for (let i = 0; i < dogs.length; i++) {
    let dog = dogs[i];
    let info = "Name: " + dog.name + ", TV Show: " + dog.tvShow + ", Breed: " + dog.breed;
    document.write("<p>" + info + "</p>");
}

// Prompt the user to select a dog by typing in one of the dog's names
let userInput = prompt("Type in the name of the dog you want to select: Courage, Goddard, or Spike");
userInput = userInput.toLowerCase(); // Convert userInput to lowercase

// Find the selected dog and display its greeting
let selectedDog;
for (let i = 0; i < dogs.length; i++) {
    if (dogs[i].name.toLowerCase() === userInput) { // Making sure to double check the dogs name to lowercase
        selectedDog = dogs[i];
        break;
    }
}

// Checking error message for bad user input
if (selectedDog) {
    selectedDog.myGreeting();
} else {
    document.write("<p>Sorry, the dog you selected is not found.</p>");
}
