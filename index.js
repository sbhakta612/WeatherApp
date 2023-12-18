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
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  }

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "weatherImages/clouds.png";
    document.querySelector(".icon-details").innerHTML =
      "It's cloudy. Definitely recommend not leaving without some type of coat!";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "weatherImages/clear.png";
    document.querySelector(".icon-details").innerHTML =
      "It's a sunny day for shades!";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "weatherImages/rain.png";
    document.querySelector(".icon-details").innerHTML =
      "Looks like you need an umbrella.";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "weatherImages/drizzle.png";
    document.querySelector(".icon-details").innerHTML =
      "You might want to bring an umbrella or raincoat.";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "weatherImages/mist.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "weatherImages/snow.png";
    document.querySelector(".icon-details").innerHTML =
      "Make sure you're wearing a scarf and gloves so you can enjoy a good snowball fight!";
  } else if (data.weather[0].main == "Wind") {
    weatherIcon.src = "weatherImages/wind.png";
    if (data.wind.speed > 5) {
      document.querySelector(".wind-details").innerHTML =
        "It's a bit windy! Dress in layers.";
    }
  } else if (data.weather[0].main == "Haze") {
    weatherIcon.src = "weatherImages/wind.png";
  } else if (data.weather[0].main == "Smoke") {
    weatherIcon.src = "weatherImages/clouds.png";
  }
  if (data.main.temp >= 0 && data.main.temp <= 15) {
    document.querySelector(".temp-details").innerHTML =
      "Bundle up! Wear a coat or a parka. Wool, leather, or waterproof fabrics on the outside and layer with something warm like cashmere underneath. Boots would be great! Don't forget to accessorize with a scarf and gloves.";
  } else if (data.main.temp > 15 && data.main.temp <= 20) {
    document.querySelector(".temp-details").innerHTML =
      "You need a medium weight coat. Light wool, leather, waterproof fabrics on the outside and layer underneath it a cotton shirt or any other thin material. It's the perfect time for an ankle boot! Don't forget to accessorize with a scarf. ";
  } else if (data.main.temp > 20 && data.main.temp <= 30) {
    document.querySelector(".temp-details").innerHTML =
      "Cotton, jersey, and denim are all good materials to wear. Light fabrics with short sleeves. Think of indoor air conditioning, bring a cardigan or light sweater!";
  } else if (data.main.temp > 30) {
    document.querySelector(".temp-details").innerHTML =
      "Wear light fabrics. A skirt or maxi dress would be perfect. Alternatively, a short sleeve t shirt and jeans or shorts. Sneakers, sandals, open toed shoes are a much better option than heavy boots. Think of indoor air conditioning and take with you a cardigan! ";
  }

  document.querySelector(".weather").style.display = "block";
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
