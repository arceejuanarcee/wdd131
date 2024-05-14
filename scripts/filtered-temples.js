document.addEventListener('DOMContentLoaded', function() {
    const hamButton = document.getElementById('hambutton');
    const mainNav = document.querySelector('.main-nav');
    const gridContainer = document.querySelector('.grid-container');

    hamButton.addEventListener('click', function() {
        hamButton.classList.toggle('open');
        mainNav.classList.toggle('open');
    });

    document.getElementById('currentYear').innerHTML = `&copy; ${new Date().getFullYear()} - Arcee Juan - Philippines`;
    document.getElementById('lastModifiedDate').textContent = `Last modified: ${new Date(document.lastModified).toDateString()}`;

    const temples = [
        {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
          templeName: "Manti Utah",
          location: "Manti, Utah, United States",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
          templeName: "Payson Utah",
          location: "Payson, Utah, United States",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
          templeName: "Yigo Guam",
          location: "Yigo, Guam",
          dedicated: "2020, May, 2",
          area: 6861,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
          templeName: "Washington D.C.",
          location: "Kensington, Maryland, United States",
          dedicated: "1974, November, 19",
          area: 156558,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
          templeName: "Lima Perú",
          location: "Lima, Perú",
          dedicated: "1986, January, 10",
          area: 9600,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
          templeName: "Mexico City Mexico",
          location: "Mexico City, Mexico",
          dedicated: "1983, December, 2",
          area: 116642,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Cebu City Philippines",
            location: "Cebu City, Philippines",
            dedicated: "2010, June, 13",
            area: 29556,
            imageUrl:
            "https://churchofjesuschrist.org/imgs/1b2c438fbf03dce153643292f31889fcc54dd95a/full/320%2C/0/default"
          },
          {
            templeName: "Manila Philippines",
            location: "Quezon City, Philippines",
            dedicated: "1984, September, 25",
            area: 26683,
            imageUrl:
            "https://churchofjesuschrist.org/imgs/cf62ebb59aefa1d2856981fb77574fb9982c5fad/full/320%2C/0/default"
          },
          {
            templeName: "Urdaneta Philippines",
            location: "Urdaneta City, Philippines",
            dedicated: "2024, April, 28",
            area: 32604,
            imageUrl:
            "https://www.churchofjesuschrist.org/imgs/46910789b4c911eeaf5feeeeac1ed77e9a30ef3f/full/320%2C/0/default"
          },
      ];

    function displayTemples(filteredTemples) {
        gridContainer.innerHTML = ''; // Clear existing content
        filteredTemples.forEach(temple => {
            const templeCard = document.createElement('figure');
            templeCard.innerHTML = `
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                <figcaption>
                    <strong>${temple.templeName}</strong><br>
                    Location: ${temple.location}<br>
                    Dedicated: ${temple.dedicated}<br>
                    Size: ${temple.area} sq ft
                </figcaption>`;
            gridContainer.appendChild(templeCard);
        });
    }

    // Event listeners for menu items
    document.querySelectorAll('.main-nav a').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            switch (item.textContent) {
                case 'Home':
                    displayTemples(temples);
                    break;
                case 'Old':
                    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
                    break;
                case 'New':
                    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
                    break;
                case 'Large':
                    displayTemples(temples.filter(t => t.area > 90000));
                    break;
                case 'Small':
                    displayTemples(temples.filter(t => t.area < 10000));
                    break;
            }
        });
    });

    // Initial display
    displayTemples(temples);
});
