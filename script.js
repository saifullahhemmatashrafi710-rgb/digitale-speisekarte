// Smooth scrolling für alle Menü-Links
document.querySelectorAll('nav a, .btn').forEach(link => {
    link.addEventListener('click', function(event) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Begrüßung in der Konsole
console.log("Willkommen bei Bella Italia!");