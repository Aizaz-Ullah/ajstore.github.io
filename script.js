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

// Add animation on scroll for app card
const appCard = document.querySelector('.app-card');
if (appCard) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Set initial state
    appCard.style.opacity = '0';
    appCard.style.transform = 'translateY(30px)';
    appCard.style.transition = 'all 0.6s ease-out';
    observer.observe(appCard);
}

// Download button click tracking
const downloadBtn = document.querySelector('.btn-download');
if (downloadBtn) {
    downloadBtn.addEventListener('click', function(e) {
        // Check if the file exists (for demo purposes)
        const href = this.getAttribute('href');
        if (href === '#' || !href) {
            e.preventDefault();
            alert('App download will be available soon! Please check back later.');
        } else {
            console.log('App download started!');
        }
    });
}

// Console welcome message
console.log('%c🎵 Welcome to AjTunes!', 'font-size: 20px; color: #6633ff; font-weight: bold;');
console.log('%cThank you for visiting our app store!', 'font-size: 14px; color: #333;');
