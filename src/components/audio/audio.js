import React from 'react';

const Audio = ({ audioSrc, range = 50 }) => {


  const columns = [];

  for (let i = 0; i < range; i++) {
    columns.push(
      <span className='visualisator__column'></span>
    )
  }

  console.log(columns)


  return (
    <div className='audio'>
      <audio src={audioSrc} />
      <div className='visualisator'>
        {columns.map(el => el)}
      </div>
    </div>
  )
}

export default Audio;