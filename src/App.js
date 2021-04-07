import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main'
import PathToCreateAdd from './PathToCreateAdd'
import CurrentAds from './CurrentAds'
import AboutSite from './AboutSite'

function App() {
  return (
    <div className='wrapper'>
      <Main/>
      <PathToCreateAdd/> 
      <CurrentAds/>
      <AboutSite/> 
    </div>
  );
}

export default App;
