import React from 'react';
import { Link } from 'react-router';
import CountryFlag from './CountryFlag';

const countryFlagList = (props) => (
  <div className="countries-list">
    {props.countries.map(country => {
      return (
        <div className="single-single-country">
          <Link className="logo" to={'countries/country/' + country.id} >
            <CountryFlag country={country} />
          </Link>
        </div>
      )
    })}
  </div>
)



export default countryFlagList;