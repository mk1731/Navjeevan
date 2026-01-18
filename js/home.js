const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
const intervalTime = 5000; // 5 seconds

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Auto slide
setInterval(nextSlide, intervalTime);

// Dot click support
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

// ===== SCROLL ANIMATION (PROGRAMS + ABOUT US) =====
document.addEventListener("DOMContentLoaded", () => {
    const animatedCards = document.querySelectorAll(
        ".animate-card, .animate-bottom"
    );

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target); // animate once
                }
            });
        },
        { threshold: 0.2 }
    );

    animatedCards.forEach(card => observer.observe(card));
});
