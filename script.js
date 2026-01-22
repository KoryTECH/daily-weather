'use strict'
const OPENWEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast`;
const OPENWEATHER_KEY = `5efc126ec2af885ecd3006733142d32b`;
const OPENCAGE_KEY = `75caf9cfcc1c44f2914802b3d1cd08aa`;
let lat;
let lon;

const button = document.querySelector('button');
const input = document.getElementById('input')

// function to fetch and display data from openweather api
function fetchAndDisplay(){
  fetch(`${OPENWEATHER_URL}?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            const date = data.list[0].dt_txt.split(' ')[0]
            const locationName = data.city.name;
            const minRange = data.list[0].main.temp_min;
            const maxRange = data.list[0].main.temp_max;
            const description = data.list[0].weather[0].description
            const temIcon = data.list[0].weather[0].icon
            // the display of the main information
            document.getElementById('main-temp').innerText  = `${data.list[0].main.temp}℃`;
            document.getElementById('location').innerText = locationName;
            document.getElementById('date').innerText = date;
            document.getElementById('temp-description').innerText = description;
            document.getElementById('temp-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${temIcon}@2x.png" alt="${description}">`;            document.getElementById('temp-range').innerText = `H:${maxRange} L:${minRange}`;
            // giving a variable to the data List
            let list = data.list;
            // console.log(list)
            // gets the first five object in the array and store them in an array called hours
            let hours = [];
            for (let i = 0; i < 5; i++) {
              hours.push(list[i]);
            }
            // gets the five days out of the response from the api
            let days = [];
            for(let index = 0; index < 39; index+=5 ){
              days.push(list[index])
            }
            // displaying the hourly data
            let hourlyHtml='';
                for(let x = 0; x<5; x++){
                  const iconCode = hours[x].weather[0].icon;
                  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
                  hourlyHtml += `
                    <div class="hour">
                      <div class="current">${hours[x].dt_txt.split(' ')[1]}</div>
                      <div class="current hourly weather-icon"><img src="${iconUrl}" alt="${hours[x].weather[0].description}"></div>
                      <div class="current">${hours[x].main.temp}℃</div>
                  </div>
              `;
              document.querySelector('.five-hours-forecast').innerHTML = hourlyHtml
                }

          // displaying the daily data
                let dailyHtml = ''
        //     days.forEach(day=>{
        //         document.querySelector('.five-hour-forecast').innerHTML = `
        //             <div class="hour">
        //             <div class="current">${data.list[0].dt_txt.split(' ')[i]}</div>
        //             <div class="current hourly weather-description">${data.list[i].dt_txt.split(' ')[1]}</div>
        //             <div class="current hourly temp">${list[x].main.temp}</div>
        //           </div>
        //       `;
        //     })
            console.log(hours)
            console.log(days)
            
        })
}

let encodedLocation = ''
// this function has the api that gets the location entered in the input section then gets the latitude and longitude, then update the longitude and latitude variable
function getnewLonAndLat(){
  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodedLocation}&key=${OPENCAGE_KEY}`)
  .then(response => response.json())
  .then(data => {
    // console.log(data)
    lat = data.results[0].geometry.lat;
    lon = data.reuslts[0].geometry.lng;
  })
}
// getting the user location(longitude and latitude) onload to fetch the weather info on load and updates the longitude and latitude variable
window.onload = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      fetchAndDisplay()
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
}

input.classList.add('hidden')
button.addEventListener('click', function(){
  if(input.classList.contains('hidden')){
    input.classList.remove('hidden')
  }
  else if(!input.classList.contains('hidden') && input.value !== '') {
    input.value = encodedLocation
    getnewLonAndLat()
    fetchAndDisplay()
    console.log('fetching')
  }
  else {
    input.classList.add('hidden')
  }
})
