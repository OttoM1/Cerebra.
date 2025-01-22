document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');
    const links = document.querySelectorAll('a[href^="#"]');
    
    // Function to toggle the visibility of content sections
    const toggleSectionVisibility = (event) => {
        const targetSection = document.querySelector(event.target.getAttribute('href'));
        
        // Hide all sections first
        sections.forEach(section => {
            section.classList.remove('visible');
        });

        // Toggle visibility for the clicked section
        if (!targetSection.classList.contains('visible')) {
            targetSection.classList.add('visible');
        }
    };

    // Add event listeners for each section headline to toggle visibility
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            toggleSectionVisibility(event);
        });
    });

    // Matrix Effect for Background (Falling Code Animation)
    const canvas = document.getElementById("matrixCanvas");
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const columns = canvas.width / 20;
    const drops = Array.from({ length: columns }).map(() => 0);

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#0F0";
        ctx.font = "20px monospace";

        drops.forEach((y, x) => {
            const text = Math.random() > 0.9 ? String.fromCharCode(Math.random() * 255) : " ";
            ctx.fillText(text, x * 20, y * 20);

            if (y * 20 > canvas.height && Math.random() > 0.975) {
                drops[x] = 0;
            }

            drops[x] += Math.random() > 0.95 ? 1 : 0.5;
        });
    }

    setInterval(draw, 60);
});
