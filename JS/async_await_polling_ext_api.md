```js
function fetchData() {
    return new Promise((resolve, reject) => {
        // Use fetch to get the data from jsonplaceholder API 
        fetch("https://jsonplaceholder.typicode.com/posts/10")
            .then(response => {
                if (!response.ok){
                    throw new Error("Network response was not ok ");
                }
                return response.json();
            })
            .then(data => {
                console.log("Data fetched Successfully!");
                resolve(data);
            })
            .catch(error => {
                console.log("Failed to fetch data: ", error.meaasge);
                reject(error);
            })
    });
}
// Polling function to check if the food is ready 

async function pollForData(maxAttempts, interval) {
    let attempts = 0;

    while(attempts < maxAttempts) {
        attempts++;
        console.log(`Polling attempt ${attempts}`);
        try{
            const data = await fetchData(); // wait for the promise to resolve
            console.log("Data retrived",data); 
            console.log("Processing data") //
            return; /// Exit once the data is fetched
        } catch(error) {
            console.log(error.meaasge);
            if(attempts < maxAttempts ){
                console.log(`Data is not readt yet, retrying in ${interval / 1000 } seconds `);
                await new Promise(resolve => setTimeout(resolve, interval));
            } else {
                console.log("Maximum polling attempts reached. Stopped polling");
            }
        }
    }
}
// Function to start the polling process 


async function processRequest() {
    console.log("Starting to poll the API");
    await pollForData(10, 5000);
    console.log("Polling process is completed");

}


processRequest();
console.log("Waiting for the data to be fetched......."); 


```
