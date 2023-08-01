const apiKey = "f820136f53ae53474eb00043ba08d7b8";
let search = ''
let cityForm = document.getElementById('city-form')
let cityInput = document.getElementById('city-input')
let cityName = document.getElementById('city-name')
let cityTemp = document.getElementById('temps')
let cityFeels = document.getElementById('feel')
let cityWind = document.getElementById('wind')
let icon = document.getElementById('icon')

cityForm.addEventListener('submit', event =>{
    event.preventDefault();
    search = cityInput.value;


fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`)
.then(response => response.json())
.then(data =>{
    cityName.innerHTML = data.name;
    cityTemp.innerHTML = data.main.temp;
    cityFeels.innerHTML = data.main.feels_like;
    cityWind.innerHTML = data.wind.speed;

    let iconLink = data.weather[0].icon
    icon.setAttribute('src', `https://openweathermap.org/img/wn/${iconLink}@2x.png`)
    
    })
});