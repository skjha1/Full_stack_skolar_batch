```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ultimate Fitness Gym</title>
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            margin: 0;
            padding: 0;
        }
        header, footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px 0;
        }
        nav ul{
            list-style-type: none;
            padding: 0;
        }
        nav ul li{
            display: flex;
            margin: 0 10px;
        }
        nav ul li a{
            color: white;
            text-decoration: none;
        }

        main {
            padding: 20px;
        }

        section, aside, article {
            margin: 20px, 0;
        }
        table{
            width: 100%;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th td {
            padding: 10px;
            text-align: left;
        }

        form {
            margin-top: 20px;
        }
        form label, form input, form textarea, form button {
            display: block;
            margin: 10px 0;
        }
        iframe {
            width: 100%;
            height: 300px;
            border: none;
        }


    </style>
</head>
<body>
    <header>
        <h1>Ultimate Fitness Gym</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#schedule">Schedule</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home">
            <h2>Welcome to Ultimate Fitness Gym</h2>
            <p>Your journey to a healthier life starts here. Join us and get access top notch equipemets, experienced trainer, and variety of class that suits your fitness goals. </p>
            <img src="download.jpeg" alt="Gym-image" width="600" height="400">
        </section>

        <section id="about">
            <h2>About Us</h2>
            <p>Your journey to a healthier life starts here. Join us and get access top notch equipemets, experienced trainer, and variety of class that suits your fitness goals. </p>
            <ul>
                <li>Certified personal trainers</li>
                <li>Group fitness classes</li>
                <li>Nutrition counseling</li>
                <li>State-of-the-art equipemets</li>
            </ul>
        </section>

        <section id="schedule">
            <h2>Class Schedule</h2>
            <table>
                <caption>Weekly Class Schedule</caption>
                <tr>
                    <th>Day</th>
                    <th>Class</th>
                    <th>Time</th>
                    <th>Instructor</th>
                </tr>
                <tr>
                    <td>Monday</td>
                    <td>Yoga</td>
                    <td>6:00 AM - 7:00 AM</td>
                    <td>Bodrothu Tharun Kumar</td>
                </tr>
                <tr>
                    <td>Tuesday</td>
                    <td>Kickboxing</td>
                    <td>6:00 PM - 7:00 PLM</td>
                    <td>Cheepurupalli Sai</td>
                </tr>
                <tr>
                    <td>Wednesday</td>
                    <td>calisthenics</td>
                    <td>5:00 PM - 6:00 PLM</td>
                    <td>Rupam Biswas</td>
                </tr>
                <tr>
                    <td>Thursday</td>
                    <td>calisthenics</td>
                    <td>5:00 PM - 6:00 PLM</td>
                    <td>Rupam Biswas</td>
                </tr>
                <tr>
                    <td>Friday</td>
                    <td>calisthenics</td>
                    <td>5:00 PM - 6:00 PLM</td>
                    <td>Rupam Biswas</td>
                </tr>
            </table>
        </section>

        <section id="contact">
            <h2>Contact US</h2>
            <form action="/submit-form" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="message">Message:</label>
                <textarea id="message" name="message" ></textarea>

                <button type="submit">Submit</button>
            </form>
        </section>

        <aside>
            <h2>Testimonials</h2>
            <p>"Joining Ultimate Fitness Gym was the the best decision I've ever made for my health. The trainer is amazing"</p>
            <p>"Joining Ultimate Fitness Gym was the the best decision I've ever made for my health. The trainer is amazing"</p>
        </aside>        
    </main>

    <!-- <div class="media-container">
        <h2>Promo-video</h2>
        <video src="promo.mp4" type="video/mp4">
            Your browser does not support the vidio tag
        </video>
        
        <h2>Audio guide</h2>
        <audio src=""></audio>

    </div> -->

    


    <footer>
        <p>&copy; 2024 Ultimate Fitness Gym ! All rights reserved </p>
        <p>Visit Us: 123 xyz street Chennai</p>
        <p>Follow us on social Media:</p>
        <nav>
            <ul>
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#twitter">Twitter</a></li>
                <li><a href="#instagram">Instagram</a></li>
            </ul>
        </nav>
    </footer>

    <iframe src="https://www.youtube.com/embed/-Fe0zk-F4OA" title="Promo video"></iframe>    
</body>
</html>


```
