"use client";
import React, { useState } from "react";
import WeatherCard from "./card";
import SearchBar from "./searchbar";

const WeatherSearch = () => {
  const [cities, setCities] = useState<string[]>([]); // Estado para almacenar las ciudades

  const handleSearch = (query: string) => {
    if (!cities.includes(query)) {
      setCities((prevCities) => [...prevCities, query]); // Añade la ciudad a la lista si no está ya
    }
  };

  const handleRemoveCity = (city: string) => {
    setCities(cities.filter((item) => item !== city)); // Elimina la ciudad de la lista
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="city-cards-container">
        {cities.map((city, index) => (
          <div className="relative" key={index}>
            <button
              className="close-button"
              onClick={() => handleRemoveCity(city)}
            >
              ×
            </button>
            <WeatherCard city={city} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherSearch;
