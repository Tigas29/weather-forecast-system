const apiKey = "3bfa59ce2cb1d84d5aa995900b81ecac";

function Showdata(data) {
  console.log(data);
  document.querySelector(".city").innerHTML = "Tempo em " + data.name;
  document.querySelector(".weather").innerHTML =
    Math.floor(data.main.temp) + "°C";
  document.querySelector(".weatherText").innerHTML =
    data.weather[0].description;
  document.querySelector(".moisture").innerHTML =
    "Umidade : " + data.main.humidity + "%";
  document.querySelector(
    ".cloudsImg"
  ).src = ` https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}
async function searchCity(city) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`
  ).then((response) => response.json());

  Showdata(data);
}
function clickeOnButton() {
  const city = document.querySelector(".inputCity").value;
  searchCity(city);
}
