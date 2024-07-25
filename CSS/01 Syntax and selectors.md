### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS GRID EXAMPLE</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">Header</header>
    <aside class="sidebar">Sidebar</aside>
    <main class="main-content">Main Content</main>
    <footer class="footer">Footer</footer>
</body>
</html>

```
### CSS

```css
/* Univarsal selector  */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* Types of selector for basic styling */

body {
    font-family: Arial, Helvetica, sans-serif;
}

header, aside, main, footer {
    padding: 20px;
    border: 1px solid #ccc;
}

/* Class selector for specific element styling */

.header{
    background-color: #4caf50;
    color: white;
    text-align: center;
}

.sidebar {
    background-color: #f4f4f4;
}

.main-content {
    background-color: #fff;
}

.footer{
    background-color: #4caf50;
    color: white;
    text-align: center;
}

/* Appling  CSS Grid  */

body {
    display: grid;
    grid-template-areas: 
    "header header header"
    "sidebar main main"
    "footer footer footer";
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
}

.header {
    grid-area: header;
}

.sidebar {
    grid-area: sidebar;
}

.main-content {
    grid-area: main;
}

.footer {
    grid-area: footer;
}


```
