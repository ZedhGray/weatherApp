import { useState } from 'react'

const WeatherCard = ({ weather, temp }) => {
  const [isCelsius, setIsCelsius] = useState(true)
  const handleChangeTemp = () => {
    setIsCelsius(!isCelsius)
  }
  return (
    // App name and city
    <article className="Card">
      <header>
        <h1 className="Title_App">Weather App</h1>
        <h2 className="City">
          {weather?.name}, {weather?.sys.country}
        </h2>
      </header>
      {/* Weather info and icons */}
      <section>
        <div className="container_temp">
          <div className="contend_temp">
            <div className="img_temp">
              <img
                src={
                  weather &&
                  `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`
                }
                alt=""
              />
            </div>
          </div>
          <div className="contend_temp">
            <h2 className="temp">{isCelsius ? `${temp?.celsius} °C` : `${temp?.farenheit} °F `}</h2>
            <button onClick={handleChangeTemp} className='transUp btn'>Change to {isCelsius ? `°F` : `°C`}</button>
          </div> 
        </div>
        {/* Weather info*/}
        <div className='weather__info'>
          <h3 className="weather__info-title">"{weather?.weather[0].description}"</h3>
          <ul className="weather__list">
            <li className='weather__list-item'>
              <span className='weather__list-label'>Wind Speed </span>
              <span className='weather__list-value'>{weather?.wind.speed} m/s</span>
            </li>
            <li className='weather__list-item'>
              <span className='weather__list-label'>Clouds </span>
              <span className='weather__list-value'>{weather?.clouds.all} %</span>
            </li>
            <li className='weather__list-item'>
              <span className='weather__list-label'>Pressure </span>
              <span className='weather__list-value'>{weather?.main.pressure} hPa</span>
            </li>
          </ul>
        </div>
      </section>
    </article>
  )
}

export default WeatherCard
