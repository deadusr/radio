import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { setGenre } from '../../actions';
import RadioSelectionIcon from '../radio-selection-icon';
import './radio-selection.css';


const RadioSelection = ({ setGenre }) => {
  const genreList = ['edm', 'hip-hop', 'rock', 'acoustic', 'classic'];
  const [activeGenre, setActiveGenre] = useState(2);

  useEffect(() => {
    setGenre(genreList[activeGenre])
  }, [activeGenre])


  const onChangeGenre = char => {
    char === '+' ? increateGenre() : decreaseGenre();
  }

  const increateGenre = () => {
    setActiveGenre(activeGenre >= genreList.length - 1 ? 0 : activeGenre + 1)
  }
  const decreaseGenre = () => {
    setActiveGenre(activeGenre === 0 ? genreList.length - 1 : activeGenre - 1)
  }

  return (
    <div className='radio__selections_wrap'>
      <button onClick={() => onChangeGenre('-')} className='radion__selections_arrow'>&lsaquo;</button>
      <div className='radio__selections'>
        {genreList.map((genre, idx) => <RadioSelectionIcon key={idx} genre={genre} />)}
      </div>
      <button onClick={() => onChangeGenre('+')} className='radion__selections_arrow'>&rsaquo;</button>
    </div>
  )
}

const mapDispatchToProps = {
  setGenre
}

export default connect(null,mapDispatchToProps)(RadioSelection);