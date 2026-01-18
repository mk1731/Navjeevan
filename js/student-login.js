// Reveal animation
const loginBox = document.querySelector(".animate");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

observer.observe(loginBox);

// Toggle password
function togglePassword() {
    const pwd = document.getElementById("password");
    pwd.type = pwd.type === "password" ? "text" : "password";
}
function loginStudent(event) {
    event.preventDefault();

    // TEMPORARY FRONTEND LOGIN
    // (Later replace with backend validation)
    window.location.href = "dashboard.html";
}

// Toggle password
function togglePassword() {
    const pwd = document.getElementById("password");
    pwd.type = pwd.type === "password" ? "text" : "password";
}
