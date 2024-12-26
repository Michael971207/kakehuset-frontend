// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('header nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Dynamic Hero Text Animation
const heroText = document.querySelector('.hero-text h1');
let heroIndex = 0;
const heroMessages = ["Kakehuset", "Bryllupslokaler", "Magiske Opplevelser"];

function updateHeroText() {
    heroText.textContent = heroMessages[heroIndex];
    heroIndex = (heroIndex + 1) % heroMessages.length;
}

setInterval(updateHeroText, 3000);

// Review Carousel
let currentReviewIndex = 0;
const reviews = document.querySelectorAll('.review');

function updateReviews() {
    reviews.forEach((review, index) => {
        review.style.display = index === currentReviewIndex ? 'block' : 'none';
    });
}

// Automatically cycle through reviews every 5 seconds
setInterval(() => {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    updateReviews();
}, 5000);

// Scroll-triggered animations for wedding venue section
const venueSection = document.querySelector('#wedding-venue');
const venueFeatures = document.querySelectorAll('.venue-feature');

function checkScroll() {
    const sectionTop = venueSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.3;

    if (sectionTop < triggerPoint) {
        venueFeatures.forEach((feature, index) => {
            setTimeout(() => {
                feature.classList.add('visible');
            }, index * 200);
        });
    }
}

window.addEventListener('scroll', checkScroll);

// Add "visible" class to venue features on scroll
venueFeatures.forEach(feature => {
    feature.classList.add('hidden');
});
