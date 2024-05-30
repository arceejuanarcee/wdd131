document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hambutton');
    const mainNav = document.querySelector('.main-nav');

    hamburgerBtn.addEventListener('click', function() {
        mainNav.classList.toggle('open');
    });
});

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

    // Form page specific functionality
    const productSelect = document.getElementById('productName');
    if (productSelect) {
        const properties = [
            { propName: "Deca Talomo", location: "Baliok, Davao City", area: 200, storeyNumber: 1 },
            { propName: "Deca Indangan", location: "Indangan, Davao City", area: 250, storeyNumber: 1 },
            { propName: "South Pacific", location: "Catalunan, Davao City", area: 300, storeyNumber: 3 },
            { propName: "Camella Toscana", location: "Puan, Davao City", area: 200, storeyNumber: 2 },
            { propName: "Camella Northpoint", location: "Buhangin, Davao City", area: 210, storeyNumber: 2 },
            { propName: "Camella Solariega", location: "Bago, Davao City", area: 205, storeyNumber: 2 },
            { propName: "Samantha Home", location: "Bago Gallera, Davao City", area: 200, storeyNumber: 2 },
            { propName: "Amiya", location: "Toril, Davao City", area: 230, storeyNumber: 2 },
            { propName: "Las Colinas", location: "Eden, Davao City", area: 250, storeyNumber: 2 }
        ];

        properties.forEach(property => {
            const option = document.createElement('option');
            option.value = property.propName;
            option.textContent = `${property.propName} (${property.location}) - Area: ${property.area} sqm, Storeys: ${property.storeyNumber}`;
            productSelect.appendChild(option);
        });

        // Add submit event listener to increment the review counter
        const reviewForm = document.getElementById('review-form');
        if (reviewForm) {
            reviewForm.addEventListener('submit', function() {
                let reviewCount = localStorage.getItem('reviewCount') || 0;
                reviewCount++;
                localStorage.setItem('reviewCount', reviewCount);
            });
        } else {
            console.error('Review form element not found.');
        }
    }

    // Review page specific functionality
    const reviewCountElement = document.getElementById('reviewCount');
    if (reviewCountElement) {
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCountElement.textContent = reviewCount;
    } else {
        console.error('Review count element not found.');
    }

    // Home button functionality
    const homeButton = document.getElementById('homeButton');
    if (homeButton) {
        homeButton.addEventListener('click', function() {
            window.location.href = 'project.html';
        });
    } else {
        console.error('Home button element not found.');
    }
});
