document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default jump
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting for now
    alert('Thank you for your message! I will get back to you soon.');
});

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
