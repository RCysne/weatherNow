// Variáveis e seleção de elementos

// Open Weather Api Key
const weatherApiKey = '66661e505ae111ab3df074bb5aeab6c6'

const cityInput = document.querySelector('#city-input')
const searchBtn = document.querySelector('#search')

const cityElement = document.querySelector('#city')
const tempElement = document.querySelector('#temperature span')
const weatherIcon = document.querySelector('#weather-icon')
const descElement = document.querySelector('#description')
const umidityElement = document.querySelector('#umidity span')
const windElement = document.querySelector('#wind span')
const countryName = document.querySelector('#country')
const weatherContainer = document.querySelector('#weather-data')

//  Funções
//Função para pegar dados da api
const getWeatherData = async city => {
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherApiKey}&lang=pt_br`

  const res = await fetch(weatherApiUrl)
  const data = await res.json()

  // Retornar para poder pegar os dados fora da função
  return data
}

// Criação da função de expressão para usar o data fornecido pelo retorno da getWeatherData. Por ser assíncrona, essa função também deve ser
const showWeatherData = async city => {
  const data = await getWeatherData(city)
  // console.log(data)

  cityElement.innerText = data.name
  tempElement.innerText = Number(data.main.temp)
  umidityElement.innerText = `${data.main.humidity}%`
  windElement.innerText = `${data.wind.speed} Km/h`
  descElement.innerText = data.weather[0].description
  countryName.innerText = data.sys.country
  // Alterando apenas o atributo, e não o elemento como um todo e nem só o texto
  weatherIcon.setAttribute(
    'src',
    `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  )
  // weatherContainer.classList.remove('hide')
}

//  Eventos

searchBtn.addEventListener('click', event => {
  // event.preventDefault() quando houver o submit vai evitar de dar o refresh
  event.preventDefault()

  // Capturando o valor e colocando como argumento para ser utilizado na função
  const city = cityInput.value
  showWeatherData(city)
  cityInput.value = ''
})

//--------------------------------------------------------------

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
