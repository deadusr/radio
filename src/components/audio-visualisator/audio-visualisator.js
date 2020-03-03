import React, { useEffect } from 'react';

import { visualizeMusic } from '../../sripts';


export default ({ range }) => {

  useEffect(() => {
    visualizeMusic()
  }, [])

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