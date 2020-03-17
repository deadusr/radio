import React from 'react';
import { connect } from 'react-redux';

import { setDevise } from '../../actions';
import Header from '../header';
import RadioSelection from '../radio-selection';
import Audio from '../audio';
import './app.css';

const App = ({ setDevise }) => {

  if (window.matchMedia("(min-width: 769px)").matches) setDevise('compucter')
  else if (window.matchMedia("(max-width: 769px)").matches) setDevise('mobile')
  return (
    <div className='radio'>
      <Header />
      <RadioSelection />
      <Audio />
    </div>
  )
}

const mapDispatchToProps = {
  setDevise
}

export default connect(null, mapDispatchToProps)(App);