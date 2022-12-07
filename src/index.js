let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};

//Feature #1
let now = new Date();

let date = now.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let today = days[date];

let hour = now.getHours();
//console.log(hour)
let minutes = now.getMinutes();
//console.log(minutes)

let time = document.querySelector("#current-time");
if (minutes <= 9) {
  time.innerHTML = `${today} ${hour}:0${minutes}`;
} else {
  time.innerHTML = `${today} ${hour}:${minutes}`;
}

//homework 5
function showWeather(response) {
  //console.log(response)
  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector("#todayDayTemperature").innerHTML = Math.round(response.data.main.temp);
}

function city(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-input").value;
  let apiKey = `58a6775f97527351bf6c6966e209be39`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&q=${cityInput}&appid=${apiKey}units=metric`;
  //console.log(apiUrl);
  axios.get(apiUrl).then(showWeather);
}

let search = document.querySelector("#city-search");
search.addEventListener("submit", city);