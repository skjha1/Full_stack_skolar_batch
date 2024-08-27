```js
function orderFood() {
    return new Promise((resolve, reject) => {
        console.log("Order placed"); //
        console.log("waiting for the food to be prepared..."); // 

        // Simulate food preparation time  

        setTimeout(() => {
            const test = Math.random() > 0.7; 
            console.log(test);
            const foodIsReady = test
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


// Polling function to check if the food is ready 

async function pollForFood(maxAttempts, interval) {
    let attempts = 0;

    while(attempts < maxAttempts) {
        attempts++;
        console.log(`Polling attempt ${attempts}`);
        try{
            const meaasge = await orderFood();
            console.log(meaasge); //
            console.log("Customer statred eating") //
            return;
        } catch(error) {
            console.log(error);
            if(attempts < maxAttempts ){
                console.log(`Food not readt yet, retrying in ${interval / 1000 } seconds `);
                await new Promise(resolve => setTimeout(resolve, interval));
            } else {
                console.log("Maximum polling attempts reached. Customer decides to leave the restaurant")
            }
        }
    }
}

// Function to start the polling process 


async function processOrder() {
    console.log("Customer arrives at the restaurant");
    console.log("Customer placed an order"); 
    await pollForFood(30, 2000);
    console.log("customer experience at the restaurant is completed");

}


processOrder();
console.log("Customer is waiting for the food to be served.....");
```
