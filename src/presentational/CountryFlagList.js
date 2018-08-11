import React from 'react';
import { Link } from 'react-router';
import CountryFlag from './CountryFlag';
import '../country.css';

const countryFlagList = (props) => (
  <div className="countries-list">
    {props.countries.map(country => {
      return (
        <div className="single-single-country" key={country.id}>
          <Link className="logo" to={'countries/country/' + country.id} >
            <CountryFlag country={country} />
          </Link>
        </div>
      )
    })}
  </div>
)

export default countryFlagList;