    const apiKey ="e2abe7f5c1bbfe02cadc3a72caa8b3b3"
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

    const searchbox = document.querySelector("#upperMain input");
    const searchBtn = document.querySelector("#upperMain button");

    async function checkWheather(city) {
        const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
        var data = await response.json();
        console.log(data);
    document.getElementById("temp1").innerHTML=data.name ;
    document.getElementById("temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.getElementById("km").innerHTML=data.wind.speed +" km/h";
    document.getElementById("per").innerHTML=data.main.humidity +" %";
        
    }

    searchBtn.addEventListener("click", () => {
        checkWheather(searchbox.value)
    });



    