const apiKey = "36d197eb10a0afdeece4668f3a6a3c70";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);

  if (data.name === undefined) {
    alert("Please choose a location");
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  }

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "weatherImages/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "weatherImages/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "weatherImages/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "weatherImages/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "weatherImages/mist.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "weatherImages/snow.png";
  } else if (data.weather[0].main == "Wind") {
    weatherIcon.src = "weatherImages/wind.png";
  } else if (data.weather[0].main == "Haze") {
    weatherIcon.src = "weatherImages/wind.png";
  }

  document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
