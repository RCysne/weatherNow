// Geolocation
// const geolocation = navigator.geolocation.getCurrentPosition(position => {
//   let lat = position.coords.latitude
//   let lon = position.coords.longitude

//   let div = document.querySelector('.return')

//   div.innerHTML = `
//     <h4>
//       A sua latitude é ${lat}, e a longitude é ${lon}.
//     </h4>`
// })

//--------------------------------------------------------------

// Variáveis e seleção de elementos

// Open Weather Api Key
const weatherApiKey = '66661e505ae111ab3df074bb5aeab6c6'
const countryApi = 'https://countryflagsapi.com/png/'

const cityInput = document.querySelector('#city-input')
const searchBtn = document.querySelector('#search')

//  Funções

const showWeatherData = city => {
  console.log(city)
}

//  Eventos

searchBtn.addEventListener('click', event => {
  event.preventDefault()

  const city = cityInput.value
  showWeatherData(city)
})
