    const animatedElements = document.querySelectorAll(
        '.animate-left, .animate-right'
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-show');
                }
            });
        },
        {
            threshold: 0.2
        }
    );

    animatedElements.forEach((el) => observer.observe(el));

    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const contents = document.querySelectorAll('.program-content');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {

            // Remove active from buttons
            toggleButtons.forEach(btn => btn.classList.remove('active'));

            // Hide all content
            contents.forEach(content => content.classList.remove('active'));

            // Activate clicked button
            button.classList.add('active');

            // Show related content
            const targetId = button.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

