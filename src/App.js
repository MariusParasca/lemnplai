import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Header from './components/common/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products/Products';

function App() {
  const routes = (
    <Switch>
      <Route path="/products" component={Products} />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App">
      <Header title="Lemnplai" />
      {routes}
    </div>
  );
}

export default App;
