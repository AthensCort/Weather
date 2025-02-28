"use client";
import React, { useState } from "react";
import "./searchbar.css";
import { FiSearch } from "react-icons/fi";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        placeholder="Buscar ciudad..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button
        type="submit"
        className="search-button"
        aria-label="Buscar"
        style={{ marginLeft: "8px" }}
      >
        <FiSearch size={20} />
      </button>
    </form>
  );
};

export default SearchBar;
