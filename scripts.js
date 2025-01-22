
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Hide all sections by default
    sections.forEach(section => {
        section.classList.remove('visible');
    });

    // Function to toggle the visibility of a section
    const toggleVisibility = (target) => {
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('visible');
        });

        // Show the clicked section
        const selectedSection = document.getElementById(target);
        selectedSection.classList.add('visible');
    };

    // Add event listeners for each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('data-target');
            toggleVisibility(target);
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
