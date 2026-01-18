const admissionTabs = document.querySelectorAll('.admission-tab');
const admissionContents = document.querySelectorAll('.admission-content');

admissionTabs.forEach(tab => {
    tab.addEventListener('click', () => {

        admissionTabs.forEach(t => t.classList.remove('active'));
        admissionContents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});
