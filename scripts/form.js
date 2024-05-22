document.addEventListener("DOMContentLoaded", () => {
    // Get the current year
    const currentYear = new Date().getFullYear();
    
    // Get the last modified date
    const lastModifiedDate = new Date(document.lastModified);
    
    // Update the HTML elements
    document.getElementById('currentYear').innerHTML = `&copy; ${currentYear} - Arcee Juan - Philippines`;
    document.getElementById('lastModifiedDate').textContent = `Last modified: ${lastModifiedDate.toDateString()}`;
    
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
});
