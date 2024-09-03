### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="form-container">
        <h2>Contact Us</h2>
        <form id="contactForm">
            <label for="name">Name:</label>
            <input type="text" id="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" required>

            <label for="message">Message:</label>
            <textarea name="message" id="message" required></textarea>

            <button type="submit">Submit</button>
        </form>
        <p id="formStatus"></p>
    </div>
    <script src="script.js"></script>
</body>
</html>


```


### CSS


```css
body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.form-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;

}

h2 {
    margin-bottom: 20px;
    color: #333;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
} 

input[type="text"],
input[type="email"],
textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

textarea {
    resize: vertical;
    height: 100px;
}

button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #0056b3;
}

#formStatus {
    margin-top: 20px;
    font-weight: bold;
    color: green;
}


```
### JS

```js
document.getElementById("contactForm").addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behaviour


    // Access form values

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;


    // Simulate form submission  (e.g. send the data to a server )

    console.log("Form Submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);


    // Display a sucess message

    const formStatus = document.getElementById("formStatus");
    formStatus.textContent = "Thankyou for your message! We will get back to you soon"
    formStatus.style.color = "green";

    // clear the form fileds

    // document.getElementById("contactForm").reset();
    
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("message").value ='';

    // document.querySelectorAll(#contactForm input, ).forEach(element) {
    //     element.value = "";
    // }

})


})



```
