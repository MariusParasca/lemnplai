import React from 'react';

import Head from '../components/Head/Head';

import './index.css';
import Header from '../components/Header/Header';
import NavigationBar from '../components/NavigationBar/NavigationBar';

function App() {
  return (
    <div className="App">
      <Head />
      <Header />
      <NavigationBar />
    </div>
  );
}

export default App;
