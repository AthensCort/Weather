"use client";
import React, { useState } from "react";
import "./searchbar.css";
import { fetchWeather } from "../API/weatherApi";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState<{place:string, placeData:any}[]>();
  

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    fetchWeather(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">Buscar</button>
    </form>
  );
};

export default SearchBar;
