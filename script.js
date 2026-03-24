// Initialize animations when page loads
document.addEventListener("DOMContentLoaded", () => {
    setupScrollAnimations();
    setupNavigation();
    setupDigitalEffects();
});

// Digital artistic effects
function setupDigitalEffects() {
    // Mouse follow effect for hero
    const hero = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero-bg');

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        // Subtle parallax effect
        const moveX = (x - 0.5) * 20;
        const moveY = (y - 0.5) * 20;

        if (heroBg) {
            heroBg.style.transform = `scale(1.02) translate(${moveX}px, ${moveY}px)`;
        }
    });

    hero.addEventListener('mouseleave', () => {
        if (heroBg) {
            heroBg.style.transform = 'scale(1.02) translate(0, 0)';
        }
    });

    // Add digital noise effect to images on hover
    const images = document.querySelectorAll('.gallery-grid img');
    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.animation = 'digitalNoise 0.1s infinite';
        });

        img.addEventListener('mouseleave', () => {
            img.style.animation = 'none';
        });
    });
}

// Smooth scroll animations for gallery items
function setupScrollAnimations() {
    const images = document.querySelectorAll(".gallery-grid img");
    const sections = document.querySelectorAll('.gallery-section');

    // Intersection Observer for fade-in effect as images enter viewport
    const imageObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0) rotate(0deg)";
                    }, index * 100); // Staggered animation
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        }
    );

    images.forEach((img, index) => {
        // Start with images slightly below, rotated, and faded
        img.style.opacity = "0";
        img.style.transform = "translateY(30px) rotate(2deg)";
        img.style.transition = "opacity 0.8s cubic-bezier(0.23, 1, 0.320, 1), transform 0.8s cubic-bezier(0.23, 1, 0.320, 1)";
        imageObserver.observe(img);
    });

    // Section title animations
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.3 }
    );

    sections.forEach(section => {
        const title = section.querySelector('h2');
        if (title) {
            title.style.opacity = "0";
            title.style.transform = "translateY(20px)";
            title.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            sectionObserver.observe(title);
        }
    });
}

// Navigation smooth scrolling and interaction
function setupNavigation() {
    const navLinks = document.querySelectorAll(".hero-nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Smooth scroll to target
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });

                // Digital highlight effect
                targetElement.style.filter = "brightness(1.1) contrast(1.05)";
                setTimeout(() => {
                    targetElement.style.filter = "none";
                    targetElement.style.transition = "filter 0.8s ease";
                }, 200);
            }
        });
    });
}

// Scroll effects for digital feel
window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Dynamic background gradient based on scroll
    const scrollPercent = Math.min(scrollPosition / windowHeight, 1);
    document.body.style.background = `linear-gradient(135deg,
        rgba(250, 250, 250, ${0.8 + scrollPercent * 0.2}) 0%,
        rgba(245, 245, 245, ${0.8 + scrollPercent * 0.2}) 50%,
        rgba(240, 240, 240, ${0.8 + scrollPercent * 0.2}) 100%)`;

    // Subtle parallax on hero image
    const hero = document.querySelector(".hero");
    if (hero && scrollPosition < windowHeight) {
        const parallaxOffset = scrollPosition * 0.3;
        const heroBg = document.querySelector(".hero-bg");
        if (heroBg) {
            heroBg.style.transform = `scale(1.02) translateY(${parallaxOffset * 0.1}px)`;
        }
    }
});
