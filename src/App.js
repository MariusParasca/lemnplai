import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  const routes = (
    <Switch>
      <Route path="/services" component={Services} />
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
