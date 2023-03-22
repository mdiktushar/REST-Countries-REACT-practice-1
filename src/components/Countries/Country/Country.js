import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, area, region, flags } = props.country;
  return (
    <div className="country">
      <h3>Name: {name.common}</h3>
      <img src={flags.png} alt={name.common} />
      <p>Area: {area} km&sup2;</p>
      <p>
        <small>Region: {region}</small>
      </p>
    </div>
  );
};

Country.propTypes = {};

export default Country;
