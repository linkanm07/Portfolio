// Premium Scroll-Reveal Effect Configuration
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.skill-card, .service-box, .project-card, .contact-card');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(element => {
            // Apply original styling properties programmatic setup
            if (!element.style.transform) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            }

            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Run execution loop on initiation and consecutive scroll vectors
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial pass check
});
