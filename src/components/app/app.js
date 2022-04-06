import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../navigation';
import { CatalogPage, HomePage, CartPage } from '../pages';

import './app.css';

const App = () => {
  return (
  	<main className="container">
  	  <Navigation />
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact />
  	    <Route
  	      path="/catalog"
  	      component={CatalogPage}
  	    />      
        <Route
          path="/cart"
          component={CartPage}
        />
  	  </Switch>
  	</main>
  );
};

export default App;