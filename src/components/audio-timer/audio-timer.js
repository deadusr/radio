import React from 'react';

export default () => {
  return (
    <div className='audio__timer'>
      <div className='audio__timer_stroke'>
        <span id='audio__status-bar'></span>
      </div>
      <div className='audio__timer_time'>
        <span className='current__postition'>0:02</span>
        <span className='current__postition'>-4.08</span>
      </div>
    </div>
  )
}