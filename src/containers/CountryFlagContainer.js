import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/CountryFlagList';
import { getCountries, searchCountries } from '../actions/actions';

class CountryFlagContainer extends Component {
  constructor(props) {
    super(props);
  }
  search(event) {
    console.log(this.props)
    this.props.dispatch(searchCountries(event.target.value));
  }
  componentDidMount(props){
    this.props.dispatch(getCountries());
  }
  render() {
    return (
      <div>
        <div className="search text-center">
          <input type="text" onChange={ this.search.bind(this) } />
        </div>
        <CountryFlagList countries={this.props.visibleCountries} />
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