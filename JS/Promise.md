```js

function orderFood() {
    return new Promise((resolve, reject) => {
        console.log("Order placed"); //
        console.log("waiting for the food to be prepared..."); // 

        // Simulate food preparation time  

        setTimeout(() => {
            const foodIsReady = false; // Change to flase to simulate rejection
            if(foodIsReady) {
                console.log("Food is ready to be served") // 
                resolve("Food is served"); //
            } else {
                console.log("Food cannot be prepared")
                reject("Sorry, we're out of that dish");
            }
        }, 5000); // 5 seconds to prepare the food
    });
}

// Using the promise 
console.log("Customer arrives at the restaurant"); // 
orderFood()
    .then((meaasge) => {
        console.log(meaasge); //
        console.log("Customer statred eating") //
    })
    .catch((error) => {
        console.log(error); //
        console.log("Customer decides to leave the restaurunt");
    });
console.log("Customer is waiting for the food to be served....."); 

```
