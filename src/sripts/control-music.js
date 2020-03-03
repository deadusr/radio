export default () => {

  const audio = document.getElementById('audio');

  console.log(audio)

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
