```css
body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
}

.gallery {
    display: grid;
    grid-template-areas: repeat(auto-fill, minmax(150, 1fr));
    grid-gap: 10px;
    max-width: 1200px;
    width: 100%;
    padding: 10px;
}

.item {
    background-color: #d4e6f1;
    padding: 20px;
    border: 1px solid #b0c4de;
    border-radius: 8px;
    text-align: center;
    font-size: 24px;
    color: #333;
}

/* @media(max-width: 600px) {
   .gallery  {
    grid-template-columns: repeat(auto-fill, minmax(100, 1fr));
    }
    .item{
        font-size: 18px;
    }
} */
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Photo Gallery</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="gallery">
        <div class="item">
            <img src="https://via.placeholder.com/150" alt="">
        </div>
        <div class="item">
            <img src="https://via.placeholder.com/150" alt="">
        </div>
        <div class="item">
            <img src="https://via.placeholder.com/150" alt="">
        </div>
        <div class="item">
            <img src="https://via.placeholder.com/150" alt="">
        </div>
        <div class="item">
            <img src="https://via.placeholder.com/150" alt="">
        </div>
        <div class="item">
            <img src="https://via.placeholder.com/150" alt="">
        </div>
        <div class="item">
            <img src="https://via.placeholder.com/150" alt="">
        </div>
        <div class="item">
            <img src="https://via.placeholder.com/150" alt="">
        </div>
        <div class="item">
            <img src="https://via.placeholder.com/150" alt="">
        </div>
        <div class="item">
            <img src="https://via.placeholder.com/150" alt="">
        </div>
    </div>
</body>
</html>
```

.item img {
    width: 100%;
    height: auto;
    display: block;
}
