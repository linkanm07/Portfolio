/**
 * Linkan Mondal Portfolio - Interactive Core Script Architecture
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mobile Responsive Dropdown Menu Toggle Handler
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close dropdown instantly when clicking any inside navigation targets
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });
    }

    // 2. Hardware Accelerated ScrollReveal Integration Setup
    ScrollReveal({ 
        reset: false, 
        distance: '50px', 
        duration: 1100, 
        delay: 150 
    });
    
    ScrollReveal().reveal('.reveal-bottom', { origin: 'bottom' });
    ScrollReveal().reveal('.reveal-left', { origin: 'left' });
    ScrollReveal().reveal('.reveal-right', { origin: 'right' });

    // 3. Automated Title Terminal Typewriter.js Logic Execution
    new Typewriter('#typewriter', {
        strings: ['MERN Stack Developer', 'Backend API Architect', 'UI/UX Interactive Engineer'],
        autoStart: true,
        loop: true,
        delay: 60,
        deleteSpeed: 40
    });

    // 4. Competency Progress Skillbars Intersection Trigger Array
    ScrollReveal().reveal('#skills', {
        callback: function() {
            document.querySelectorAll('[data-width]').forEach(bar => {
                bar.style.width = bar.getAttribute('data-width');
            });
        }
    });

    // 5. Intelligent Numerical Metrics Count script
    let counterFired = false;
    ScrollReveal().reveal('#stats', {
        callback: function() {
            if (!counterFired) {
                document.querySelectorAll('[data-target]').forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    let current = 0;
                    const increment = target / 25; // Continuous division velocity mapping
                    
                    const runCounter = () => {
                        if (current < target) {
                            current += increment;
                            counter.innerText = Math.ceil(current) + (target === 2 ? "+" : "");
                            setTimeout(runCounter, 35);
                        } else {
                            counter.innerText = target + (target === 2 ? "+" : "");
                        }
                    };
                    runCounter();
                });
                counterFired = true;
            }
        }
    });
});
