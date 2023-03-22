import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
};

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
      <p>
        Available Countries: {countries.length}
      </p>
    </div>
  );
};

export default App;
