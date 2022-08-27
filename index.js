// let weather = {
//     apikey : ,
//     fetchApi : function(){
//         fetch()
//     }
// }


const apiKey = "46b8290e10720ddf63504aebd46fc114"
// const Api = "https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=46b8290e10720ddf63504aebd46fc114" 


const search = document.getElementById("input")
const btn = document.getElementById("btn")
const weather = document.getElementById("weather")


const getWeather = async (city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    const response = await fetch(url)
    const data = await response.json()
    // return showWeather(data)
    // console.log(data)
    weather.innerHTML = `
    <div 
        class="city">Weather in ${data.name}
    </div>
    <div 
        class="temp">${data.main.temp} Cel <i class="fa-solid fa-temperature-empty"></i>
    </div>
    <div 
        class="desp">Cloudy <i class="fa-solid fa-cloud"></i>
    </div>
    <div 
        class="Humidity">Humidity : ${data.main.humidity}  <i class="fa-solid fa-droplet-degree"></i> 
    </div>
    <div
     class="wind">Wind Speed : ${data.wind.speed}
     </div>`
    
    
}

// const showWeather = (data)=>{
//     console.log(data)
//     weather.innerHTML = `
//     <div 
//         class="city">Weather in ${data.name}
//     </div>
//     <div 
//         class="temp">${data.main.temp} Cel <i class="fa-solid fa-temperature-empty"></i>
//     </div>
//     <div 
//         class="desp">Cloudy <i class="fa-solid fa-cloud"></i>
//     </div>
//     <div 
//         class="Humidity">Humidity : ${data.main.humidity}  <i class="fa-solid fa-droplet-degree"></i> 
//     </div>
//     <div
//      class="wind">Wind Speed : ${data.wind.speed}
//      </div>`
    



// }



btn.addEventListener("click", function(event){
    getWeather(search.value)
})
