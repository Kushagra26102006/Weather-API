const apiKey = "48ccad5985c70f5139280026c5d12e9d";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (response.status === 404) {
            alert("City not found!");
            return;
        }

        const data = await response.json();
        console.log("Weather condition:", data.weather[0].main);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        const condition = data.weather[0].main;

        if (condition === "Clear") {
            weatherIcon.src = "clear.png";
        } else if (condition === "Rain") {
            weatherIcon.src = "rain.png";
        } else if (condition === "Drizzle") {
            weatherIcon.src = "drizzle.png";
        } else if (condition === "Mist") {
            weatherIcon.src = "mist.png";
        } else if (condition === "Clouds") {
            weatherIcon.src = "clouds.png";
        } else {
            weatherIcon.src = "default.png"; 
        }
    } catch (error) {
        alert("Something went wrong. Please try again.");
        console.error(error);
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
checkWeather("Raebareli");

