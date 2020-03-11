export default (action, audio) => {
  switch (action) {
    case 'play':
      playMusic(audio);
      break;
    case 'mute':
      muteMusic(audio);
      break;
    default :
      return 0;
  }
}

const playMusic = (audio) => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause()
  }
}

const muteMusic = (audio) => {
  if (audio.volume === 1) audio.volume = 0;
  else audio.volume = 1;
}
