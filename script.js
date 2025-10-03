
const barIcon = document.getElementById('bar');
const closeIcon = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

barIcon.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

const menuLinks = document.querySelectorAll('.mobile-links li');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});