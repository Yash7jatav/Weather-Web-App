const result = document.querySelector(".result");
const searchBtn = document.querySelector(".searchBtn");
const cityInp = document.querySelector(".searchInp");


const getWeather = async () => {

    let cityValue = cityInp.value;

    if(cityValue.length == 0){
        result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
            cityValue = "";
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
            result.innerHTML = `

            <h2>${data.name}</h2>

            <h4 class="weather">${data.weather[0].main}</h4>

            <h4 class="desc">${data.weather[0].description}</h4>

            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">

            <h1>${data.main.temp} &#176;</h1>

            <div class="temp-container">

                <div>
                    <h4 class="title">min</h4>
                    <h4 class="temp">${data.main.temp_min}</h4>
                </div>

                <div>
                    <h4 class="title">max</h4>
                    <h4 class="temp">${data.main.temp_max}</h4>
                </div>
                
            </div>
        `
        
        }catch(err){
            result.innerHTML = `<h3 class="msg">City not Found</h3>`;
        }
    };    
};

searchBtn.addEventListener("click", getWeather);

window.addEventListener("load", getWeather);
