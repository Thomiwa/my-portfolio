<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <style>
        #back-to-top {
            display: none;
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #00bcd4;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        #back-to-top:hover {
            background-color: #0097a7;
        }
    </style>
</head>
<body>

<header>
    <h1>My Portfolio</h1>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</header>

<section id="home">
    <h2>Welcome to My Portfolio</h2>
    <p>This is a brief introduction about myself and my work.</p>
</section>

<section id="about">
    <h2>About Me</h2>
    <p>Here you can provide information about yourself, your background, and your skills.</p>
</section>

<section id="portfolio">
    <h2>My Work</h2>
    <div>Project 1</div>
    <div>Project 2</div>
    <div>Project 3</div>
</section>

<section id="contact">
    <h2>Contact Me</h2>
    <form>
        <input type="text" placeholder="Your Name" required>
        <input type="email" placeholder="Your Email" required>
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send</button>
    </form>
</section>

<button id="back-to-top">Back to Top</button>

<footer>
    <p>&copy; 2025 Your Name. All rights reserved.</p>
</footer>

<script>
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
</script> 

</body>
</html>
