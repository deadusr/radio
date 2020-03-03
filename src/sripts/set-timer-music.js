export default (setCurrentTime) => {
  const audio = document.getElementById('audio');
  audio.addEventListener('timeupdate', () => {
    setCurrentTime(audio.currentTime);
  })
}

