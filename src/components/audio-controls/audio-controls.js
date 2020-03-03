import React from 'react';

import { controlMusic } from '../../sripts';

export default () => {
  return (
    <div className='audio__control'>
      <button onClick={controlMusic}>
        <i className='square'></i>
      </button>
    </div>
  )
}