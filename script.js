document.addEventListener('DOMContentLoaded', () => {
    // --- Falling Flowers ---
    const flowerContainer = document.body;
    const numFlowers = 30;

    for (let i = 0; i < numFlowers; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.animationDuration = `${Math.random() * 8 + 5}s`; // Longer duration
        flower.style.animationDelay = `${Math.random() * 8}s`; // Longer delay range
        flower.innerHTML = '🌸';
        flowerContainer.appendChild(flower);
    }

    // --- Floating Particles Background ---
    const particleContainer = document.getElementById('particles');
    if (particleContainer) { // Only create particles if the container exists on the page
        for (let i = 0; i < 20; i++) {
            const p = document.createElement('div');
            p.classList.add('particle');
            const size = Math.random() * 5 + 2;
            p.style.width = `${size}px`;
            p.style.height = `${size}px`;
            p.style.left = `${Math.random() * 100}vw`;
            p.style.animationDuration = `${Math.random() * 10 + 10}s`;
            p.style.animationDelay = `${Math.random() * 5}s`;
            particleContainer.appendChild(p);
        }
    }

    // --- Magical Mouse Sparkle Trail ---
    document.addEventListener('mousemove', (e) => {
        if (Math.random() < 0.15) { // Create sparkles occasionally
            const sparkle = document.createElement('div');
            sparkle.className = 'mouse-sparkle';
            sparkle.style.left = `${e.pageX}px`;
            sparkle.style.top = `${e.pageY}px`;
            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 800);
        }

        // --- 3D Tilt Effect for Glass Card ---
        const card = document.querySelector('.glass-card');
        if (card) {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
    });

    // --- Page Transition Handling ---
    const transitionEl = document.querySelector('.page-transition');
    if (transitionEl) {
        setTimeout(() => {
            transitionEl.classList.add('loaded');
        }, 100);
    }

    // Handle links for smooth transition
    document.addEventListener('click', (e) => {
        // --- Floating Heart on Click ---
        createFloatingHeart(e.clientX, e.clientY);

        const link = e.target.closest('button[onclick*="location.href"]');
        if (link) {
            const href = link.getAttribute('onclick').match(/location\.href='([^']+)'/)[1];
            if (href) {
                e.preventDefault();
                if (transitionEl) {
                    transitionEl.classList.remove('loaded');
                    setTimeout(() => {
                        window.location.href = href;
                    }, 800);
                } else {
                    window.location.href = href;
                }
            }
        }
    });

    function createFloatingHeart(x, y) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.className = 'click-heart';
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    }
});
