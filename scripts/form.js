document.addEventListener("DOMContentLoaded", () => {
    // Common functionality for both form and review pages
    const currentYear = new Date().getFullYear();
    const lastModifiedDate = new Date(document.lastModified);

    if (document.getElementById('currentYear')) {
        document.getElementById('currentYear').innerHTML = `&copy; ${currentYear} - Arcee Juan - Philippines`;
    }

    if (document.getElementById('lastModifiedDate')) {
        document.getElementById('lastModifiedDate').textContent = `Last modified: ${lastModifiedDate.toDateString()}`;
    }

    // Form page specific functionality
    if (document.getElementById('productName')) {
        const products = [
            {
                id: "fc-1888",
                name: "flux capacitor",
                avgRating: 4.5
            },
            {
                id: "fc-2050",
                name: "power laces",
                avgRating: 4.7
            },
            {
                id: "fs-1987",
                name: "time circuits",
                avgRating: 3.5
            },
            {
                id: "ac-2000",
                name: "low voltage reactor",
                avgRating: 3.9
            },
            {
                id: "jj-1969",
                name: "warp equalizer",
                avgRating: 5.0
            }
        ];
    
        const productSelect = document.getElementById("productName");
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });

        // Add submit event listener to increment the review counter
        document.getElementById('review-form').addEventListener('submit', () => {
            let reviewCount = localStorage.getItem('reviewCount') || 0;
            reviewCount++;
            localStorage.setItem('reviewCount', reviewCount);
        });
    }

    // Review page specific functionality
    if (document.getElementById('reviewCount')) {
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        document.getElementById('reviewCount').textContent = reviewCount;
    }
});
