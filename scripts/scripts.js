// Hamburger Menu Functionality
const hamburger = document.getElementById('hamburger');
const menuItems = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  menuItems.classList.toggle('show');
});

// Dark Mode Toggle Functionality
const modeToggle = document.getElementById('mode');
const body = document.body;

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});








