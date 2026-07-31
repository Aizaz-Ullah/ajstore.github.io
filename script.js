// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Add animation on scroll for all app cards
const appCards = document.querySelectorAll('.app-card');
appCards.forEach(card => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Set initial state
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Download button click tracking
const downloadBtns = document.querySelectorAll('.btn-download');
downloadBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || !href) {
            e.preventDefault();
            alert('App download will be available soon! Please check back later.');
        } else {
            console.log('Download started:', this.closest('.app-info')?.querySelector('h3')?.textContent || 'App');
        }
    });
});

// Console welcome message
console.log('%c🛒 Welcome to AjStore!', 'font-size: 20px; color: #7c3aed; font-weight: bold;');
console.log('%c🎵 Download AJTunes & ✋ Air Scroll - your favorite Android apps!', 'font-size: 14px; color: #a1a1aa;');
