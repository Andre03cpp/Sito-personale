const hb = document.getElementById('hamburger');
const nl = document.getElementById('nav-links');

hb.addEventListener('click', () => {
    nl.classList.toggle('active');
    // Opzionale: aggiungi qui un'animazione per le righette
});

// Chiude il menu quando si clicca un link su mobile
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        nl.classList.remove('active');
    });
});