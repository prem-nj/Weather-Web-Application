const apikey = "8fefd4d3f0ec148eb1379ce512eec91a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkweather(city) {
    document.querySelector(".loading").style.display = "block";
    document.querySelector(".maincont").style.display = "none";
    document.querySelector(".error").style.display = "none";

    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    document.querySelector(".loading").style.display = "none";

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
    } else {
        const data = await response.json();

        document.querySelector("#humid_val").innerHTML = data.main.humidity + "%";
        document.querySelector(".city_Name h2").innerHTML = data.name;
        document.querySelector("#wind_val").innerHTML = data.wind.speed + " Km/h";
        document.querySelector(".tempdisplay h1").innerHTML = Math.round(data.main.temp) + " °C";

        const weatherIcon = document.querySelector("#wthr_icon");
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/cloudy.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rainy.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".maincont").style.display = "flex";
    }
}

document.getElementById("searchbtn").addEventListener("click", () => {
    const city = document.getElementById("input").value;
    if (city) {
        checkweather(city);
    }
});