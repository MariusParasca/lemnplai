import React from 'react';
import './App.css';
import ContactDataBanner from './components/ContactDataBanner/ContactDataBanner';
import NavigationBar from './components/NavigationBar/NavigationBar';
import ImageSlider from './components/ImageSlider/ImageSlider';
import TextBanner from './components/TextBanner/TextBanner';

function App() {
  return (
    <div className="App">
      <ContactDataBanner />
      <NavigationBar />
      <ImageSlider />
      <TextBanner />
    </div>
  );
}

export default App;
