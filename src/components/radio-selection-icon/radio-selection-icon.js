import React from 'react';
import { connect } from "react-redux"
import spriteIcons from './sprite.svg';

const RadioSelectionIcon = ({ genre, currentGenre}) => {
  return (
    <span className={`radion__selections_item ${currentGenre === genre && 'active'}`}>
      <i>
        <svg>
          <use xlinkHref={`${spriteIcons}#${genre}`}></use>
        </svg>
      </i>
    </span>
  )
}

const mapStateToProps = state => ({
  currentGenre: state.genre
})

export default connect(mapStateToProps)(RadioSelectionIcon);
