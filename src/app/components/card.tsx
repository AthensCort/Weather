"use client";
import React, { useEffect, useState } from "react";
import { fetchWeather } from "../API/weatherApi";
import { Weather } from "../types/weather";
import "./card.css";

type WeatherCardProps = {
  city: string;
};

const WeatherCard: React.FC<WeatherCardProps> = ({ city }) => {
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchWeather(city);
      setWeather(data);
    };
    getWeather();
  }, [city]);

  if (!weather) return <div className="weather-card">Cargando clima...</div>;

  return (
    <div className="weather-card">
      <h2>{weather.location.name}, {weather.location.country}</h2>
      <div className="weather-info">
        <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
        <div>
          <p className="temp">{weather.current.temp_c}°C</p>
          <p>{weather.current.condition.text}</p>
        </div>
      </div>
      <p className="feels">Sensación térmica: {weather.current.feelslike_c}°C</p>
      <p>Humedad: {weather.current.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
