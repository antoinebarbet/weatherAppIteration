import React, { useState } from "react";
import apiFetcher from "../shared/apiFetcher";
import { DataWeather } from "../interface/data";
import parsingData from "../shared/parsingData";
import WeatherVue from "./weather";

const Home = () => {
  const [userInput, setUserInput] = useState<string>();
  const [errorMessage, setErrorMessage] = useState("");
  const [dataWeather, setData] = useState<DataWeather>();

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      apiFetcher({
        url: `http://api.weatherapi.com/v1/current.json?key=${
          process.env.REACT_APP_APIKEYW
        }&q=${pos.coords.latitude.toString()},${pos.coords.longitude.toString()}&aqi=no`,
      }).then((jsonData) => {
        if (typeof jsonData === "string") {
          setErrorMessage("The chosen location is not available.");
        } else {
          setData(parsingData(jsonData));
          setErrorMessage("");
        }
      });
    });
  }, []);

  const handleSubmit = async () => {
    if (!userInput) {
      return;
    }
    apiFetcher({
      url: `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_APIKEYW}&q=${userInput}&aqi=no`,
    }).then((jsonData) => {
      if (typeof jsonData === "string") {
        setErrorMessage("The chosen location is not available.");
      } else {
        setData(parsingData(jsonData));
        setErrorMessage("");
      }
    });
  };
  return (
    <>
      <div className="bg-white rounded-lg m-auto relative top-10 border-2 border-gray-200 w-fit">
        <div className="flex justify-center p-1">
          <p className="pr-2">Choose a zip code or an address </p>
          <input
            className="rounded-md bg-slate-100 border-2 border-black ml-3 p-px text-ellipsis"
            placeholder="75018 / Paris"
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="bg-cyan-300 box-border text-black rounded-xl cursor-pointer ml-2 overflow-hidden relative text-center p-1 text-ellipsis"
          >
            {" "}
            Search{" "}
          </button>
        </div>
        {errorMessage && (
          <p className="text-red-600 text-center"> {errorMessage} </p>
        )}
        {dataWeather && (
          <WeatherVue
            name={dataWeather.name}
            region={dataWeather.region}
            country={dataWeather.country}
            date={dataWeather.date}
            tempC={dataWeather.tempC}
            tempF={dataWeather.tempF}
          />
        )}
      </div>
    </>
  );
};

export default Home;
