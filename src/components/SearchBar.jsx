import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(term); // Llama la función que definiste en App.jsx
  };

  return (
    <div className="SearchBar">
      <input 
        placeholder="Buscar canciones" 
        value={term} 
        onChange={handleChange} 
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default SearchBar;
