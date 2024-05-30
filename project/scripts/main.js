document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hambutton');
    const mainNav = document.querySelector('.main-nav');

    hamburgerBtn.addEventListener('click', function() {
        mainNav.classList.toggle('open');
    });
});

const prophotpicks = [
    {
        propName: "Deca Talomo",
        location: "Baliok, Davao City",
        area: 200,
        storeyNumber: 1,
        imageUrl: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        propName: "Deca Indangan",
        location: "Indangan, Davao City",
        area: 250,
        storeyNumber: 1,
        imageUrl: "https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        propName: "South Pacific",
        location: "Catalunan, Davao City",
        area: 300,
        storeyNumber: 3,
        imageUrl: "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
];

const properties = [
    {
        propName: "Deca Talomo",
        location: "Baliok, Davao City",
        area: 200,
        storeyNumber: 1,
        imageUrl: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        propName: "Deca Indangan",
        location: "Indangan, Davao City",
        area: 250,
        storeyNumber: 1,
        imageUrl: "https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        propName: "South Pacific",
        location: "Catalunan, Davao City",
        area: 300,
        storeyNumber: 3,
        imageUrl: "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        propName: "Camella Toscana",
        location: "Puan, Davao City",
        area: 200,
        storeyNumber: 2,
        imageUrl: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        propName: "Camella Northpoint",
        location: "Buhangin, Davao City",
        area: 210,
        storeyNumber: 2,
        imageUrl: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        propName: "Camella Solariega",
        location: "Bago, Davao City",
        area: 205,
        storeyNumber: 2,
        imageUrl: "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        propName: "Samantha Home",
        location: "Bago Gallera, Davao City",
        area: 200,
        storeyNumber: 2,
        imageUrl: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        propName: "Amiya",
        location: "Toril, Davao City",
        area: 230,
        storeyNumber: 2,
        imageUrl: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        propName: "Las Colinas",
        location: "Eden, Davao City",
        area: 250,
        storeyNumber: 2,
        imageUrl: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
];

function displayProperties(filteredProperties) {
    const propertyContainer = document.getElementById('property-container');
    propertyContainer.innerHTML = ''; // Clear existing content

    filteredProperties.forEach(property => {
        const propertyCard = document.createElement('figure');
        propertyCard.innerHTML = `
            <img src="${property.imageUrl}" alt="${property.propName}" loading="lazy">
            <figcaption>
                <strong>${property.propName}</strong><br>
                Location: ${property.location}<br>
                Area: ${property.area} sqm<br>
                Storeys: ${property.storeyNumber}
            </figcaption>`;
        propertyContainer.appendChild(propertyCard);
    });
}

// Call the function to display initial hot picks properties
displayProperties(prophotpicks);

// Add event listener to the "Property Listings" navigation link
document.querySelector('.main-nav a[href="#listings"]').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    displayProperties(properties); // Display the properties array
});

// Add event listener to the "Home" navigation link
document.querySelector('.main-nav a[href="#home"]').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    displayProperties(prophotpicks); // Display the hot picks properties
});

// Update the year and last modified date in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModifiedDate').textContent = `Last Modified: ${document.lastModified}`;

