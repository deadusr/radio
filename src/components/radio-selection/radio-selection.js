import React from 'react';

import spriteIcons from './sprite.svg';

const RadioSelection = props => {
  return (
    <div className='radio__selections_wrap'>
      <button className='radion__selections_array'>&lsaquo;</button>
      <div className='radio__selections'>
        <button className='radion__selections_item'>
          <i>
            <svg>
              <use xlinkHref={`${spriteIcons}#dance`}></use>
            </svg>
          </i>
        </button>
        <button className='radion__selections_item'>
          <i>
            <svg>
              <use xlinkHref={`${spriteIcons}#hip-hop`}></use>
            </svg>
          </i>
        </button>
        <button className='radion__selections_item'>
          <i>
            <svg>
              <use xlinkHref={`${spriteIcons}#rock`}></use>
            </svg>
          </i>
        </button>
        <button className='radion__selections_item'>
          <i>
            <svg>
              <use xlinkHref={`${spriteIcons}#folk`}></use>
            </svg>
          </i>
        </button>
        <button className='radion__selections_item'>
          <i>
            <svg>
              <use xlinkHref={`${spriteIcons}#classic`}></use>
            </svg>
          </i>
        </button>
      </div>
      <button className='radion__selections_array'>&rsaquo;</button>
    </div>
  )
}

export default RadioSelection;