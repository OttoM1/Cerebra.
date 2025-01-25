/*
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('coolCanvas');
    const ctx = canvas.getContext('2d');

   
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const colors = ['#272929', '#cfb486', '#dbd3c5', '#060a0a'];

    // Create particle
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1 + 0.7,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedX: (Math.random() - 0.01) * 0.05,
            speedY: (Math.random() - 0.01) * 0.05,
        });
    }

    // Animate particles
    const animateParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            p.x += p.speedX;
            p.y += p.speedY;

            // Bounce particles off the edges
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        });

        requestAnimationFrame(animateParticles);
    };

    animateParticles();
});










let particles = [];

function Particle(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;   // Adjust this to control size
    this.speed = speed; // Adjust this to control speed
    this.velocityX = (Math.random() - 0.01) * this.speed;
    this.velocityY = (Math.random() - 0.01) * this.speed;
}

// Create particles function
function createParticles() {
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let size = Math.random() * 0.008 + 0.002; // Random size between 1 and 3
    let speed = 0.003; // Adjust speed to control particle movement

    let particle = new Particle(x, y, size, speed);
    particles.push(particle);
}

// Update particles
function updateParticles() {
    for (let i = 0; i < particles.length; i++) {
        let particle = particles[i];
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;

        // Recycle particle when it moves off-screen
        if (particle.x > canvas.width || particle.x < 0 || particle.y > canvas.height || particle.y < 0) {
            particles.splice(i, 1);
            i--;
        }
    }
}

// Draw particles
function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let particle of particles) {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
    }
}

// Main animation loop
function animate() {
    createParticles(); // Create new particles
    updateParticles(); // Update their positions
    drawParticles();   // Draw them on canvas

    requestAnimationFrame(animate); // Keep the animation going
}

animate();


*/




const canvas = document.getElementById("coolCanvas");
const ctx = canvas.getContext("2d");

// Resize Canvas to Match Screen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);
// Particles Array
const particles = [];
const particleCount = 150;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 3 + 1;
        this.color = `rgba(255, 255, 255, ${Math.random()})`;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

// Create Particles
for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

// Animation Loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}
animate();

/*
document.getElementById("revealButton").addEventListener("click", () => {
    document.getElementById("mainContent").classList.remove("hidden");
    document.getElementById("revealContainer").classList.add("hidden");
});
*/
document.getElementById("revealButton").addEventListener("click", () => {
    // Show the main content
    document.getElementById("mainContent").classList.remove("hidden");

    // Completely hide the reveal container
    const revealContainer = document.getElementById("revealContainer");
    revealContainer.classList.add("hidden");
    revealContainer.style.display = "none"; // Ensures it is entirely removed from the layout
});





function revealSection(sectionId) {
    // Hide all sections first
    document.querySelectorAll(".content-section").forEach((section) => {
        section.classList.add("hidden");
    });

    // Show the selected section
    document.getElementById(sectionId).classList.remove("hidden");
}

// Add event listeners to the nav links
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const targetSection = event.target.getAttribute("href").substring(1); // Get section ID
        revealSection(targetSection);
    });
});
