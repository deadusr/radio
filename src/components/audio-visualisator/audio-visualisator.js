import React, { useEffect } from 'react';

import { visualizeMusic } from '../../sripts';
import './audio-visualisator.css';


export default ({ range, audio }) => {

  useEffect(() => {
    visualizeMusic(audio)
  }, [audio])

  const columns = [];
  for (let i = 0; i < range; i++) {
    columns.push(<span key={i} className='visualisator__column'></span>)
  }

  return (
    <div className='audio__visualisator'>
      {columns.map(el => el)}
    </div>
  )
}