import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/Navigation';
import Home from './presentational/Home';
import Contact from './presentational/Contact';
import NotFound from './presentational/NotFound';
import CountryFlagContainer from './containers/CountryFlagContainer';
import CountryDetailsContainer from './containers/CountryDetailsContainer';
import ContinentContainer from './containers/ContinentContainer';

export default (
  <Route path='/' component={Navigation} >
    <IndexRoute component={Home} />
    <Route path='countries'>
      <IndexRoute component={CountryFlagContainer} />
      <Route path='country/:id' component={CountryDetailsContainer} />
    </Route>
    <Route path='continents' component={ContinentContainer} />
    <Route path='contact' component={Contact}/>
    <Route path='*' component={NotFound}/>
  </Route>
)