import React from 'react';

import Header from '../header';
import RadionSelection from '../radio-selection';
import Audio from '../audio';

const App = props => {
  return (
    <div className='radio'>
      <Header />
      <RadionSelection />
      <Audio />
    </div>
  )
}

export default App;