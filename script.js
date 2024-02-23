
const options = {
method: 'GET',
headers: {
'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'

}
};
const getWeather=(city)=>{
    cityName.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    // fetch('https://open-weather13.p.rapidapi.com/'+city, options)
    .then(response => response.json())
    .then((response) => {
        
        
        console.log(response)
        
        
        cloud_pct.innerHTML=response.cloud_pct
        temp.innerHTML=response.temp
        temp2.innerHTML=response.temp
        feels_like.innerHTML=response.feels_like
        humidity.innerHTML=response.humidity
        humidity2.innerHTML=response.humidity
        min_temp.innerHTML=response.min_temp
        max_temp.innerHTML=response.max_temp
        wind_speed.innerHTML=response.wind_speed
        wind_degrees.innerHTML=response.wind_degrees
        sunrise.innerHTML=response.sunrise
        sunset.innerHTML =response.sunset
        
    })
    .catch(err => console.error(err));
    
}


submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")
document.getElementById("Seattle").addEventListener("click", () => getWeather("Seattle"));
document.getElementById("Delhi").addEventListener("click", () => getWeather("Delhi"));
document.getElementById("Bangalore").addEventListener("click", () => getWeather("Bangalore"));

const Weather=(city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then((response) => {
        
        
        console.log(response)
        
        
        shangai_cloud.innerHTML=response.cloud_pct
        shangai_temp.innerHTML=response.temp
        shangai_feels.innerHTML=response.feels_like
        shangai_humidity.innerHTML=response.humidity
        shangai_min_temp.innerHTML=response.min_temp
        shangai_max_temp.innerHTML=response.max_temp
        shangai_wind_speed.innerHTML=response.wind_speed
        shangai_wind_degrees.innerHTML=response.wind_degrees
        shangai_sunrise.innerHTML=response.sunrise
        shangai_sunset.innerHTML =response.sunset
        
    })
    .catch(err => console.error(err));
    
}


submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
Weather("shangai")
const Weathe=(city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then((response) => {
        
        
        console.log(response)
        
        
        boston_cloud.innerHTML=response.cloud_pct
        boston_temp.innerHTML=response.temp
        boston_feels.innerHTML=response.feels_like
        boston_humidity.innerHTML=response.humidity
        boston_min_temp.innerHTML=response.min_temp
        boston_max_temp.innerHTML=response.max_temp
        boston_wind_speed.innerHTML=response.wind_speed
        boston_wind_degrees.innerHTML=response.wind_degrees
        boston_sunrise.innerHTML=response.sunrise
        boston_sunset.innerHTML =response.sunset
        
    })
    .catch(err => console.error(err));
    
}


submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
Weathe("Boston")
const Weath=(city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then((response) => {
        
        
        console.log(response)
        
        
        banglore_cloud.innerHTML=response.cloud_pct
        banglore_temp.innerHTML=response.temp
        banglore_feels.innerHTML=response.feels_like
        banglore_humidity.innerHTML=response.humidity
        banglore_min_temp.innerHTML=response.min_temp
        banglore_max_temp.innerHTML=response.max_temp
        banglore_wind_speed.innerHTML=response.wind_speed
        banglore_wind_degrees.innerHTML=response.wind_degrees
        banglore_sunrise.innerHTML=response.sunrise
        banglore_sunset.innerHTML =response.sunset
        
    })
    .catch(err => console.error(err));
    
}


submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
Weath("Bangalore")
Weathe("Boston")
const Weat=(city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then((response) => {
        
        
        console.log(response)
        
        
        kolkata_cloud.innerHTML=response.cloud_pct
        kolkata_temp.innerHTML=response.temp
        kolkata_feels.innerHTML=response.feels_like
        kolkata_humidity.innerHTML=response.humidity
        kolkata_min_temp.innerHTML=response.min_temp
        kolkata_max_temp.innerHTML=response.max_temp
        kolkata_wind_speed.innerHTML=response.wind_speed
        kolkata_wind_degrees.innerHTML=response.wind_degrees
        kolkata_sunrise.innerHTML=response.sunrise
        kolkata_sunset.innerHTML =response.sunset
        
    })
    .catch(err => console.error(err));
    
}


submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
Weat("Kolkata")