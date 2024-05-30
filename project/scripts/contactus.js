document.addEventListener('DOMContentLoaded', function() {
    // Update the year and last modified date in the footer
    const currentYearElement = document.getElementById('currentYear');
    const lastModifiedDateElement = document.getElementById('lastModifiedDate');

    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    } else {
        console.error('Current year element not found.');
    }

    if (lastModifiedDateElement) {
        lastModifiedDateElement.textContent = `Last Modified: ${document.lastModified}`;
    } else {
        console.error('Last modified date element not found.');
    }
});
