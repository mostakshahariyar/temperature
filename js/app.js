const API_KEY = `b119dee5120d18456228b9df8b214052`;
const searchTemperature = () => {
    const searchField = document.getElementById('search-field').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchField}&appid=${API_KEY}&units=metric`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperatureResult(data))
}
const textCity = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperatureResult = temperature => {
    textCity('city-name', temperature.name)
    textCity('temperature', temperature.main.temp)
    textCity('condition', temperature.weather[0].main)
    // console.log(temperature);
    // set weather icon 
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const img = document.getElementById('weather-icon');
    img.setAttribute('src', url)
}