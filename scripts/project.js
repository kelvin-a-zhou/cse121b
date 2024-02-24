function weather(){
    const apiKey = "66fd1d44efd1e7780e6afb3da20d78b7";
    var cityName = document.querySelector("#cityName").value;
    const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&`;

    const weatherInfo =document.querySelector("#weatherInfo"); // to manipulate the text inside the empty div with ID weatherInfo
    fetch(apiLink)
        .then(Response => Response.json())
        .then(data => {

            //const weatherInfo = document.querySelector("#weatherInfo"); can also add it here
            var temperature  = data.main.temp  ;
            var description = data.weather[0].description;
            var humidity = data.main.humidity;
            var wind = data.wind.speed;

            weatherInfo.innerHTML= `
            <center><h3> Weather for <b>${cityName}</b> </h3>
            <p>Temperature Today is:<b> ${temperature}</b> degrees celcius</p>
            <p>Description: ${description} </p>
            <p>Humidity: <b>${humidity}%</b> </p>
            <p>Wind Speed: <b>${wind}m/s</b> </p>
            `;
            })

        .catch(error =>{
            console.error('Failed to fetch weather data',error);//to console for developer(user canno see this result)
            //const weatherInfo =document.querySelector("#weatherInfo"); and add it here for user dislay error message
            weatherInfo.textContent = "Failed to fecth weather data. Please try again later."; //for user displayed on the empty div section where the weather data is supposed to display
        })
}

