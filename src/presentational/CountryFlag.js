import React from 'react';
import '../country.css';

const countryFlag = (props) => {
  return (
    <div className="country-logo-wrapper">
      <img className="country-logo" src={props.country.imageUrl} alt="country" />
    </div>
  );
};

export default countryFlag;