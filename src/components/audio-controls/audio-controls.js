import React, { useState } from 'react';
import { connect } from 'react-redux';

import { setIsPlaying, setIsMute } from '../../actions';
import icon from './volume.svg';
import './audio-controls.css';

const AudioControls = ({ setIsPlaying, isPlaying, setIsMute, isMute, audio }) => {

  const [isLoading, setIsLoading] = useState(true);

  const onPlayMusic = () => {
    setIsPlaying(!isPlaying)
  }

  const onMuteMusic = () => {
    setIsMute(!isMute)
  }

  audio.addEventListener('canplay', () => setIsLoading(false))
  audio.addEventListener('ended', () => setIsLoading(true))

  if (audio && audio.src && !audio.ended) {
    isPlaying ? audio.play() : audio.pause();
    isMute ? audio.volume = 0 : audio.volume = 1;
  }

  return (
    <React.Fragment>
      <button
        className={`audio__control btn__play ${isPlaying && 'play'}`}
        disabled={isLoading}
        onClick={onPlayMusic}>
      </button>
      <button
        className={`audio__control btn__mute ${isMute && 'mute'}`}
        onClick={onMuteMusic}
      >
        <img src={icon} alt='icon' />
      </button>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  isPlaying: state.isPlaying,
  isMute: state.isMute
})

const mapDispatchToProps = {
  setIsPlaying,
  setIsMute
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioControls);