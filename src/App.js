import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Weather from "./Components/Weather";

export default function App() {
  const [lat, setLat] = useState([]);
  const [lon, setLong] = useState([]);
  // const [cityName, setCityName] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        console.log(lon, lat);
      });

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, lon]);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-200 uppercase">
        {typeof data.main != "undefined" ? (
          <Weather weatherData={data} />
        ) : (
          <div className="text-red-800 flex flex-col leading-10 justify-center items-center text-center">
            <CircularProgress />
            <p>If nothing happens after 10 seconds please refresh</p>
          </div>
        )}
      </div>
    </>
  );
}
