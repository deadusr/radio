import React from 'react';

import Header from '../header';
import RadionSelection from '../radio-selection';
import Audio from '../audio';

import music from './music.mp3';

const App = props => {
  return (
    <div className='radio'>
      <Header />
      <RadionSelection />
      <Audio link={music} />
    </div>
  )
}

export default App;