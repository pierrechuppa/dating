// Płynne przewijanie
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Obsługa formularza
document.getElementById('registrationForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Tutaj w prawdziwej aplikacji byłoby połączenie z backendem
    alert('Dziękujemy za rejestrację! Na podany email wysłaliśmy link weryfikacyjny.');
    this.reset();
    
    // Przewiń do góry
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animacja pojawiania się elementów
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Obserwuj wszystkie sekcje
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Dodaj klasę animacji do nagłówka po załadowaniu
window.addEventListener('load', () => {
    document.querySelector('.hero-content').classList.add('animate');
});
