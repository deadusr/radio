import React from 'react';

import Header from '../header';
import RadioSelection from '../radio-selection';
import Audio from '../audio';
import './app.css';

const App = props => {
  return (
    <div className='radio'>
      <Header />
      <RadioSelection />
      <Audio />
    </div>
  )
}

export default App;