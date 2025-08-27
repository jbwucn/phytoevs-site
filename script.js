document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
        }
    });

    const learnMoreBtn = document.getElementById('learn-more');
    learnMoreBtn.addEventListener('click', () => {
        alert('Thank you for your interest in PhytoEVs!');
    });
});