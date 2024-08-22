// var myArray = []; // Empty Array 
// var myNumbers = [1, 2, 3, 4, 5]; // Array with numbers
// var myString = ['Apple', 'Banana', "Orange"]; // Array with string

// myArray.push(6); // Add 6 to the end of the array
// var lastElememnt = myArray.pop(); // Remove amd return the last element of the array


// var firstElement = myArray[0];
// var forthElement = myArray[3];

// // Objects 

// var myObject = {}; // Empty object

// var person = {
//     name: "Ishan",
//     age: 20,
//     city: Chennai
// }; // object with properties

// person.name = "Mahesh";
// person.age = 21;

// person.sayHello  = function () {
//     console.log("Hello my name is " + this.name);
// }; // Adding a method to the object



// // Select the button element 

// const button = document.querySelector("#myButton");


// // Add an event listener to the button element 

// button.addEventListener('click', function() {
//     // code to be excuted when the button is clicked
//     console.log("Button Clicked!!")
// })



// Class intoduction

class Animal {
    constructor(name) {
        this.name = name;
    }

    sound() {
        console.log("Animal makes a sound!")
    }
}

// Creeting an instance of the Animal class

let dog = new Animal("Dog");
dog.sound(); // Output: Animal makes a sound!



// Class Inheritance
class Dog extends Animal {
    constructor(name, breed) {
        super(name)
        this.breed = breed;
    }

    bark() {
        console.log("woof! woof!");
    }
}

// Creating a instance of the Dog class
let bulldog = new Dog("Bulldog", "Bulldog")
bulldog.sound(); // Output: Animal makes a sound!
bulldog.bark(); // Output: woof! woof!



// Class static 

class MathUtility {
    static square(x) {
        return x * x; 
    }
}

// Accessing static method without creating an instance 

console.log(MathUtility.square(5)); // Output: 25
