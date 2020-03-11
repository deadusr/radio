export default (setCurrentTime, audio) => {
  audio.addEventListener('timeupdate', () => {
    setCurrentTime(audio.currentTime);
  })
  audio.addEventListener('ended', () => {
    setCurrentTime(0);
  })
}

