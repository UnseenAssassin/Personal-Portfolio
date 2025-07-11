 // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Typed text effect for subtitle
        const typedTextElement = document.getElementById('typed-subtitle');
        const textToType = "A Computer Science Student & Aspiring Web Developer.";
        let charIndex = 0;

        function type() {
            if (charIndex < textToType.length) {
                typedTextElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(type, 100); // Adjust typing speed (milliseconds)
            }
        }
        // Start typing when the page loads
        document.addEventListener('DOMContentLoaded', type);


        // Set current year in footer
        document.getElementById('currentYear').textContent = new Date().getFullYear();

        // Fade-in sections on scroll
        const sections = document.querySelectorAll('.fade-in-section');
        const observerOptions = {
            root: null, // relative to document viewport
            rootMargin: '0px',
            threshold: 0.1 // 10% of item is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Optional: unobserve after it's visible so animation doesn't repeat
                    // observer.unobserve(entry.target);
                } else {
                    // Optional: remove class if you want animation to repeat when scrolling up
                    // entry.target.classList.remove('is-visible');
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });