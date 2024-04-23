// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date
const lastModifiedDate = new Date(document.lastModified);

// Update the HTML elements
document.querySelector('footer p:first-child').textContent = `© ${currentYear} - Arcee Juan - Philippines`;
document.getElementById('lastModifiedDate').textContent = `Last modified: ${lastModifiedDate.toDateString()}`;
