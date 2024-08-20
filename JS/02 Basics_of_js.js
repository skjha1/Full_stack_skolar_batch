// // Function Declaration 

// function myFunction(param1, param1) {
//     // function body 
//     // you can perform operations using the param1 and param1
// }


// // invocation

// myFunction(10, 20); 

// function add(x, y) {
//     let result = x + y;
//     return result;
// }

// let globalVariable = 10;

// function myFunction1() {
//     let localVariable = 20;
//     console.log(globalVariable); // Accessing the global variable 
//     console.log(localVariable); // Accessing the local variable 

// }

// console.log(globalVariable); // Accessing the global variable outside of the fuction
// console.log(localVariable); // Accessing the local variable this will throw an error as localVariable is not accessible outside of the function 


// function add(x, y) {
//     return x + y;
// }


// function findMax(a, b) {
//     return a > b ? a : b;
// }

// function isEven(num) {
//     return num % 2 === 0;
// }

// Comparison operators 

// Equal (==): check if two values are equal, regardless of the data types()


// console.log(5 == '5');  // True (because the values are equal after type coercion)

// console.log(5 === '5');  // False  (because the datatypes are different)

// console.log(5 != '5'); // False    (because the values are equal after type coercion)

// console.log(5 !== '5'); // True    (because the datatypes are different)


// console.log(true && true); // True 
// console.log(true && false); // False 

// console.log(true || false); // True 
// console.log(false || false); // False

// console.log(!true); // False 
// console.log(!false); // True



// if (condtion) {
//     // code block to execute if the condtion is true
// }

// if (condtion) {
//     // code block to execute if the condtion is True
// } else {
//     // code block to execute if the condtion is False
// }


// if (condtion1) {
//     // code block to execute if the condtion1 is True
// } else if (condtion2) {
//     // code block to execute if the condtion2 is True
// } else {
//     // code block to execute if the condtions is False
// }


// for ( let i = 0; i < Array.length; i++) {
//     // code block to execute for each item in the array
// }

// while(condtion){
//     // code block to execute while condition is true
// }

// do{
//     // code block to execute at least once
// } while (condtion);


// switch (expressoin){
//     case value1:
//         // code block to execute if the expression is equals to value1 
//         break;
//     case value2:
//          // code block to execute if the expression is equals to value2
//          break;
//     //...
//     default:
//         // code block to execute if the expression does't match in any case.
// }


// let x = 0;
// if (x > 0) {
//     console.log("X is posetive")
// } else if (x === 0) {
//     console.log("X is Zero")
// } else  {
//     console.log("X is negetive")
// }

// const numbers = [1, 2, 3, 4, 5]
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }


// i = 0; 
// while(i < 5){
//     console.log(i);
//     i++;
// }

// let j = 0;
// do{
//     console.log(j);
//     j++; 
// } while (j < 5);



// let fruit = 'Apple'
// switch (fruit){
//     case 'Banana':
//         console.log('Banana is yellow!');
//         // code block to execute if the expression is equals to value1 
//         break;
//     case 'Apple':
//         console.log('Apple is Red!');
//          // code block to execute if the expression is equals to value2
//          break;
//     case 'Orange':
//         console.log('Orange is orange!');
//              // code block to execute if the expression is equals to value2
//         break;     
//     //...
//     default:
//         console.log('Unknown fruit');
//         // code block to execute if the expression does't match in any case.
// }



// function greet(name) {
//     return "Hello " + name + "!";
// }


// const greet = function (name) {
//     return "Hello " + name + "!";
// };


// const greet = (name) => "Hello " + name + "!";



// function greet(name = "Mahesh") {
//     return "Hello " + name + "!";
// }

// console.log(greet()); // output: Hello Mahesh!

// function factorial(n) {
//     if (n === 0 ) return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(5)); // output: 120


// const person = {
//     name: 'Mahesh',
//     greet() {
//         console.log("Hello " + this.name + "!");
//     }
// };

// person.greet(); // Hello Mahesh!


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const Mahesh = new Person("Mahesh", 30);
// console.log(Mahesh.name)


// Person.prototype.sayHello = function () {
//     console.log("Hello, my name is " + this.name);
// }

// Mahesh.sayHello();

