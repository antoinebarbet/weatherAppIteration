import React, { useState } from "react";
import { DataWeather } from "../interface/data";
import { ReactComponent as WEATHER_ICONS_COLD } from "../SVG/WEATHER_ICONS_COLD.svg";
import { ReactComponent as WEATHER_ICONS_SUNNY } from "../SVG/WEATHER_ICONS_SUNNY.svg";

const WeatherVue = (data: DataWeather): JSX.Element => {
  const [scale, setScale] = useState(true);

  return (
    <div className="flex flex-col pl-12 pr-12">
      <p className="m-auto mt-3"> {data.date}</p>
      <div className="m-auto">
        <p className="text-center"> {data.name}</p>
        <p className="text-center">
          {" "}
          {data.region} {data.country}
        </p>
        <div className="flex items-center justify-center">
          {data.tempC < 15 ? <WEATHER_ICONS_COLD /> : <WEATHER_ICONS_SUNNY />}
          <p className=" text-3xl font-extrabold">
            {scale ? data.tempC + "° C" : data.tempF + "° F"}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <p className="-mr-3"> C </p>
          <label className="flex justify-between items-center p-2 text-xl">
            <input type="checkbox" className="appearance-none peer"></input>
            <span
              onClick={() => setScale(!scale)}
              className="cursor-pointer w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-cyan-300 rounded-full duration-300 ease-in-out peer-checked:bg-blue-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6"
            ></span>
          </label>
          <p>F</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherVue;
