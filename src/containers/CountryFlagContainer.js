import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/CountryFlagList';
import { getCountries } from '../actions/actions';

class CountryFlagContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.dispatch(getCountries());
  }
  render() {
    return (
      <div>
        <CountryFlagList countries={this.props.countries} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    countries: store.countriesReducer.countries
  }
};

export default connect(mapStateToProps)(CountryFlagContainer);