import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/actions';
import CountryDetails from '../presentational/CountryDetails';

class CountryDetailsContainer extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.dispatch(getCountry(this.props.params.id))
  }

  render() {
    return (
      <div>
        <CountryDetails country={this.props.selectedCountry} />
      </div>
    );
  }
}


const mapStateToProps = store => {
  return {
      selectedCountry: store.countriesReducer.selectedCountry
  };
};

export default connect(mapStateToProps)(CountryDetailsContainer);