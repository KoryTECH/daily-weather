'use strict'
const OPENWEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast`;
const OPENWEATHER_KEY = `5efc126ec2af885ecd3006733142d32b`;
// const OPENCAGE_KEY = `75caf9cfcc1c44f2914802b3d1cd08aa`;
let lat;
let lon;
const button = document.querySelector('button');
const input = document.getElementById('input')

// function to fetch and display data from openweather api
function fetchAndDisplay(){
  fetch(`${OPENWEATHER_URL}?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
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
            document.getElementById('temp-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${temIcon}@2x.png" alt="${description}">`;   
            document.getElementById('temp-range').innerText = `H:${maxRange} L:${minRange}`;
            // giving a variable to the data List
            let list = data.list;
        // gets the first five object in the array and store them in an array called hours
            let hours = [];
            for (let i = 0; i < 5; i++) {
              hours.push(list[i]);
            }
            // gets the five days out of the response from the api
            let days = [];
            for(let index = 0; index < 39; index+=8 ){
              days.push(list[index])
            }
            // displaying the hourly data
            let hourlyHtml='';
                for(let x = 0; x<hours.length; x++){
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
                for(let y = 0; y < days.length; y++){
                  const iconCode = days[y].weather[0].icon;
                  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
                  dailyHtml += `
                  <div class="first day">
                    <span id="first-day-icon"><img src="${iconUrl}" alt="${days[y].weather[0].description}"></span>
                    <span id="first- day-date">
                        <p id="day-of-the-week">${days[y].dt_txt.split(' ')[0]}</p>
                        <p id="weather-description">${days[y].weather[0].description}</p>
                    </span>
                    <span id="temp">
                        <p id="main-temp-of-the-day">${days[y].main.temp}°</p>
                        <p id="temp-range">/${days[y].main.temp_max}°</p>
                    </span>
                 </div>
                  `; 
                  document.querySelector('.next-five-days').innerHTML = dailyHtml
                }
                const humidity =  data.list[0].main.humidity;
                const feelsLike = data.list[0].main.feels_like;
                const windSpeed = data.list[0].wind.speed;
                const pressure = data.list[0].main.pressure;

                  document.getElementById('humidity').innerText = humidity;
                  document.getElementById('pressure').innerText = pressure;
                  document.getElementById('wind-speed').innerText = windSpeed;
                  document.getElementById('feels-like').innerText = feelsLike;

            
        })
        .catch(error => {
          document.getElementById('main-temp').innerText  = 'Refresh'
          console.error("Error:", error);
        })
  }
let cityName = '';
// this function has the api that gets the location entered in the input section then gets the latitude and longitude, then update the longitude and latitude variable
function getnewLonAndLat(){
  fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${OPENWEATHER_KEY}`)
  .then(response => response.json())
  .then(data => {
    (data)
    
    lat = data[0].lat;
    lon = data[0].lon;
    fetchAndDisplay()

  })
}
// getnewLonAndLat()
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

input.classList.add('hidden');
button.addEventListener('click', function(){
  if(input.classList.contains('hidden')){
    input.classList.remove('hidden');
  }
  else if(!input.classList.contains('hidden') && input.value !== '') {
    cityName = input.value;
    getnewLonAndLat()
    
  }
  else {
    input.classList.add('hidden')
  }
});
