import React from "react";
import moment from "moment";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    height: 35,
    width: 35,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
});

const Weather = ({ weatherData }) => {
  const temp = weatherData.main.temp;
  const feelsLike = weatherData.main.feels_like;

  const refresh = () => {
    window.location.reload();
  };
  const classes = useStyles();

  let weatherIcon = null;

  if (weatherData.weather[0].main === "Thunderstorm") {
    weatherIcon = <i className="fas fa-bolt" />;
  } else if (weatherData.weather[0].main === "Drizzle") {
    weatherIcon = <i className="fas fa-umbrella" />;
  } else if (weatherData.weather[0].main === "Rain") {
    weatherIcon = <i className="fas fa-cloud-rain" />;
  } else if (weatherData.weather[0].main === "Snow") {
    weatherIcon = <i className="fas fa-snowflake" />;
  } else if (weatherData.weather[0].main === "Clear") {
    weatherIcon = <i className="fas fa-sun" />;
  } else if (weatherData.weather[0].main === "Clouds") {
    weatherIcon = <i className="fas fa-cloud" />;
  } else {
    weatherIcon = <i className="fas fa-bolt" />;
  }
  return (
    <div
      className="flex flex-col lg:text-6xl md:text-5xl sm:text-4xl text-3xl lg: leading-loose shadow-2xl border-solid border-black border-8 p-10 bg-white rounded-3xl
    "
    >
      <div className="flex flex-col text-center pb-10 font-bold tracking-wider text-yellow-500">
        <Button
          className={classes.button}
          onClick={refresh}
          variant="outlined"
          color="primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
              clip-rule="evenodd"
            />
          </svg>
        </Button>
        <p>The weather in {weatherData.name}: </p>
      </div>
      <div>
        <div>
          <p>Temperature: {Math.round(temp)}&deg;C</p>
          <p>Feels like: {Math.round(feelsLike)}&deg;C</p>
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
        <p className="break-all">
          {weatherData.weather[0].description} {weatherIcon}
        </p>
        <p>Date: {moment().format("LL")}</p>
      </div>
    </div>
  );
};

export default Weather;
