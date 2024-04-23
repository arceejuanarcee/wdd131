// getdates.js

// Get the current year
const currentYear = new Date().getFullYear();

// Update the footer's first paragraph with the current year
const copyrightYearElement = document.querySelector('footer p:first-of-type span');
if (copyrightYearElement) {
    copyrightYearElement.textContent = currentYear;
}

// Get the last modified date of the document
const lastModifiedDate = new Date(document.lastModified);

// Format the last modified date with date and time
const formattedLastModifiedDate = `${lastModifiedDate.toDateString()} ${lastModifiedDate.toLocaleTimeString()}`;

// Update the footer's second paragraph with the formatted last modified date
const lastModifiedElement = document.querySelector('footer p:last-of-type');
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Document last modified: ${formattedLastModifiedDate}`;
}
