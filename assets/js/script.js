const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
 const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
mobileMenu.classList.add('open');
overlay.classList.add('show');
document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
mobileMenu.classList.remove('open');
overlay.classList.remove('show');
document.body.style.overflow = 'auto';
});

overlay.addEventListener('click', () => {
mobileMenu.classList.remove('open');
overlay.classList.remove('show');
document.body.style.overflow = 'auto';
});

document.getElementById('year').textContent = new Date().getFullYear();