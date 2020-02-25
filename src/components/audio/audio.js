import React, { useEffect } from 'react';

import { audioVisual } from '../../sripts';
import './audio.css';

const Audio = ({ range = 50, link }) => {

  let onAudioPlay;

  useEffect(() => {
    onAudioPlay = audioVisual(link)
  }, [onAudioPlay])

  const columns = [];

  for (let i = 0; i < range; i++) {
    columns.push(<span key={i} className='visualisator__column'></span>)
  }

  const audioPlay = () => onAudioPlay();

  return (
    <div className='audio'>
      <div className='visualisator'>
        <audio src={link} id='audio' />
        {columns.map(el => el)}
      </div>
      <section className='controls'>
        <button onClick={audioPlay} >
          <i className='square'></i>

        </button>
      </section>
    </div>
  )
}

export default Audio;