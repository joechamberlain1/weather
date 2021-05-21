import React from 'react'
import moment from 'moment'
import './Weather.css'

const Weather = ({weatherData}) => {
    return (
        <div className='weather-card'>
            <div className='card-header'>
                {weatherData.name}
            </div>
            <div className='card-content'>
                <div className='flex'>
                <p>Temperature: {weatherData.main.temp}&deg;C</p>
                <p>Feels like: {weatherData.main.feels_like}&deg;C</p>
                </div>
                <div>
                <p>Sunrise: {new Date(weatherData.sys.sunrise*1000).toLocaleTimeString('en-NZ')}</p>
                <p>Sunset: {new Date(weatherData.sys.sunset*1000).toLocaleTimeString('en-NZ')}</p>
                </div>
                <p>Description: {weatherData.weather[0].description}</p>
                <p>Date: {moment().format('LL')}</p>
            </div>
        </div>
    )
}

export default Weather
