import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const LoadCountries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Visiting Every country of the world!!</h1>
      <h3>Available Countries: {countries.length}</h3>
      {countries.map((country) => (
        <Country name={country.name.common} population={country.population} />
      ))}
    </div>
  );
};

export default LoadCountries;
