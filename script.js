const apiKey = '490bfdc1a0023ba5d56b9f7f7c7738a0';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const location = locationInput.value.trim();
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = ${apiUrl}?q=${location}&appid=${apiKey}&units=metric;

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch weather data');
            }
        })
        .then(data => {
            if (data && data.name && data.main && data.main.temp && data.weather && data.weather[0] && data.weather[0].description) {
                locationElement.textContent = data.name;
                temperatureElement.textContent = ${Math.round(data.main.temp)}°C;
                descriptionElement.textContent = data.weather[0].description;
            } else {
                console.error('Invalid API response');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
