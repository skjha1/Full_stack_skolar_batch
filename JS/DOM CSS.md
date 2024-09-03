```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM CSS Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="myElement">Click me to change my color!</div>
    <script src="script.js"></script>
</body>
</html>

```



```css
#myElement {
    width: 200px;
    height: 100px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 100px;
    cursor: pointer;
    transition: background-color 0.3 ease;
}
```


```js
const element = document.getElementById("myElement");

// Add event listener to change the color on click

element.addEventListener('click', function(){
    // Generate a random color
    const randomNumber = Math.floor(Math.random()*16777215);
    const hexString = (16777215).toString(16);
    console.log("hexString  " + hexString)
    console.log("randomColor  " + randomNumber)
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    console.log("randomColor" + randomColor)

    // Change the cackgrond color of the element
    element.style.backgroundColor = randomColor;
})

// #FF0000
// #00FF00
// #0000FF00

// 16777215 / 16 



```
