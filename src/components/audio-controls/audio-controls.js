import React, { useState } from 'react';

import { controlMusic } from '../../sripts';
import icon from './volume.svg';
import './audio-controls.css';

export default ({audio}) => {

  const [state, setState] = useState({
    play: false,
    mute: false
  });

  const onPlayMusic = () => {
    setState({
      ...state,
      play: !state.play
    })
    controlMusic('play', audio);
  }

  const onMuteMusic = () => {
    setState({
      ...state,
      mute: !state.mute
    })
    controlMusic('mute', audio)
  }

  return (
    <React.Fragment>
      <button
        className={`audio__control btn__play ${state.play && 'play'}`}
        onClick={onPlayMusic}>
      </button>
      <button
        className={`audio__control btn__mute ${state.mute && 'mute'}`}
        onClick={onMuteMusic}
      >
        <img src={icon} alt='icon' />
      </button>
    </React.Fragment>
  )
}