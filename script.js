const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4f4b7248f4mshfef044371000942p1109f7jsn4e37e1d491bf',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather= (city) =>{
    cityName.innerHTML = city;

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then(response => {
    //console.log(response)
    cloud_pct.innerHTML =response.cloud_pct
    temp.innerHTML =response.temp
    feels_like.innerHTML =response.feels_like
    humidity.innerHTML =response.humidity
    min_temp.innerHTML =response.min_temp
    max_temp.innerHTML =response.max_temp
    wind_speed.innerHTML =response.wind_speed
    wind_degrees.innerHTML =response.wind_degrees
    sunrise.innerHTML =response.sunrise
    sunset.innerHTML =response.sunset
    })
    .catch(err => console.error(err));

}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value);
})

getWeather("Delhi");



//Kolkata
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
    .then(response => response.json())
    .then(response => {
    //console.log(response)
    cloud_pctK.innerHTML =response.cloud_pct
    tempK.innerHTML =response.temp
    feels_likeK.innerHTML =response.feels_like
    humidityK.innerHTML =response.humidity
    min_tempK.innerHTML =response.min_temp
    max_tempK.innerHTML =response.max_temp
    wind_speedK.innerHTML =response.wind_speed
    wind_degreesK.innerHTML =response.wind_degrees
    sunriseK.innerHTML =response.sunrise
    sunsetK.innerHTML =response.sunset
    })
    .catch(err => console.error(err));


//Mumbai
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
    .then(response => response.json())
    .then(response => {
    //console.log(response)
    cloud_pctM.innerHTML =response.cloud_pct
    tempM.innerHTML =response.temp
    feels_likeM.innerHTML =response.feels_like
    humidityM.innerHTML =response.humidity
    min_tempM.innerHTML =response.min_temp
    max_tempM.innerHTML =response.max_temp
    wind_speedM.innerHTML =response.wind_speed
    wind_degreesM.innerHTML =response.wind_degrees
    sunriseM.innerHTML =response.sunrise
    sunsetM.innerHTML =response.sunset
    })
    .catch(err => console.error(err));

//Hyderabad
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
    .then(response => response.json())
    .then(response => {
    //console.log(response)
    cloud_pctH.innerHTML =response.cloud_pct
    tempH.innerHTML =response.temp
    feels_likeH.innerHTML =response.feels_like
    humidityH.innerHTML =response.humidity
    min_tempH.innerHTML =response.min_temp
    max_tempH.innerHTML =response.max_temp
    wind_speedH.innerHTML =response.wind_speed
    wind_degreesH.innerHTML =response.wind_degrees
    sunriseH.innerHTML =response.sunrise
    sunsetH.innerHTML =response.sunset
    })
    .catch(err => console.error(err));

//Banglore
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bengaluru', options)
    .then(response => response.json())
    .then(response => {
    //console.log(response)
    cloud_pctB.innerHTML =response.cloud_pct
    tempB.innerHTML =response.temp
    feels_likeB.innerHTML =response.feels_like
    humidityB.innerHTML =response.humidity
    min_tempB.innerHTML =response.min_temp
    max_tempB.innerHTML =response.max_temp
    wind_speedB.innerHTML =response.wind_speed
    wind_degreesB.innerHTML =response.wind_degrees
    sunriseB.innerHTML =response.sunrise
    sunsetB.innerHTML =response.sunset
    })
    .catch(err => console.error(err));

//Chennai
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
    .then(response => response.json())
    .then(response => {
    //console.log(response)
    cloud_pctC.innerHTML =response.cloud_pct
    tempC.innerHTML =response.temp
    feels_likeC.innerHTML =response.feels_like
    humidityC.innerHTML =response.humidity
    min_tempC.innerHTML =response.min_temp
    max_tempC.innerHTML =response.max_temp
    wind_speedC.innerHTML =response.wind_speed
    wind_degreesC.innerHTML =response.wind_degrees
    sunriseC.innerHTML =response.sunrise
    sunsetC.innerHTML =response.sunset
    })
    .catch(err => console.error(err));

//Surat
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Surat', options)
    .then(response => response.json())
    .then(response => {
    //console.log(response)
    cloud_pctS.innerHTML =response.cloud_pct
    tempS.innerHTML =response.temp
    feels_likeS.innerHTML =response.feels_like
    humidityS.innerHTML =response.humidity
    min_tempS.innerHTML =response.min_temp
    max_tempS.innerHTML =response.max_temp
    wind_speedS.innerHTML =response.wind_speed
    wind_degreesS.innerHTML =response.wind_degrees
    sunriseS.innerHTML =response.sunrise
    sunsetS.innerHTML =response.sunset
    })
    .catch(err => console.error(err));

