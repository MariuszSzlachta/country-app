// React
import React from 'react';
import { render } from 'react-dom';
// React-Router
import  { Router, hashHistory } from 'react-router';
import routes from './routes';
// Redux
import { Provider } from 'react-redux';
import store from './store/index';
import { getCountries } from './actions/actions';


render(
<Provider store={store} >
  <Router history={hashHistory} routes={routes} />
</Provider>,
document.getElementById('root'));


store.dispatch(getCountries());
