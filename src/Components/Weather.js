import React from "react";
import moment from "moment";

const Weather = ({ weatherData }) => {
  return (
    <div
      className="flex flex-col lg:text-7xl md:text-5xl sm:text-4xl text-3xl lg: leading-loose shadow-2xl border-solid border-black border-8 p-10 bg-white rounded-3xl
    "
    >
      <div className="text-center pb-10 font-bold tracking-wider text-red-400 hover:underline hover: cursor-pointer">
        {weatherData.name}
      </div>
      <div>
        <div>
          <p>Temperature: {weatherData.main.temp}&deg;C</p>
          <p>Feels like: {weatherData.main.feels_like}&deg;C</p>
        </div>
        <div>
          <p>
            Sunrise:{" "}
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
              "en-NZ"
            )}
          </p>
          <p>
            Sunset:{" "}
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
              "en-NZ"
            )}
          </p>
        </div>
        <p>Description: {weatherData.weather[0].description}</p>
        <p>Date: {moment().format("LL")}</p>
      </div>
    </div>
  );
};

export default Weather;
