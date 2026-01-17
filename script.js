'use strict'
const OPENWEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast`
const OPENWEATHER_KEY = `5efc126ec2af885ecd3006733142d32b`

let lat;
let lon;

window.onload = function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        fetch(`${OPENWEATHER_URL}?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.querySelector('#location').textContent = data.city.name;
            document.querySelector('#date').textContent = data.list[0].dt_txt;
        })
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
    
}
// console.log(`lat:${lat}, lon:${lon}`)

// fetch(`${OPENWEATHER_URL}?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_KEY}&units=metric`)
// .then(response => response.json())
// .then(console.log)