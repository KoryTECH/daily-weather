'use strict'
const OPENWEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast`
const OPENWEATHER_KEY = `5efc126ec2af885ecd3006733142d32b`

let lat;
let lon;
function getWeatherInfoOnLoad(){
window.onload = function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        fetch(`${OPENWEATHER_URL}?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const date = data.list[0].dt_txt.split(' ')[0]
            const locationName = data.city.name;
            const minRange = data.list[0].main.temp_min;
            const maxRange = data.list[0].main.temp_max;
            const description = data.list[0].weather[0].description
            
            let list = data.list;
            console.log(list[10])
            document.getElementById('main-temp').innerText  = data.list[0].main.temp;
            document.getElementById('location').innerText = locationName;
            document.getElementById('date').innerText = date;
            document.getElementById('temp-description').innerText = description;
            document.getElementById('temp-range').innerText = `H:${maxRange} L:${minRange}`;

          

        })
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
    
}}
getWeatherInfoOnLoad()
// console.log(`lat:${lat}, lon:${lon}`)

// fetch(`${OPENWEATHER_URL}?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_KEY}&units=metric`)
// .then(response => response.json())
// .then(console.log)