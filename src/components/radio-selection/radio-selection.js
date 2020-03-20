import React from 'react';
import { connect } from 'react-redux';

import { setGenre } from '../../actions';
import './radio-selection.css';
import spriteIcons from './sprite.svg';

const RadioSelection = ({ currentGenre, setGenre }) => {

  const renderButtom = genre => {
    return (
      <button className={`radion__selections_item ${currentGenre === genre && 'active'}`}>
        <i>
          <svg>
            <use xlinkHref={`${spriteIcons}#${genre}`}></use>
          </svg>
        </i>
      </button>
    )
  }

  return (
    <div className='radio__selections_wrap'>
      <button className='radion__selections_arrow'>&lsaquo;</button>
      <div className='radio__selections'>
        {renderButtom('edm')}
        {renderButtom('hip-hop')}
        {renderButtom('rock')}
        {renderButtom('acoustic')}
        {renderButtom('classic')}
      </div>
      <button className='radion__selections_arrow'>&rsaquo;</button>
    </div>
  )
}

const mapStateToProps = state => ({
  currentGenre: state.genre
})

const mapDispatchToProps = {
  setGenre
}

export default connect(mapStateToProps, mapDispatchToProps)(RadioSelection);