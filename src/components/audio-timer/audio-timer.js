import React, { useState, useEffect } from 'react';

import { setTimerMusic } from '../../sripts';
import './audio-timer.css';

export default ({ audio }) => {

  const [duration, setDuration] = useState(0);

  const [currentTime, setCurrentTime] = useState(0);

  const getCurrentTime = (time) => {
    setCurrentTime(time)
  }

  useEffect(() => {
    setTimerMusic(getCurrentTime, audio);
    audio.addEventListener('canplay', () => setDuration(audio.duration))
  }, [audio])

  const getTimeInMin = (duration) => {
    const minute = Math.floor(duration / 60);
    const sec = (duration - (minute * 60)).toFixed(0).padStart(2, '0');
    return minute + ':' + sec;
  }

  const strokeLength = (currentTime / duration * 100).toFixed(2);


  return (
    <React.Fragment>
      <div className='audio__timer_stroke'>
        <span
          style={{
            width: `${strokeLength}%`
          }}
          id='audio__status-bar'></span>
      </div>
      <span className='audio__timer current_postition'>{getTimeInMin(currentTime)}</span>
      <span className='audio__timer duration'>{getTimeInMin(duration)}</span>
    </React.Fragment>
  )
}