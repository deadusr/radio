import React, { useEffect } from 'react';
import { connect } from 'react-redux';


import { withServices } from '../hos-helpers';
import { setCurrentTrack } from '../../actions';
import AudioVisualisator from '../audio-visualisator';
import AudioControls from '../audio-controls';
import AudioTimer from '../audio-timer';
import './audio.css';

const Audio = ({ services, currentTrack, setCurrentTrack }) => {

  const getRadio = () => {
    services.getRadio()
      .then(({ currentTrack }) => services.getMusic(currentTrack)
        .then((track) => setCurrentTrack(track)))
  }

  const createAudio = () => {
    const audio = document.createElement('audio');
    audio.src = link;
    audio.addEventListener('canplay', () => audio.play())
    audio.addEventListener('ended', getRadio);
    return audio;
  }

  useEffect(getRadio, [])

  const { title, artist, link } = currentTrack;
  const audio = createAudio();

  return (
    <div className='audio'>
      <AudioVisualisator audio={audio} range={60} />
      <div className='audio__info'>
        <AudioTimer audio={audio} />
        <span className='audio__title'>{`${artist} - ${title}`}</span>
        <AudioControls audio={audio} />
      </div>
    </div>
  )

}



const mapStateToProps = (state) => {
  return {
    currentTrack: state.currentTrack
  }
}
const mapDispatchToProps = {
  setCurrentTrack
}
export default connect(mapStateToProps, mapDispatchToProps)(withServices(Audio));