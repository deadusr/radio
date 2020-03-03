import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


import { withServices } from '../hos-helpers';
import { setCurrentTrack } from '../../actions';
import AudioVisualisator from '../audio-visualisator';
import AudioControls from '../audio-controls';
import AudioTimer from '../audio-timer';
import './audio.css';

const Audio = ({ services, currentTrack, setCurrentTrack }) => {



  const getTrackFromServer = () => {
    services.getTrack('4rQYDXfKFikLX4ad674jhg')
      .then((track) => {
        setCurrentTrack(track);
      })
  }

  services.getTrack()

  useEffect(getTrackFromServer, [])

  const { link, name, artist } = currentTrack;

  return (
    <div className='audio'>
      <audio src={link} id='audio' controls />
      <AudioVisualisator range={50} />
      <div className='audio__info'>
        <AudioTimer />
        <span className='audio__title'>{`${artist} - ${name}`}</span>
        <AudioControls />
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