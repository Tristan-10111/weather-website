const inputTxt = document.querySelector('.inputTxt');
const button = document.querySelector('.btn');
const showData = document.querySelector('.showData');

//Created API Key in OpenWeather.org
const API_Key = "a0e78d3b449db7059df0a38abd3952f8";


// Adding eventListener
button.addEventListener('click', () => {
    const cityInput = inputTxt.value;
    console.log(cityInput);

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_Key}`)
        .then(res => res.json())//res is the 
        .then(data => {
            console.log(data);
            inputTxt.value = " "; // empty string for when you fill in your country an press submit it clears a input so that u can enter a new country
          
            showData.innerHTML = `
                                <ul>
                                    <li class="desc">${data.weather[0].description}</li>
                                    <li class="city">${data.name}</li>
                                    <li class="temp">${data.main.temp}°c</li>
                                </ul>
                                `; 

        });

});