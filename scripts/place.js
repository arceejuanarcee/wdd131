// Function to calculate wind chill factor
function calculateWindChill(temperature, windSpeed) {
    // Check if conditions are viable for wind chill calculation
    if ((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)) {
        // Calculate wind chill factor
        let windChill = Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
        return windChill + '°C'; // Degrees Celsius symbol
    } else {
        return 'N/A'; // Conditions not met, wind chill not applicable
    }
}

// Variables with static values for temperature and wind speed
const temperature = 10; // Example temperature in Celsius
const windSpeed = 5; // Example wind speed in km/h

// Calculate wind chill and update the HTML content
const windChillElement = document.querySelector('.weather [data-label="Wind Chill:"]');
if (windChillElement) {
    const windChillValue = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = windChillValue; // Update text content only, remove setAttribute
}

// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date
const lastModifiedDate = new Date(document.lastModified);

// Update the HTML elements
document.getElementById('currentYear').innerHTML = `&copy; ${currentYear} - Arcee Juan - Philippines`;
document.getElementById('lastModifiedDate').textContent = `Last modified: ${lastModifiedDate.toDateString()}`;
