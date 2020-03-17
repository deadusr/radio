import React from 'react';

import icon from './loading.svg';
import './loading-indicator.css';

const LoadingIndicator = props => {
  return (
    <div className='loading-indicator'>
      <img className='loading-img' src={icon} />
    </div>
  )
}

export default LoadingIndicator;