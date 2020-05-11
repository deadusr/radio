import React from 'react';

import icon from './error.svg';
import './error-indicator.css';

const ErrorIndicator = props => {
  return (
    <div className='error-indicator'>
      <h4 className='error-indicator__text'>An error has occurred</h4>
      <img className='error-indicator__icon' src={icon} alt='error' />
    </div>
  )
}

export default ErrorIndicator;