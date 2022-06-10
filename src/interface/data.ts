import React from "react";
import internal from "stream";

export interface DataWeather {
  name: string;
  region: string;
  country: string;
  date: string;
  tempC: number;
  tempF: number;
}
