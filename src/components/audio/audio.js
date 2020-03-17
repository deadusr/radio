import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


import { withServices } from '../hos-helpers';
import { setCurrentTrack } from '../../actions';
import AudioVisualisator from '../audio-visualisator';
import AudioControls from '../audio-controls';
import AudioTimer from '../audio-timer';
import LoadingIndicator from '../loading-indicator';
import ErrorIndicator from '../error-indicator';
import './audio.css';
import ErrorBoundry from '../error-boundry';

const Audio = ({ services, currentTrack, setCurrentTrack, devise }) => {
  const [audio, setAudio] = useState();
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const { title, artist, link } = currentTrack;

  const getRadio = () => {
    services.getRadio()
      .then(({ currentTrack }) => getTrack(currentTrack))
      .catch(onError)
  }

  const getTrack = id => {
    services.getMusic(id)
      .then((track) => {
        setCurrentTrack(track)
        setLoading(false)
      })
      .catch(onError)
  }

  const createAudio = () => {
    const audio = document.createElement('audio');
    audio.src = link;
    audio.addEventListener('ended', getRadio);
    return audio;
  }

  const onError = (err) => {
    console.error(err);
    setError(true);
    setLoading(false)
  }

  useEffect(() => {
    getRadio();
  }, [])

  useEffect(() => {
    setAudio(createAudio)
  }, [currentTrack])


  if (isLoading) return <LoadingIndicator />
  if (isError) return <ErrorIndicator />

  const renderAudio =
    <div className='audio'>
      <AudioVisualisator audio={audio} range={devise === 'mobile' ? 30 : 60} />
      <div className='audio__info'>
        <AudioTimer audio={audio} />
        <span className='audio__title'>{`${artist} - ${title}`}</span>
        <AudioControls audio={audio} />
      </div>
    </div>;

  return (renderAudio)
}



const mapStateToProps = (state) => {
  return {
    currentTrack: state.currentTrack,
    devise: state.devise
  }
}
const mapDispatchToProps = {
  setCurrentTrack
}
export default connect(mapStateToProps, mapDispatchToProps)(withServices(Audio));