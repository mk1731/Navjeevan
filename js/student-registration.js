// Reveal animation
const regBox = document.querySelector(".animate");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

observer.observe(regBox);

// Registration logic (frontend demo)
function registerStudent(event) {
    event.preventDefault();

    const pwd = document.getElementById("password").value;
    const confirmPwd = document.getElementById("confirmPassword").value;

    if (pwd !== confirmPwd) {
        alert("Passwords do not match!");
        return;
    }

    alert("Registration successful! Please login.");
    window.location.href = "student-login.html";
}
