// Reveal animation
const elements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// Contact form submission (frontend demo)
function submitContact(event) {
    event.preventDefault();
    alert("Thank you for contacting us. We will get back to you soon!");
}
