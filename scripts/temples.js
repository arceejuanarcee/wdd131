document.addEventListener('DOMContentLoaded', function() {
    const hamButton = document.getElementById('hambutton');
    const mainNav = document.querySelector('.main-nav'); // Corrected selector

    hamButton.addEventListener('click', function() {
        hamButton.classList.toggle('open');
        mainNav.classList.toggle('open');
    });
});

// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date
const lastModifiedDate = new Date(document.lastModified);

// Update the HTML elements
document.getElementById('currentYear').innerHTML = `&copy; ${currentYear} - Arcee Juan - Philippines`;
document.getElementById('lastModifiedDate').textContent = `Last modified: ${lastModifiedDate.toDateString()}`;
