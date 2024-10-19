// script.js

// Function to toggle the mobile navigation menu
function toggleNav() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

// Event listener for the menu button (if you add one)
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.createElement('button');
    menuButton.innerText = 'Menu';
    menuButton.className = 'menu-button';
    document.querySelector('nav').prepend(menuButton);

    menuButton.addEventListener('click', toggleNav);
});

// Adjust layout on window resize
window.addEventListener('resize', () => {
    const nav = document.querySelector('nav ul');
    if (window.innerWidth > 768) {
        nav.classList.remove('active'); // Remove active class on larger screens
    }
});