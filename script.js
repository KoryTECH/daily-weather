'use strict'
// ipify and openweather api key and url
const IPIFY_URL = `http://ip-api.com/json/`
const OPENWEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast`
const OPENWEATHER_KEY = `5efc126ec2af885ecd3006733142d32b`

let latitude;
let longitude;
window.onload = function(){
    fetch(`${IPIFY_URL}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        latitude = data.lat
        longitude= data.lon
        // console.log(latitude)
        // console.log(longitude)
    })
    .catch((error) => {
        console.error('Error fetching visitor IP:', error);
    });
    console.log(`lat:${latitude}`)
    console.log(`lon:${longitude}`)
}