import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Weather from "./Components/Weather";

const App = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // const handleResize = () => {
  //   setWindowWidth(window.innerWidth);
  // };

  // console.log(windowWidth);

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  // }, []);

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-yellow-200 uppercase ">
        {typeof data.main != "undefined" ? (
          <Weather weatherData={data} />
        ) : (
          <div className="text-red-800 flex flex-col leading-10 justify-center items-center text-center">
            <CircularProgress />
            <p>If nothing happens after 10 seconds please refresh</p>
          </div>
        )}
      </div>

      {/* {windowWidth} */}
    </>
  );
};

export default App;
