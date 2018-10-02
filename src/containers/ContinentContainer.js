import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setContinent, deleteCountry } from '../actions/actions';
import CountryFlagList from '../presentational/CountryFlagList';

class ContinentContainer extends Component {
  componentDidMount(){
    this.props.dispatch(setContinent('Europe'));
  }
  chooseContinent(event){
    this.props.dispatch(setContinent(event.target.value));
  }
  deleteCountry(id){
    this.props.dispatch(deleteCountry(id));
  }

  render() {
    return (
      <div>
        <select className="select" onChange={e => this.chooseContinent(e)}>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
        </select>
        <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)} />
      </div>
    )
  }
}

const mapStateToProps = function (store) {
  return {
      visibleCountries: store.countriesReducer.visibleCountries
  };
}

export default connect(mapStateToProps)(ContinentContainer);