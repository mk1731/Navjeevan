/* ===============================
   REVEAL ANIMATION
=============================== */
const animatedSections = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

animatedSections.forEach(sec => observer.observe(sec));

/* ===============================
   SIDEBAR ACTIVE SECTION
=============================== */
const sidebarLinks = document.querySelectorAll(".branch-sidebar a");
const sections = document.querySelectorAll(".content-section");
const OFFSET = 127;

window.addEventListener("scroll", () => {
    let currentId = "";

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= OFFSET && rect.bottom > OFFSET) {
            currentId = section.id;
        }
    });

    sidebarLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentId}`) {
            link.classList.add("active");
        }
    });
});

/* ===============================
   LAB SLIDER (AUTO + DOTS)
=============================== */
const track = document.getElementById("labTrack");
const images = track.querySelectorAll("img");
const dots = document.getElementById("labDots");

let index = 0;
const maxIndex = images.length - 1;

images.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    dot.onclick = () => {
        index = i;
        updateSlider();
    };
    dots.appendChild(dot);
});

function updateSlider() {
    track.style.transform = `translateX(-${index * 50}%)`;
    document.querySelectorAll(".lab-dots span").forEach((d, i) => {
        d.classList.toggle("active", i === index);
    });
}

setInterval(() => {
    index = (index + 1) % maxIndex;
    updateSlider();
}, 4000);
