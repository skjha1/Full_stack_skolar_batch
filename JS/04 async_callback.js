// Callbacks are fxn passed as the argument of another fxn to be executed later
// They are commenly used in asynchronous programming to handle tasks that depends on the completion of other tasks


// // Callback example
// function fetchData(callback) {
//     console.log("Starting data fetch.....")  // 2
//     // Simulate fetching data asynchronously after 5 sec
//     setTimeout(() => {
//         console.log("Data fetch complete, invoking callback.....") // 4
//         callback("data fetched successfully"); 
//     }, 5000);
// }


// function processData (data) {
//     console.log("callback invoked") // 5
//     console.log("Processing data: ", data) // 6
// }

// // Call the fetchData with processData as a callback 
// console.log("Calling fetchData") // 1
// fetchData(processData);
// console.log("fetchData called, waiting for the data....") // 3 


// // Starting data fetch.....
// // fetchData called, waiting for the data....
// // Data fetch complete, invoking callback.....
// // callback invoked
// // Processing data:  data fetched successfully


// asynchronous example 

// console.log("Start");

// // Simulate asynchronous opearation that completets in 2 sec

// setTimeout(() => {
//     console.log("Async operation completed")
// }, 2000);

// console.log("End");



// Function that simulates the placing an order
function placeOrder(order, callback) {
    console.log(`order is placed ${order}`);
    setTimeout(() => {
        console.log(`Order is ready: ${order}`);
        callback(); // Call the callback fxn after the order is ready
    }, 3000); // Simulates a 3-sec delay 
}

// Function that will be called back 
function collectOrder() {
    console.log("collecting the order.")
}

// Placing an order and passing collectorder as a callback 
placeOrder("Pizza", collectOrder)
