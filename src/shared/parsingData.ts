import { DataWeather } from "../interface/data";

const parsingData = (data: any): DataWeather => {
  return {
    name: data.location.name,
    region: data.location.region,
    country: data.location.country,
    date: data.current.last_updated,
    tempC: data.current.temp_c,
    tempF: data.current.temp_f,
    wind: data.current.wind_kph,
    humidity: data.current.humidity,
  };
};

export default parsingData;
