import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/CountryFlagList';
import { getCountries, searchCountries, deleteCountry } from '../actions/actions';

class CountryFlagContainer extends Component {
  componentDidMount(props){
    this.props.dispatch(getCountries());
    this.props.dispatch(searchCountries(''));
  }

  search(event) {
    console.log(this.props)
    this.props.dispatch(searchCountries(event.target.value));
  }

  deleteCountry(id){
    this.props.dispatch(deleteCountry(id));
  }

  render() {
    return (
      <div>
        <div className="search text-center">
          <input type="text" placeholder="country name" onChange={ this.search.bind(this) } />
        </div>
        <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    countries: store.countriesReducer.countries,
    visibleCountries: store.countriesReducer.visibleCountries
  }
};

export default connect(mapStateToProps)(CountryFlagContainer);