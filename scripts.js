document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const fadeInDuration = 1000; // Adjusted for smoother fade-in

    // Apply fade-in effect on sections when the page loads
    sections.forEach((section) => {
        section.classList.add('fade-in-up');
        setTimeout(() => {
            section.classList.add('visible');
        }, fadeInDuration);
    });

    // Matrix Effect for Background (Falling Code Animation)
    const canvas = document.getElementById("matrixCanvas");
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const columns = canvas.width / 20; // Number of columns for the matrix effect
    const drops = Array.from({ length: columns }).map(() => 0); // Drop positions

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Subtle fading of the background
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#0F0"; // Green text for matrix effect
        ctx.font = "20px monospace";

        drops.forEach((y, x) => {
            const text = Math.random() > 0.9 ? String.fromCharCode(Math.random() * 255) : " "; // Random characters
            ctx.fillText(text, x * 20, y * 20); // Draw text at position

            if (y * 20 > canvas.height && Math.random() > 0.975) {
                drops[x] = 0; // Reset drop position when it goes off-screen
            }

            drops[x] += Math.random() > 0.95 ? 1 : 0.5; // Control falling speed
        });
    }

    setInterval(draw, 60); // Redraw every 60ms for smooth animation

    // Smooth Scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1); // Extract target section ID
            const targetElement = document.getElementById(targetId);

            // Smooth scroll to the section
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust offset to prevent header from covering content
                behavior: 'smooth'
            });
        });
    });

    // Triggering fade-in effect as the user scrolls
    window.addEventListener('scroll', () => {
        sections.forEach((section) => {
            if (isElementInViewport(section)) {
                section.classList.add('visible'); // Reveal section when it's in the viewport
            }
        });
    });

    // Helper function to check if element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }
});
