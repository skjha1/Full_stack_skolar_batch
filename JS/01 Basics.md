# HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="script.js"></script>
</body>
</html>
```


### js

```js
var str = "Hello"; // String
var num = 10;   // Number 
var bool = true; // Boolean
var undefinedVar; // undefined
var nullVar = null; // Null



var arr = [1, 2, 3]; // Array 
var obj = {"name": "Mohan", age: 30}; // Object 
function greet() {console.log("Hello!")}
var date = new Date(); // Date

console.log("This is a String: " + str); 
console.log("This is a Number: " + num);
console.log("This is a boolean : " + bool); 
console.log("This is a undefinedVar : " + undefinedVar); 
console.log("This is a nullVar : " + nullVar);
console.log("This is a Array : " + arr); 
console.log("This is a obj : " + obj);  
console.log("This is a function : ", greet.toString());  
console.log("This is a Date : ", date ); 
```



### var let const 


```js

function exampleVar () {
    if (true) {
        var x = 10;
    }
    console.log(x); 
}
 exampleVar();
console.log(x); // ReferenceError: x is not defined


function exampleLet () {
    if (true) {
        let x = 10;
        console.log(x); 
    }
    console.log(x);  // ReferenceError: x is not defined
}
exampleLet();


function exampleConst () {
   const PI = 3.14;
   //PI = 3.14159; // TypeError: Assignment to constant variable.
   console.log(PI)
}
exampleConst();


function exampleVar () {
    for (var i = 0; i < 3; i++){
        // var variables are function-scoped
        var message = 'Hello';
        // console.log(message);
    }
    console.log(message); // Output:
    console.log(i);        // Output: 
 }
 exampleVar();


 function exampleLet () {
    for (let i = 0; i < 3; i++){
        // var variables are function-scoped
        let message = 'Hello';
         // console.log(message);
    }
    console.log(message); // Output: ReferenceError: message is not defined
    console.log(i);        // Output: 
 }
 exampleLet();


```
